import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface TagProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color: string;
  delay?: number;
}

function ClothingTag({ position, rotation = [0, 0, 0], scale = 1, color, delay = 0 }: TagProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.05;
    }
  });

  const tagShape = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 1.2;
    const height = 2;
    const radius = 0.15;
    const holeRadius = 0.12;
    
    // Rounded rectangle
    shape.moveTo(-width/2 + radius, -height/2);
    shape.lineTo(width/2 - radius, -height/2);
    shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    shape.lineTo(width/2, height/2 - radius);
    shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    shape.lineTo(-width/2 + radius, height/2);
    shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    shape.lineTo(-width/2, -height/2 + radius);
    shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);
    
    // Hole for string
    const holePath = new THREE.Path();
    holePath.absarc(0, height/2 - 0.25, holeRadius, 0, Math.PI * 2, false);
    shape.holes.push(holePath);
    
    return shape;
  }, []);

  const extrudeSettings = {
    steps: 1,
    depth: 0.08,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 3,
  };

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
        castShadow
      >
        <extrudeGeometry args={[tagShape, extrudeSettings]} />
        <meshStandardMaterial
          color={color}
          metalness={0.1}
          roughness={0.3}
          envMapIntensity={0.8}
        />
      </mesh>
    </Float>
  );
}

function Label({ position, rotation = [0, 0, 0], scale = 1, color, delay = 0 }: TagProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.08;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + delay) * 0.1;
    }
  });

  // Flag/label shape
  const labelShape = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 2;
    const height = 1;
    const cutDepth = 0.3;
    
    shape.moveTo(0, 0);
    shape.lineTo(width, 0);
    shape.lineTo(width - cutDepth, height / 2);
    shape.lineTo(width, height);
    shape.lineTo(0, height);
    shape.lineTo(0, 0);
    
    return shape;
  }, []);

  const extrudeSettings = {
    steps: 1,
    depth: 0.05,
    bevelEnabled: true,
    bevelThickness: 0.01,
    bevelSize: 0.01,
    bevelSegments: 2,
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
        castShadow
      >
        <extrudeGeometry args={[labelShape, extrudeSettings]} />
        <meshStandardMaterial
          color={color}
          metalness={0.05}
          roughness={0.4}
          envMapIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Sticker({ position, scale = 1, color, delay = 0 }: Omit<TagProps, 'rotation'>) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.1}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color={color}
          transmissionSampler
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ff6b35" />
      <pointLight position={[5, -5, 5]} intensity={0.3} color="#c41e3a" />
      
      {/* Main Tags - Red tones */}
      <ClothingTag position={[-2.5, 0.5, 0]} scale={0.8} color="#c41e3a" delay={0} />
      <ClothingTag position={[2.8, -0.3, -1]} rotation={[0.2, 0.5, 0.1]} scale={0.6} color="#ff6b35" delay={1.5} />
      
      {/* Labels - Deep red and orange */}
      <Label position={[-1, -1, 0.5]} rotation={[0.1, -0.2, 0.05]} scale={0.7} color="#8b1538" delay={0.8} />
      <Label position={[1.5, 1.2, -0.5]} rotation={[-0.1, 0.3, -0.1]} scale={0.5} color="#f97316" delay={2} />
      
      {/* Stickers - Orange tones */}
      <Sticker position={[0, -0.5, 1]} scale={0.6} color="#dc2626" delay={0.5} />
      <Sticker position={[-2, 1.5, -0.5]} scale={0.4} color="#ea580c" delay={1.2} />
      
      <Environment preset="city" />
    </>
  );
}

export default function FloatingLabels3D() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
