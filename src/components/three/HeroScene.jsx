// src/components/three/HeroScene.jsx
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Ring, Torus, Stars } from "@react-three/drei";
import * as THREE from "three";

const Planet = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1.8, 64, 64]} />
        <MeshDistortMaterial
          color="#0f4c75"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          emissive="#1a237e"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const AtmosphereGlow = () => (
  <Float speed={1.5} floatIntensity={0.3}>
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2.1, 32, 32]} />
      <meshBasicMaterial
        color="#38bdf8"
        transparent
        opacity={0.05}
        side={THREE.BackSide}
      />
    </mesh>
  </Float>
);

const OrbitRing = ({ radius, color, speed, tilt }) => {
  const ringRef = useRef();
  useFrame(() => {
    ringRef.current.rotation.z += speed;
  });
  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
};

const FloatingCube = ({ position, color, speed }) => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed * 0.7;
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
        wireframe
      />
    </mesh>
  );
};

const GlowingSphere = ({ position, color, size }) => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.2;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Astronaut = () => {
  const groupRef = useRef();
  useFrame((state) => {
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 0.5, 8, 16]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} emissive="#38bdf8" emissiveIntensity={0.05} />
      </mesh>
      {/* Helmet */}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} transparent opacity={0.9} emissive="#38bdf8" emissiveIntensity={0.1} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 0.52, 0.2]}>
        <sphereGeometry args={[0.22, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#38bdf8" transparent opacity={0.4} metalness={1} roughness={0} emissive="#38bdf8" emissiveIntensity={0.5} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-0.38, 0.1, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.1, 0.35, 4, 8]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Right arm */}
      <mesh position={[0.38, 0.1, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.1, 0.35, 4, 8]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Backpack */}
      <mesh position={[0, 0.1, -0.28]}>
        <boxGeometry args={[0.4, 0.5, 0.15]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5] } intensity={1} color="#38bdf8" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#22d3ee" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Planet />
      <AtmosphereGlow />

      <OrbitRing radius={3} color="#38bdf8" speed={0.005} tilt={Math.PI * 0.15} />
      <OrbitRing radius={3.8} color="#8b5cf6" speed={-0.003} tilt={Math.PI * 0.3} />
      <OrbitRing radius={4.5} color="#22d3ee" speed={0.002} tilt={Math.PI * 0.1} />

      <Astronaut />

      <FloatingCube position={[-3, 1, -1]} color="#38bdf8" speed={0.01} />
      <FloatingCube position={[3.5, -1, -2]} color="#8b5cf6" speed={0.015} />
      <FloatingCube position={[-2.5, -2, 1]} color="#22d3ee" speed={0.008} />

      <GlowingSphere position={[3, 2, -1]} color="#38bdf8" size={0.15} />
      <GlowingSphere position={[-3.5, -1, 0]} color="#8b5cf6" size={0.12} />
      <GlowingSphere position={[2, -2.5, 1]} color="#ec4899" size={0.1} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const HeroScene = () => (
  <div className="w-full h-full canvas-wrapper">
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene;
