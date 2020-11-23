import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

function Block({
  textureLocation,
  textureLocationTop,
  textureLocationBottom,
  rotationSpeed,
  viewAngle,
  scale,
  ...props
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = viewAngle;
    mesh.current.rotation.y = mesh.current.rotation.y += rotationSpeed;
  });

  const texture = useLoader(TextureLoader, textureLocation);
  const textureTop = useLoader(
    TextureLoader,
    textureLocationTop || textureLocation
  );
  const textureBottom = useLoader(
    TextureLoader,
    textureLocationBottom || textureLocation
  );

  return (
    <mesh {...props} ref={mesh} scale={[scale, scale, scale]}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attachArray="material" map={texture} />
      <meshStandardMaterial attachArray="material" map={texture} />
      <meshStandardMaterial attachArray="material" map={textureTop} />
      <meshStandardMaterial attachArray="material" map={textureBottom} />
      <meshStandardMaterial attachArray="material" map={texture} />
      <meshStandardMaterial attachArray="material" map={texture} />
    </mesh>
  );
}

export default function MinecraftBlock({ ambientLight, ...props }) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={ambientLight} />
        <Block position={[0, 0, 0]} {...props} />
      </Suspense>
    </Canvas>
  );
}
