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
  color: string;
}

const ShelfText
 = ({ position, rotation, text, size, depth, color }: Props) => {
  const [font, setFont] = useState<Font | null>(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/comfortaa/comfortaa_bold.json', (loadedFont) => {
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
        color={color}
        clearcoat={1}  // Shiny surface effect
        transmission={1}  // Fully transparent
        opacity={0.5}  // Fully opaque but will be transparent due to transmission
        // transparent={true}  // Enable transparency
        roughness={0}  // Smooth like glass
        reflectivity={0.5}  // Adjust reflection intensity
        metalness={0}  // Glass is non-metallic
        ior={1.45}  // 1.45 is typical for glass (Index of Refraction)
        thickness={0.1}  // Controls the refraction and look of thickness
        // attenuationColor="#ffffff"  // The color of the glass when light passes through
        attenuationDistance={0.5}  // Distance at which the glass becomes less transparent
        envMapIntensity={1.0}  // Control the strength of the reflections
      />
    </mesh>
  );
};

export default ShelfText;
