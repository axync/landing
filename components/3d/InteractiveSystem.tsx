import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

import { useMobile } from "../../hooks/useMobile";
import { CinematicStarfield } from "./CinematicStarfield";
import { DynamicSun } from "./DynamicSun";
import { ObsidianPlanet } from "./ObsidianPlanet";
import { DataRing } from "./DataRing";
import { CursorTrail } from "./CursorTrail";
import { OrthoCameraRig } from "./OrthoCameraRig";

export function InteractiveSystem() {
  const isMobile = useMobile();
  const globalTime = useRef(0);

  const sharedGeometries = useMemo(() => {
    const planetRes = isMobile ? 48 : 128;
    const atmoRes = isMobile ? 32 : 64;
    return {
      planet: new THREE.SphereGeometry(1, planetRes, planetRes),
      atmo: new THREE.SphereGeometry(1, atmoRes, atmoRes),
      moon: new THREE.SphereGeometry(1, 32, 32),
    };
  }, [isMobile]);

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
      },
      {
        r: 55.0,
        s: 0.04,
        size: 1.4,
        a: "#e100ff",
        o: Math.PI * 1.5,
        moon: true,
      },
    ],
    [],
  );

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    globalTime.current += safeDelta * 0.1;
  });

  return (
    <>
      <CinematicStarfield />
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
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />

      <CursorTrail />
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
          sharedGeometries={sharedGeometries}
        />
      ))}

      <OrthoCameraRig globalTime={globalTime} planetsData={planetsData} />

      <EffectComposer multisampling={isMobile ? 0 : 2} enableNormalPass={false}>
        {!isMobile ? (
          <ChromaticAberration
            offset={new THREE.Vector2(0.002, 0.002)}
            blendFunction={BlendFunction.NORMAL}
          />
        ) : (
          <></>
        )}
        <Bloom
          luminanceThreshold={0.5}
          mipmapBlur
          intensity={isMobile ? 2.5 : 4.5}
          levels={isMobile ? 6 : 9}
        />
        <Vignette eskil={false} offset={0.3} darkness={1.3} />
        {!isMobile ? (
          <Noise opacity={0.01} blendFunction={BlendFunction.SCREEN} />
        ) : (
          <></>
        )}
      </EffectComposer>
    </>
  );
}
