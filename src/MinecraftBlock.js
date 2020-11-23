import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

function Block({ textureLocation, ...props }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = 0.6;
    mesh.current.rotation.y = mesh.current.rotation.y += 0.01;
  });

  const texture = useLoader(TextureLoader, textureLocation);

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

export default function MinecraftBlock({ textureLocation }) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Block position={[0, 0, 0]} textureLocation={textureLocation} />
      </Suspense>
    </Canvas>
  );
}
