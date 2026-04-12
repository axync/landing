import React, { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getPlanetPos } from "../../utils/math";
import { atmoVertexShader, atmoFragmentShader } from "./shaders/atmosphere";

export function ObsidianPlanet({
  radius,
  speed,
  size,
  atmosphereColor,
  offset = 0,
  hasMoon = false,
  globalTime,
  sharedGeometries,
}: {
  radius: number;
  speed: number;
  size: number;
  atmosphereColor: string;
  offset?: number;
  hasMoon?: boolean;
  globalTime: React.MutableRefObject<number>;
  sharedGeometries: {
    planet: THREE.SphereGeometry;
    atmo: THREE.SphereGeometry;
    moon: THREE.SphereGeometry;
  };
}) {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const moonRef = useRef<THREE.Mesh>(null);

  const targetScaleRef = useRef(1.0);
  const currentScaleRef = useRef(1.0);

  const targetRotationSpeedRef = useRef(0.0005);
  const currentRotationSpeedRef = useRef(0.0005);

  const [hovered, setHovered] = useState(false);

  const atmoMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const targetOpacityRef = useRef(6.0);
  const currentOpacityRef = useRef(6.0);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    targetScaleRef.current = hovered ? 1.05 : 1.0;
    targetRotationSpeedRef.current = hovered ? 0.008 : 0.0005;
    targetOpacityRef.current = hovered ? 12.0 : 6.0;
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
      planetRef.current.scale.setScalar(currentScaleRef.current * size);
    }

    currentOpacityRef.current = THREE.MathUtils.lerp(
      currentOpacityRef.current,
      targetOpacityRef.current,
      1 - Math.exp(-1.5 * safeDelta),
    );

    if (atmoMaterialRef.current) {
      atmoMaterialRef.current.uniforms.opacity.value =
        currentOpacityRef.current;
    }

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
        geometry={sharedGeometries.planet}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
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

        <mesh scale={1.015} geometry={sharedGeometries.atmo}>
          <shaderMaterial
            ref={atmoMaterialRef}
            vertexShader={atmoVertexShader}
            fragmentShader={atmoFragmentShader}
            uniforms={{
              color: { value: neonColor },
              opacity: { value: 6.0 },
            }}
            transparent
            depthWrite={false}
            depthTest={true}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
      </mesh>

      {hasMoon ? (
        <mesh
          ref={moonRef}
          castShadow
          receiveShadow
          geometry={sharedGeometries.moon}
          scale={size * 0.18}
        >
          <meshStandardMaterial color="#050505" roughness={0.7} metalness={0.5} />
        </mesh>
      ) : null}
    </group>
  );
}
