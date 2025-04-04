import { useMemo, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  position: [number, number, number];
  rotation: THREE.Euler;
  size: number;
  scale: [number, number, number];
}

const OilSlick = ({ position, rotation, size, scale }: Props) => {
  const shapeOneRef = useRef<THREE.Mesh>(null); 

  const texture = useLoader(THREE.TextureLoader, '/images/oil-blue3.jpg');

  const envMap = useMemo(() => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
  }, [texture]);

  return (
    <mesh ref={shapeOneRef} position={position} rotation={rotation} scale={scale}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial envMap={envMap} metalness={1.0} roughness={0.0} opacity={0.5} envMapIntensity={0.2} side={THREE.DoubleSide}/>
    </mesh>
  );
};

export default OilSlick;