import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useMobile } from "../../hooks/useMobile";
import { getPlanetPos } from "../../utils/math";

export function OrthoCameraRig({
  globalTime,
  planetsData,
}: {
  globalTime: React.MutableRefObject<number>;
  planetsData: any;
}) {
  const scroll = useScroll();
  const { camera, size } = useThree();
  const currentOffset = useRef(0);

  const currentLookAt = useMemo(() => new THREE.Vector3(), []);
  const targetPos = useMemo(() => new THREE.Vector3(), []);
  const lookAtTarget = useMemo(() => new THREE.Vector3(), []);

  const isMobile = useMobile();

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.1);
    const time = globalTime.current;
    const o = scroll.offset;

    let targetOffset = 0;
    if (isMobile) {
      targetOffset = 0;
    } else if (o < 0.1) {
      targetOffset = 0;
    } else if (o < 0.3) {
      targetOffset = size.width * 0.35;
    } else if (o < 0.5) {
      targetOffset = size.width * -0.35;
    } else if (o < 0.7) {
      targetOffset = size.width * 0.35;
    } else if (o < 0.9) {
      targetOffset = size.width * -0.35;
    } else {
      targetOffset = 0;
    }

    currentOffset.current = THREE.MathUtils.lerp(
      currentOffset.current,
      targetOffset,
      safeDelta * 2.5,
    );

    if (camera.type === "PerspectiveCamera") {
      const pc = camera as THREE.PerspectiveCamera;
      pc.setViewOffset(
        size.width,
        size.height,
        currentOffset.current,
        0,
        size.width,
        size.height,
      );
    }

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
      targetPos.set(0, 10, 180 - progress * 80);
      lookAtTarget.set(0, 0, 0);
    } else if (o < 0.33) {
      const progress = (o - 0.16) / 0.17;
      const angle = progress * Math.PI * 0.5;
      targetPos.set(Math.sin(angle) * 100, 22 + progress * 5, Math.cos(angle) * 100);
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
      const endPos = new THREE.Vector3(0, 110, 190);
      targetPos.lerpVectors(startPos, endPos, progress);
      lookAtTarget.lerpVectors(p3, new THREE.Vector3(0, 0, 0), progress);
    }

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
