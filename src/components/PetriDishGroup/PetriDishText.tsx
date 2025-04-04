import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

interface Props {
  position: [number, number, number];
  rotation: THREE.Euler;
  text: string;
  size: number;
  depth: number;
}

const PetriDishText
 = ({ position, rotation, text, size, depth}: Props) => {
  const [font, setFont] = useState<Font | null>(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/mediator_narrow_web_extra_bold_regular.typeface.json', (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

    // Use `useMemo` to memoize the geometry creation and avoid recreation on every render
    const textGeometry = useMemo(() => {
      if (!font) return null;
  
      const textOptions = {
        font,
        size,
        depth,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      };
  
      const geometry = new TextGeometry(text, textOptions);
    
      // Compute the bounding box of the text and center it
      geometry.computeBoundingBox();
      geometry.center();  // This will center the text at the origin (0, 0, 0)

      return geometry;
    }, [font]);
  
    if (!font || !textGeometry) return null;

  return (
    <mesh geometry={textGeometry} rotation={rotation} position={position}>
      <meshPhysicalMaterial
        clearcoat={1}  // Shiny surface effect
        transmission={1}  // Fully transparent
        opacity={0.1}  // Fully opaque but will be transparent due to transmission
        // transparent={true}  // Enable transparency
        roughness={1.0}  // Smooth like glass
        reflectivity={0.1}  // Adjust reflection intensity
        metalness={0}  // Glass is non-metallic
        ior={1.45}  // 1.45 is typical for glass (Index of Refraction)
        thickness={0.1}  // Controls the refraction and look of thickness
        // attenuationColor="#ffffff"  // The color of the glass when light passes through
        attenuationDistance={0.5}  // Distance at which the glass becomes less transparent
        envMapIntensity={0.5}  // Control the strength of the reflections
        // color="#999999"  // Use a slightly grey color instead of pure white
        // color='black'
        color='#ffa1ef'// '#b9f9f4' // '#FFC300' '#b9f9db'
      />
    </mesh>
  );
};

export default PetriDishText;
