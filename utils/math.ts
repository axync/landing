import * as THREE from "three";

export const getPlanetPos = (
  radius: number,
  speed: number,
  time: number,
  offset: number,
) => {
  const t = time * speed + offset;
  return new THREE.Vector3(Math.cos(t) * radius, 0, Math.sin(t) * radius);
};
