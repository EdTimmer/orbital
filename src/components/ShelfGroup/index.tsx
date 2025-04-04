import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import ShelfContainer from './ShelfContainer';
import SphereAnimated from './SphereAnimated';
import GreenGlassCover from './GreenGlassCover';
import ShelfText from './ShelfText';
import GreenDotGlassTwo from './GreenDotGlassTwo';
import * as THREE from 'three'

function ShelfGroup() {
  const shelfGroupRef = useRef<Group>(null);

  // Rotate the group on each frame
  useFrame(({ clock }) => {
    if (shelfGroupRef.current) {
      const time = clock.getElapsedTime();
      // shelfGroupRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      // shelfGroupRef.current.rotation.y -= 0.007; // Adjust rotation speed on Y-axis
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]} ref={shelfGroupRef}>
      <perspectiveCamera fov={20} position={[0, 0, 10]} />        
      <ShelfText text={'Orbital'} position={[-0.2, 2.5, 0]} rotation={new THREE.Euler(0, 0, 0)} size={0.9} depth={0.3} color={'#000'} />
      <GreenDotGlassTwo color={'#ffa1ef'} size={0.3} position={[-2, 2.5, 0]} /> // 
      <SphereAnimated />
      <GreenGlassCover size ={1.7} position={[0, 0, 0]} color={'#00ed8a'} /> // '#00ed8a'
      <ShelfContainer position={[0, 0, 0]} />
    </group>    
  );
}

export default ShelfGroup;
