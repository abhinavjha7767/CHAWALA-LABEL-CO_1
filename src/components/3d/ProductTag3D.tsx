import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface ProductTagProps {
  type: 'tag' | 'label' | 'sticker';
  color?: string;
}

function Tag({ color = '#c41e3a' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const tagShape = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 1.5;
    const height = 2.2;
    const radius = 0.2;
    const holeRadius = 0.15;
    
    shape.moveTo(-width/2 + radius, -height/2);
    shape.lineTo(width/2 - radius, -height/2);
    shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    shape.lineTo(width/2, height/2 - radius);
    shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    shape.lineTo(-width/2 + radius, height/2);
    shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    shape.lineTo(-width/2, -height/2 + radius);
    shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);
    
    const holePath = new THREE.Path();
    holePath.absarc(0, height/2 - 0.35, holeRadius, 0, Math.PI * 2, false);
    shape.holes.push(holePath);
    
    return shape;
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow>
        <extrudeGeometry args={[tagShape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 3 }]} />
        <meshStandardMaterial color={color} metalness={0.1} roughness={0.3} />
      </mesh>
    </Float>
  );
}

function Label({ color = '#8b1538' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  const labelShape = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 2.5;
    const height = 1.2;
    const cutDepth = 0.4;
    
    shape.moveTo(0, 0);
    shape.lineTo(width, 0);
    shape.lineTo(width - cutDepth, height / 2);
    shape.lineTo(width, height);
    shape.lineTo(0, height);
    shape.lineTo(0, 0);
    
    return shape;
  }, []);

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[-1.25, -0.6, 0]} castShadow>
        <extrudeGeometry args={[labelShape, { depth: 0.06, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 }]} />
        <meshStandardMaterial color={color} metalness={0.05} roughness={0.4} />
      </mesh>
    </Float>
  );
}

function Sticker({ color = '#f97316' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh ref={meshRef} castShadow>
        <cylinderGeometry args={[1, 1, 0.08, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.2}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function ProductScene({ type, color }: ProductTagProps) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-3, 3, 3]} intensity={0.4} color="#ff6b35" />
      
      {type === 'tag' && <Tag color={color} />}
      {type === 'label' && <Label color={color} />}
      {type === 'sticker' && <Sticker color={color} />}
      
      <Environment preset="studio" />
    </>
  );
}

export default function ProductTag3D({ type, color }: ProductTagProps) {
  return (
    <div className="w-full h-64">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ProductScene type={type} color={color} />
        </Canvas>
      </Suspense>
    </div>
  );
}
