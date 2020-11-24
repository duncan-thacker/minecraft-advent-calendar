import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";

function Block({
  textureLocation,
  textureLocationTop,
  textureLocationBottom,
  textureLocationFront,
  rotationSpeed,
  viewAngle,
  height = 1,
  ...props
}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = viewAngle;
    mesh.current.rotation.y = mesh.current.rotation.y += rotationSpeed;
  });

  const texture = useLoader(THREE.TextureLoader, textureLocation);
  const textureTop = useLoader(
    THREE.TextureLoader,
    textureLocationTop || textureLocation
  );
  const textureBottom = useLoader(
    THREE.TextureLoader,
    textureLocationBottom || textureLocation
  );
  const textureFront = useLoader(
    THREE.TextureLoader,
    textureLocationFront || textureLocation
  );

  return (
    <mesh {...props} ref={mesh} scale={[1, height, 1]}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attachArray="material" map={texture} />
      <meshStandardMaterial attachArray="material" map={texture} />
      <meshStandardMaterial attachArray="material" map={textureTop} />
      <meshStandardMaterial attachArray="material" map={textureBottom} />
      <meshStandardMaterial attachArray="material" map={textureFront} />
      <meshStandardMaterial attachArray="material" map={texture} />
    </mesh>
  );
}

function Dolly({ fov }) {
  useFrame((state) => {
    state.camera.fov = fov;
    state.camera.position.z = 50;
    state.camera.updateProjectionMatrix();
  });
  return null;
}

export default function MinecraftBlock({ ambientLight, style, fov, ...props }) {
  return (
    <Canvas style={style}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={ambientLight} />
        <Block position={[0, 0, 0]} {...props} />
      </Suspense>
      <Dolly fov={fov} />
    </Canvas>
  );
}
