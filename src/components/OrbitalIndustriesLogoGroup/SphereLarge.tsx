interface Props {
  position: [number, number, number];
  size: number;
  color: string;
}

const SphereLarge = ({ position, size, color }: Props) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhysicalMaterial
        // clearcoat={1}  // Shiny surface effect
        transmission={1}  // Fully transparent
        opacity={1}  // Fully opaque but will be transparent due to transmission
        transparent={true}  // Enable transparency
        roughness={0}  // Smooth like glass
        // reflectivity={0.5}  // Adjust reflection intensity
        metalness={0}  // Glass is non-metallic
        ior={1.45}  // Typical for glass (Index of Refraction)
        thickness={0.00001}  // Controls the refraction and look of thickness
        attenuationColor="#ffffff"  // The color of the glass when light passes through
        attenuationDistance={2.5}  // Distance at which the glass becomes less transparent
        envMapIntensity={0}  // Control the strength of the reflections
        color={color}
        // envMap={envMap}
      />
      {/* <pointLight
        position={[0, 0, 0]}  // Inside the sphere
        intensity={10}
        distance={5}
        decay={2}
        color="#ffcc99"  // Warm light color to simulate a lamp
      /> */}
      {/* <Environment preset='sunset' /> */}
      {/* <Environment map={texture} /> */}
    </mesh>
  );
};

export default SphereLarge;