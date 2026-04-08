"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Text,
  Billboard,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

// --- Web Audio API Synth (Space Drone) ---
const useSpaceSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;
    const ctx = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();
    const gain = ctx.createGain();
    gain.gain.value = 0.0;

    // Deep Sub Drone
    const osc1 = ctx.createOscillator();
    osc1.frequency.value = 45;
    osc1.type = "sine";
    const osc2 = ctx.createOscillator();
    osc2.frequency.value = 45.4;
    osc2.type = "triangle";

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 150;

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();

    // Cosmic wind (pink noise approx)
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.05;
    }
    const noiseource = ctx.createBufferSource();
    noiseource.buffer = buffer;
    noiseource.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 600;
    noiseFilter.Q.value = 0.8;

    noiseource.connect(noiseFilter);
    noiseFilter.connect(gain);
    noiseource.start();

    audioCtxRef.current = ctx;
    gainNodeRef.current = gain;
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) initAudio();
    if (!audioCtxRef.current || !gainNodeRef.current) return;

    if (isPlaying) {
      gainNodeRef.current.gain.setTargetAtTime(
        0,
        audioCtxRef.current.currentTime,
        2.0,
      );
      setIsPlaying(false);
    } else {
      audioCtxRef.current.resume();
      // Swell in slowly like a cinematic movie
      gainNodeRef.current.gain.setTargetAtTime(
        1.0,
        audioCtxRef.current.currentTime,
        4.0,
      );
      setIsPlaying(true);
    }
  };

  return { isPlaying, toggleSound };
};

// --- GLSL Shaders ---

const basicVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const snoiseGLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0);
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    vec3  ns = (1.0/7.0) * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }
`;

const sunFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;

  ${snoiseGLSL}

  void main() {
    float n = snoise(vPosition * 3.5 + uTime * 0.15);
    n += 0.5 * snoise(vPosition * 7.0 - uTime * 0.2);

    vec3 colorA = vec3(0.95, 0.4, 0.0); 
    vec3 colorB = vec3(1.0, 0.8, 0.2);  
    vec3 colorC = vec3(1.0, 1.0, 0.9); 

    vec3 finalColor = mix(colorA, colorB, smoothstep(-0.5, 0.5, n));
    finalColor = mix(finalColor, colorC, smoothstep(0.4, 1.0, n));
    gl_FragColor = vec4(finalColor * 5.0, 1.0);
  }
`;

const atmoVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPositionNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmoFragmentShader = `
  uniform vec3 color;
  uniform float opacity;
  varying vec3 vNormal;
  varying vec3 vPositionNormal;
  void main() {
    float fresnel = dot(vNormal, vPositionNormal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    float intensity = pow(fresnel, 12.0);
    gl_FragColor = vec4(color, intensity * opacity);
  }
`;

// --- Utility Functions ---

const getPlanetPos = (
  radius: number,
  speed: number,
  time: number,
  offset: number,
) => {
  const t = time * speed + offset;
  return new THREE.Vector3(Math.cos(t) * radius, 0, Math.sin(t) * radius);
};

// --- $100k HUD Rendering Components ---

function DynamicSun({
  globalTime,
}: {
  globalTime: React.MutableRefObject<number>;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = globalTime.current;
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[3.0, 128, 128]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={basicVertexShader}
          fragmentShader={sunFragmentShader}
          uniforms={{ uTime: { value: 0 } }}
          toneMapped={false}
        />
      </mesh>

      <Billboard position={[0, 0, 0]}>
        <Text
          position={[0, 0, 3.3]}
          fontSize={2.5}
          fontWeight="900"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          A
          <meshBasicMaterial
            color="#ffffff"
            toneMapped={false}
            depthTest={false}
          />
        </Text>
      </Billboard>
    </group>
  );
}

function ObsidianPlanet({
  radius,
  speed,
  size,
  atmosphereColor,
  offset = 0,
  hasMoon = false,
  globalTime,
}: {
  radius: number;
  speed: number;
  size: number;
  atmosphereColor: string;
  offset?: number;
  hasMoon?: boolean;
  globalTime: React.MutableRefObject<number>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const moonRef = useRef<THREE.Mesh>(null);

  const targetScaleRef = useRef(1.0);
  const currentScaleRef = useRef(1.0);

  // Dramatically slowed down to imply massive physical scale
  const targetRotationSpeedRef = useRef(0.0005);
  const currentRotationSpeedRef = useRef(0.0005);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    targetScaleRef.current = hovered ? 1.05 : 1.0;
    targetRotationSpeedRef.current = hovered ? 0.008 : 0.0005;
  }, [hovered]);

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);

    if (groupRef.current) {
      groupRef.current.position.copy(
        getPlanetPos(radius, speed, globalTime.current, offset),
      );
    }

    if (planetRef.current) {
      currentRotationSpeedRef.current = THREE.MathUtils.lerp(
        currentRotationSpeedRef.current,
        targetRotationSpeedRef.current,
        1 - Math.exp(-2.0 * safeDelta),
      );
      planetRef.current.rotation.y += currentRotationSpeedRef.current;

      currentScaleRef.current = THREE.MathUtils.lerp(
        currentScaleRef.current,
        targetScaleRef.current,
        1 - Math.exp(-6.0 * safeDelta),
      );
      planetRef.current.scale.setScalar(currentScaleRef.current);
    }

    // Moon orbits locally around the planet
    if (hasMoon && moonRef.current) {
      const moonTime = globalTime.current * 4.0;
      moonRef.current.position.set(
        Math.cos(moonTime) * (size * 2.8),
        Math.sin(moonTime) * (size * 0.5),
        Math.sin(moonTime) * (size * 2.8),
      );
      moonRef.current.rotation.y += 0.01;
    }
  });

  const neonColor = useMemo(
    () => new THREE.Color(atmosphereColor),
    [atmosphereColor],
  );

  return (
    <group ref={groupRef}>
      <mesh
        ref={planetRef}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 128, 128]} />
        <meshPhysicalMaterial
          color="#020202"
          roughness={0.05}
          metalness={0.95}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          emissive={neonColor}
          emissiveIntensity={hovered ? 0.15 : 0.0}
          envMapIntensity={0.5}
        />

        <mesh scale={1.015}>
          <sphereGeometry args={[size, 64, 64]} />
          <shaderMaterial
            vertexShader={atmoVertexShader}
            fragmentShader={atmoFragmentShader}
            uniforms={{
              color: { value: neonColor },
              opacity: { value: hovered ? 15.0 : 8.0 },
            }}
            transparent
            depthWrite={false}
            depthTest={true}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
      </mesh>

      {/* Optional Moon perfectly emphasizing massive scale */}
      {hasMoon && (
        <mesh ref={moonRef} castShadow receiveShadow>
          <sphereGeometry args={[size * 0.18, 64, 64]} />
          <meshPhysicalMaterial
            color="#050505"
            roughness={0.7}
            metalness={0.5}
            clearcoat={0.3}
          />
        </mesh>
      )}
    </group>
  );
}

function DataRing({ radius, opacity }: { radius: number; opacity: number }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 256; i++) {
      // High def rings
      const angle = (i / 256) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          0,
          Math.sin(angle) * radius,
        ),
      );
    }
    return pts;
  }, [radius]);

  const lineObject = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: opacity,
    });
    return new THREE.Line(geometry, material);
  }, [points, opacity]);

  return <primitive object={lineObject} />;
}

function CinematicStarfield() {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, colors, sizes } = useMemo(() => {
    // Extremely vast, sparse starfield pushed far back to give depth
    const count = 2500;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    const cWhite = new THREE.Color("#ffffff");
    const cSilver = new THREE.Color("#aaaaaa");

    for (let i = 0; i < count; i++) {
      // Massive scale bounds
      const radius = 300 + Math.pow(Math.random(), 3.0) * 3500;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = Math.random() > 0.5 ? cWhite : cSilver;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      siz[i] = (Math.random() * 0.8 + 0.2) * (300 / radius);
    }
    return { positions: pos, colors: col, sizes: siz };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, colors, sizes]);

  return (
    <group ref={groupRef}>
      <points geometry={geometry}>
        <pointsMaterial
          size={1.8}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
          fog={true}
        />
      </points>
    </group>
  );
}

function OrthoCameraRig({
  globalTime,
  planetsData,
}: {
  globalTime: React.MutableRefObject<number>;
  planetsData: any;
}) {
  const scroll = useScroll();
  const { camera } = useThree();

  const currentLookAt = useMemo(() => new THREE.Vector3(), []);
  const targetPos = useMemo(() => new THREE.Vector3(), []);
  const lookAtTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    const time = globalTime.current;
    const o = scroll.offset;

    // We expanded the planet distances heavily. Orbit matches geometry.
    const p1 = getPlanetPos(
      planetsData[0].r,
      planetsData[0].s,
      time,
      planetsData[0].o,
    );
    const p2 = getPlanetPos(
      planetsData[1].r,
      planetsData[1].s,
      time,
      planetsData[1].o,
    );
    const p3 = getPlanetPos(
      planetsData[2].r,
      planetsData[2].s,
      time,
      planetsData[2].o,
    );

    if (o < 0.16) {
      const progress = o / 0.16;
      // Start astronomically far away
      targetPos.set(0, 10, 180 - progress * 80);
      lookAtTarget.set(0, 0, 0);
    } else if (o < 0.33) {
      const progress = (o - 0.16) / 0.17;
      const angle = progress * Math.PI * 0.5;
      targetPos.set(
        Math.sin(angle) * 100,
        12 + progress * 2,
        Math.cos(angle) * 100,
      );
      lookAtTarget.set(0, 0, 0);
    } else if (o < 0.5) {
      const offset = p1
        .clone()
        .normalize()
        .multiplyScalar(6.5)
        .add(new THREE.Vector3(0, 1.2, 0));
      targetPos.copy(p1).add(offset);
      lookAtTarget.copy(p1);
    } else if (o < 0.66) {
      const offset = p2
        .clone()
        .normalize()
        .multiplyScalar(12.0)
        .add(new THREE.Vector3(0, 2.5, 0));
      targetPos.copy(p2).add(offset);
      lookAtTarget.copy(p2);
    } else if (o < 0.83) {
      const offset = p3
        .clone()
        .normalize()
        .multiplyScalar(22.0)
        .add(new THREE.Vector3(0, 3.5, 0));
      targetPos.copy(p3).add(offset);
      lookAtTarget.copy(p3);
    } else {
      const progress = (o - 0.83) / 0.17;
      const startPos = p3
        .clone()
        .normalize()
        .multiplyScalar(22.0)
        .add(new THREE.Vector3(0, 3.5, 0))
        .add(p3);
      const endPos = new THREE.Vector3(0, 90, 190);
      targetPos.lerpVectors(startPos, endPos, progress);
      lookAtTarget.lerpVectors(p3, new THREE.Vector3(0, 0, 0), progress);
    }

    // Parallax breathing
    targetPos.x += Math.sin(time * 0.1) * 1.5;
    targetPos.y += Math.cos(time * 0.08) * 1.5;

    const dampPos = 1 - Math.exp(-3.5 * safeDelta);
    const dampLook = 1 - Math.exp(-6.0 * safeDelta);

    camera.position.lerp(targetPos, dampPos);
    currentLookAt.lerp(lookAtTarget, dampLook);
    camera.lookAt(currentLookAt);
  });
  return null;
}

// --- Space System Assembly ---

function InteractiveSystem() {
  const globalTime = useRef(0);

  // Vastly expanded orbit distances to give immense scale
  const planetsData = useMemo(
    () => [
      {
        r: 20.0,
        s: 0.15,
        size: 0.35,
        a: "#ff3300",
        o: Math.PI * 0.1,
        moon: false,
      },
      {
        r: 35.0,
        s: 0.08,
        size: 0.8,
        a: "#00eeff",
        o: Math.PI * 0.7,
        moon: true,
      }, // Added moon
      {
        r: 55.0,
        s: 0.04,
        size: 1.4,
        a: "#e100ff",
        o: Math.PI * 1.5,
        moon: true,
      }, // Massive outer planet
    ],
    [],
  );

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    // Severely slowed timeline down. Monolithic scale.
    globalTime.current += safeDelta * 0.1;
  });

  return (
    <>
      <CinematicStarfield />
      {/* 2nd Starfield Layer for deep parallax */}
      <group scale={1.5} rotation={[0.2, 0.5, 0.1]}>
        <CinematicStarfield />
      </group>

      <pointLight
        position={[0, 0, 0]}
        intensity={550}
        color="#ffffff"
        distance={450}
        decay={1.8}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.001}
      />

      <DynamicSun globalTime={globalTime} />

      <DataRing radius={planetsData[0].r} opacity={0.06} />
      <DataRing radius={planetsData[0].r + 0.15} opacity={0.02} />

      <DataRing radius={planetsData[1].r} opacity={0.06} />
      <DataRing radius={planetsData[1].r + 0.3} opacity={0.02} />

      <DataRing radius={planetsData[2].r} opacity={0.06} />
      <DataRing radius={planetsData[2].r + 0.5} opacity={0.02} />

      {planetsData.map((data, i) => (
        <ObsidianPlanet
          key={i}
          radius={data.r}
          speed={data.s}
          size={data.size}
          atmosphereColor={data.a}
          offset={data.o}
          hasMoon={data.moon}
          globalTime={globalTime}
        />
      ))}

      <OrthoCameraRig globalTime={globalTime} planetsData={planetsData} />

      <EffectComposer multisampling={4} enableNormalPass={false}>
        <ChromaticAberration
          offset={new THREE.Vector2(0.002, 0.002)}
          blendFunction={BlendFunction.NORMAL}
        />
        <Bloom luminanceThreshold={0.5} mipmapBlur intensity={4.5} levels={9} />
        <Vignette eskil={false} offset={0.3} darkness={1.3} />
        <Noise opacity={0.03} blendFunction={BlendFunction.SCREEN} />
      </EffectComposer>
    </>
  );
}

// --- Main Render ---

export default function Home() {
  const { isPlaying, toggleSound } = useSpaceSound();

  return (
    <main className="w-screen h-screen bg-[#000000] relative overflow-hidden font-sans tracking-wide text-white selection:bg-white selection:text-black">
      <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none mix-blend-difference border-b border-white/5">
        <div className="flex items-center gap-6">
          <h1 className="text-xs font-bold tracking-[0.4em] uppercase pointer-events-auto cursor-pointer">
            AXYNC<span className="font-light text-white/40">PROTOCOL</span>
          </h1>
          <div className="hidden md:flex gap-2">
            <span className="block w-1 h-3 bg-white/30"></span>
            <span className="block w-1 h-3 bg-white/60"></span>
            <span className="block w-1 h-3 bg-white"></span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Audio Engine UI Indicator */}
          <button
            onClick={toggleSound}
            className="pointer-events-auto flex items-center gap-2 group"
          >
            <div className="flex gap-0.5 items-end h-3">
              <span
                className={`w-[2px] bg-white transition-all duration-300 ${isPlaying ? "h-full animate-pulse" : "h-[2px]"}`}
              ></span>
              <span
                className={`w-[2px] bg-white transition-all duration-300 delay-75 ${isPlaying ? "h-2/3 animate-pulse" : "h-[2px]"}`}
              ></span>
              <span
                className={`w-[2px] bg-white transition-all duration-300 delay-150 ${isPlaying ? "h-full animate-pulse" : "h-[2px]"}`}
              ></span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-white/40 group-hover:text-white transition-colors">
              {isPlaying ? "AUDIO_ON" : "AUDIO_OFF"}
            </span>
          </button>

          <button className="pointer-events-auto px-6 py-2 border border-white/20 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-sm">
            LAUNCH APP
          </button>
        </div>
      </header>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white"></div>
        <div className="absolute top-0 left-[90%] w-[1px] h-full bg-white"></div>
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-white"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          dpr={[1, 1.5]}
          // Ultra-telephoto macro depth structure
          camera={{ fov: 16, position: [0, 2, 80], near: 0.1, far: 5000 }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.1,
            antialias: false,
            powerPreference: "high-performance",
            logarithmicDepthBuffer: true,
          }}
        >
          <color attach="background" args={["#000000"]} />
          {/* Depth extended astronomically */}
          <fog attach="fog" args={["#000000", 150, 3000]} />

          <ScrollControls pages={6} damping={0.12} distance={1.2}>
            <InteractiveSystem />

            <Scroll html style={{ width: "100%", height: "100%" }}>
              <div className="h-screen flex flex-col justify-center items-start px-[10%] pointer-events-none">
                <div className="border-l border-white/20 pl-8 overflow-hidden">
                  <p className="text-[10px] font-mono tracking-[0.3em] text-white/50 mb-4 uppercase">
                    [ Cross-Chain Marketplace ]
                  </p>
                  <h2 className="text-white text-6xl md:text-8xl font-light mb-2 tracking-tighter leading-none">
                    TRADE ANY
                  </h2>
                  <h2 className="text-white/40 text-5xl md:text-7xl font-light mb-8 tracking-widest leading-none">
                    TOKEN
                  </h2>
                  <div className="flex items-center gap-4 border border-white/10 p-4 bg-black/20 backdrop-blur-sm w-max">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="text-[10px] font-mono tracking-widest opacity-60">
                      LIVE ON ETH & BASE
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-screen flex flex-col justify-center items-end px-[10%] pointer-events-none text-right">
                <div className="max-w-md border-r border-white/20 pr-8">
                  <h3 className="text-white/30 text-[10px] font-mono tracking-[0.3em] mb-4 uppercase">
                    [ Critical_Failure ]
                  </h3>
                  <h2 className="text-white text-4xl uppercase tracking-[0.1em] mb-4">
                    Trapped Value
                  </h2>
                  <p className="text-white/50 text-xs font-mono leading-relaxed mb-8">
                    Locked tokens traded daily through DMs. No cross-chain
                    liquidity. Bridges are slow and expensive. Someone always
                    gets scammed.
                  </p>
                  <button className="pointer-events-auto px-10 py-3 border border-white/20 text-[10px] uppercase font-mono tracking-[0.2em] hover:bg-white hover:text-black transition-all bg-black/40 backdrop-blur-md">
                    View Problem
                  </button>
                </div>
              </div>

              <div className="h-screen flex flex-col justify-center items-start px-[10%] pointer-events-none">
                <div className="max-w-md border-l border-white/20 pl-8">
                  <h3 className="text-[#ff3300] text-[10px] font-mono tracking-[0.3em] mb-4 uppercase">
                    [ Protocol_Active ]
                  </h3>
                  <h2 className="text-white text-3xl uppercase tracking-widest mb-4">
                    Zero Trust Escrow
                  </h2>
                  <p className="text-white/50 text-xs font-mono leading-relaxed mb-8">
                    List tokens or vesting positions on any chain. Buyers pay on
                    any chain. ZK sequencer settles atomically. No bridges, no
                    wrapping.
                  </p>
                  <button className="pointer-events-auto px-8 py-3 border border-white/20 text-[10px] font-mono tracking-widest hover:bg-[#ff3300] hover:border-[#ff3300] transition-colors bg-white/5 backdrop-blur-md">
                    List Tokens
                  </button>
                </div>
              </div>

              <div className="h-screen flex flex-col justify-end pb-[15%] items-center text-center pointer-events-none">
                <div className="max-w-lg border-b border-[#00eeff]/20 pb-8 px-12">
                  <h3 className="text-[#00eeff] text-[10px] font-mono tracking-[0.3em] mb-4 uppercase">
                    [ Settlement_Engine ]
                  </h3>
                  <h2 className="text-white text-3xl uppercase tracking-widest mb-4">
                    Cross-Chain Atomic
                  </h2>
                  <p className="text-white/50 text-xs font-mono leading-relaxed mb-8 mx-auto">
                    Buyers browse listings. See the discrete token, discount,
                    and vesting schedule. Deposit payment on preferred chain
                    instantaneously.
                  </p>
                  <button className="pointer-events-auto px-8 py-3 bg-[#00eeff]/10 border border-[#00eeff]/30 text-[#00eeff] text-[10px] font-mono tracking-widest hover:bg-[#00eeff] hover:text-black transition-all backdrop-blur-md">
                    Explore Market
                  </button>
                </div>
              </div>

              <div className="h-screen flex flex-col justify-center items-start px-[10%] pointer-events-none">
                <div className="max-w-md border-l border-[#e100ff]/20 pl-8">
                  <h3 className="text-[#e100ff] text-[10px] font-mono tracking-[0.3em] mb-4 uppercase">
                    [ Verification_Layer ]
                  </h3>
                  <h2 className="text-white text-3xl uppercase tracking-widest mb-4">
                    ZK-Proven Batches
                  </h2>
                  <p className="text-white/50 text-xs font-mono leading-relaxed mb-8">
                    Sequencer batches trades, generates a ZK proof, and submits
                    on-chain. Claim target tokens with a pure merkle proof.
                  </p>
                  <button className="pointer-events-auto px-8 py-3 border border-[#e100ff]/30 text-[10px] font-mono tracking-widest text-white hover:bg-[#e100ff] hover:border-[#e100ff] transition-all bg-black/60 backdrop-blur-md">
                    Read Specs
                  </button>
                </div>
              </div>

              <div className="h-screen flex flex-col justify-center items-center text-center pointer-events-none">
                <div className="border border-white/10 p-16 bg-black/40 backdrop-blur-md flex flex-col items-center">
                  <h2 className="text-white text-lg font-mono tracking-[0.5em] uppercase mb-8">
                    Cross-Chain Infrastructure
                  </h2>
                  <div className="flex gap-6 pointer-events-auto">
                    <button className="px-12 py-4 bg-white text-black text-xs font-mono font-bold tracking-[0.3em] uppercase hover:scale-95 transition-transform">
                      Launch dApp
                    </button>
                    <button className="px-12 py-4 border border-white/30 text-white text-xs font-mono tracking-[0.3em] uppercase hover:bg-white/10 transition-colors">
                      View Source
                    </button>
                  </div>
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </main>
  );
}
