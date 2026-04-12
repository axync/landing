import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMobile } from "../../hooks/useMobile";
import { basicVertexShader } from "./shaders/shared";
import { sunFragmentShader } from "./shaders/sun";

export function DynamicSun({
  globalTime,
}: {
  globalTime: React.MutableRefObject<number>;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const isMobile = useMobile();

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = globalTime.current;
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry
          args={[3.0, isMobile ? 64 : 128, isMobile ? 64 : 128]}
        />
        <shaderMaterial
          ref={materialRef}
          vertexShader={basicVertexShader}
          fragmentShader={sunFragmentShader}
          uniforms={{ uTime: { value: 0 } }}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
