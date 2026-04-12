import React, { useMemo } from "react";
import * as THREE from "three";

export function DataRing({ radius, opacity }: { radius: number; opacity: number }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 256; i++) {
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
