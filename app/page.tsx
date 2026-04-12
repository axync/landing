"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import * as THREE from "three";

import { MobileProvider, useMobile } from "../hooks/useMobile";
import { InteractiveSystem } from "../components/3d/InteractiveSystem";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import { MainScrollOverlay } from "../components/ui/MainScrollOverlay";

function MainApp() {
  const isMobile = useMobile();

  return (
    <main className="w-screen h-screen bg-[#000000] relative overflow-hidden font-sans tracking-wide text-white selection:bg-white selection:text-black">
      <Header />
      <Footer />

      <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-white/20 z-40 pointer-events-none opacity-50"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/20 z-40 pointer-events-none opacity-50"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-white/20 z-40 pointer-events-none opacity-50"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-white/20 z-40 pointer-events-none opacity-50"></div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white"></div>
        <div className="absolute top-0 left-[90%] w-[1px] h-full bg-white"></div>
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-white"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          dpr={isMobile ? 1 : [1, 1.5]}
          camera={{
            fov: isMobile ? 22 : 16,
            position: [0, 2, 80],
            near: 0.1,
            far: 5000,
          }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.1,
            antialias: false,
            powerPreference: "high-performance",
            logarithmicDepthBuffer: true,
            precision: "mediump",
          }}
        >
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#000000", 150, 3000]} />

          <ScrollControls pages={6} damping={0.12} distance={1.2}>
            <InteractiveSystem />
            <Scroll html style={{ width: "100%", height: "100%" }}>
              <MainScrollOverlay />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <MobileProvider>
      <MainApp />
    </MobileProvider>
  );
}
