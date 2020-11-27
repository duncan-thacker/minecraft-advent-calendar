import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { PlainAnimator } from "three-plain-animator/lib/plain-animator";
import * as THREE from "three";

const BOX_GEOMETRY = [2, 2, 2];
const LIGHT_POSITION = [10, 10, 10];
const ORIGIN = [0, 0, 0];

function Block({
  textureLocation,
  textureLocationTop,
  textureLocationBottom,
  textureLocationFront,
  textureLocationLeft,
  isAnimated,
  rotationSpeed,
  viewAngle,
  height = 1,
  ...props
}) {
  const mesh = useRef();

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
  const textureLeft = useLoader(
    THREE.TextureLoader,
    textureLocationLeft || textureLocation
  );

  const animateFrame = useMemo(() => {
    if (isAnimated && texture) {
      const animator = new PlainAnimator(texture, 1, 4, 4, 0.5);
      return () => animator.animate();
    }
    return () => false;
  }, [isAnimated, texture]);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = viewAngle;
    mesh.current.rotation.y = mesh.current.rotation.y += rotationSpeed;
    animateFrame();
  });

  const scale = useMemo(() => [1, height, 1], [height]);

  return (
    <mesh {...props} ref={mesh} scale={scale}>
      <boxBufferGeometry args={BOX_GEOMETRY} />
      <meshStandardMaterial attachArray="material" map={texture} />
      <meshStandardMaterial attachArray="material" map={textureLeft} />
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
        <pointLight position={LIGHT_POSITION} intensity={ambientLight} />
        <Block position={ORIGIN} {...props} />
      </Suspense>
      <Dolly fov={fov} />
    </Canvas>
  );
}
