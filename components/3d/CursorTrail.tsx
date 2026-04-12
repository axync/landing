import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CursorTrail() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;

  const [positions, sizes] = useMemo(
    () => [new Float32Array(count * 3), new Float32Array(count)],
    [],
  );

  const mousePos = useRef(new THREE.Vector3());
  const trail = useRef<THREE.Vector3[]>(
    Array.from({ length: count }, () => new THREE.Vector3()),
  );

  const plane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    [],
  );

  useFrame((state) => {
    state.raycaster.ray.intersectPlane(plane, mousePos.current);

    for (let i = count - 1; i > 0; i--) {
      trail.current[i].lerp(trail.current[i - 1], 0.12);
    }
    trail.current[0].lerp(mousePos.current, 0.3);

    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      const sizeAttr = pointsRef.current.geometry.attributes.size;

      for (let i = 0; i < count; i++) {
        const p = trail.current[i];
        const ratio = 1 - i / count;

        positions[i * 3] =
          p.x + (Math.random() - 0.5) * 0.12 * (1 - ratio * 0.5);
        positions[i * 3 + 1] =
          p.y + (Math.random() - 0.5) * 0.12 * (1 - ratio * 0.5);
        positions[i * 3 + 2] = p.z;

        sizes[i] = 0.3 * ratio;
      }
      posAttr.needsUpdate = true;
      sizeAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.25}
        color="#00eeff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
}
