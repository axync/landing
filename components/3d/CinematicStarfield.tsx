import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export function CinematicStarfield() {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const count = 1500;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    const cWhite = new THREE.Color("#ffffff");
    const cSilver = new THREE.Color("#aaaaaa");

    for (let i = 0; i < count; i++) {
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
