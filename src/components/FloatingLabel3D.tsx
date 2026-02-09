import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

interface LabelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  scale?: number;
  floatIntensity?: number;
  speed?: number;
}

function Label({
  position,
  rotation = [0, 0, 0],
  color,
  scale = 1,
  floatIntensity = 1,
  speed = 1,
}: LabelProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.15;
      meshRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * 0.3 * speed) * 0.08;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.4}
      floatIntensity={floatIntensity}
      floatingRange={[-0.15, 0.15]}
    >
      <group position={position} rotation={rotation} scale={scale}>
        <mesh ref={meshRef}>
          <RoundedBox args={[2, 0.9, 0.06]} radius={0.08} smoothness={4}>
            <meshStandardMaterial
              color={color}
              metalness={0.15}
              roughness={0.35}
            />
          </RoundedBox>
          {/* Hole for string */}
          <mesh position={[-0.75, 0.3, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
            <meshStandardMaterial color="#1a1a2e" />
          </mesh>
        </mesh>
        {/* String */}
        <mesh position={[-0.75, 0.6, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
      </group>
    </Float>
  );
}

function WovenLabel({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
      meshRef.current.rotation.y =
        Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.9}>
      <group position={position} scale={scale}>
        <mesh ref={meshRef}>
          {/* Woven label rectangle */}
          <RoundedBox args={[1.8, 2.4, 0.03]} radius={0.03} smoothness={4}>
            <meshStandardMaterial
              color="#f8f5f0"
              metalness={0.05}
              roughness={0.85}
            />
          </RoundedBox>
          {/* Fold at top */}
          <mesh position={[0, 1.05, 0.015]} rotation={[0.35, 0, 0]}>
            <RoundedBox args={[1.8, 0.4, 0.03]} radius={0.02} smoothness={4}>
              <meshStandardMaterial
                color="#ebe8e0"
                metalness={0.05}
                roughness={0.85}
              />
            </RoundedBox>
          </mesh>
          {/* Decorative lines */}
          <mesh position={[0, 0.3, 0.02]}>
            <boxGeometry args={[1.2, 0.08, 0.01]} />
            <meshStandardMaterial color="#1a1a2e" />
          </mesh>
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.8, 0.05, 0.01]} />
            <meshStandardMaterial color="#14b8a6" />
          </mesh>
        </mesh>
      </group>
    </Float>
  );
}

function StickerLabel({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
      <group position={position} scale={scale}>
        <mesh ref={meshRef} rotation={[0.2, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.04, 32]} />
          <meshStandardMaterial
            color="#14b8a6"
            metalness={0.4}
            roughness={0.15}
          />
        </mesh>
        {/* Inner circle */}
        <mesh position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.3, 0.5, 32]} />
          <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
}

function HangTag({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
      meshRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={1}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Main tag */}
        <mesh>
          <RoundedBox args={[1.2, 1.8, 0.04]} radius={0.1} smoothness={4}>
            <meshStandardMaterial
              color="#c9a679"
              metalness={0.1}
              roughness={0.7}
            />
          </RoundedBox>
        </mesh>
        {/* Hole */}
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
          <meshStandardMaterial color="#1a1a2e" />
        </mesh>
        {/* String */}
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.8, 8]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
      <directionalLight position={[-5, 3, 3]} intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#14b8a6" />

      {/* Main labels - right side */}
      <Label
        position={[2.8, 0.8, 0.3]}
        color="#f5e6d3"
        scale={0.85}
        floatIntensity={1.3}
        speed={1.1}
      />
      <Label
        position={[3.2, -0.6, -0.3]}
        color="#d4e4ed"
        scale={0.65}
        speed={0.9}
      />
      <WovenLabel position={[2.2, 0, 0.6]} scale={0.75} />
      <StickerLabel position={[3.6, 0.3, 0.4]} scale={0.9} />
      <HangTag position={[1.8, -0.8, 0.2]} scale={0.6} />

      {/* Background labels - subtle */}
      <Label
        position={[-2.5, 1.2, -1.2]}
        color="#e8d5c4"
        scale={0.45}
        floatIntensity={0.6}
        speed={0.7}
      />
      <Label
        position={[-2.2, -0.8, -0.8]}
        color="#c4d4e8"
        scale={0.35}
        speed={1.3}
      />
      <HangTag position={[-2.8, 0.2, -0.5]} scale={0.4} />

      <Environment preset="city" />
    </>
  );
}

export default function FloatingLabel3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
