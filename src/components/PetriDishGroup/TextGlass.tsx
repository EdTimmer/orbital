import { useEffect, useMemo, useState, useRef } from 'react';
import * as THREE from 'three';
import { useLoader, extend, ReactThreeFiber, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import uraniumFragmentShader from '../../assets/shaders/uranium/fragment.glsl?raw'
import uraniumVertexShader from '../../assets/shaders/uranium/vertex.glsl?raw'
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

const TextUraniumMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  uraniumVertexShader,
  uraniumFragmentShader
)

// Make shader material available in JSX
extend({ UraniumTextMaterial: TextUraniumMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      uraniumTextMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof TextUraniumMaterial>;
    }
  }
}

interface Props {
  position: [number, number, number];
  rotation: THREE.Euler;
  text: string;
  size: number;
  depth: number;
  color: string;
}

const TextGlass = ({ position, rotation, text, size, depth, color }: Props) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  const [font, setFont] = useState<Font | null>(null);

  // Load the single environment map image
  const texture = useLoader(THREE.TextureLoader, './images/crystal3.jpg');
  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.magFilter = THREE.LinearFilter;

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

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
        bevelThickness: 0.05,
        bevelSize: 0.3,
        bevelOffset: 0.0,
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
    <mesh ref={meshRef} geometry={textGeometry} rotation={rotation} position={position}>
      <meshStandardMaterial metalness={1.0} roughness={0.0} color={color} />
    </mesh>
  );
};

export default TextGlass;
