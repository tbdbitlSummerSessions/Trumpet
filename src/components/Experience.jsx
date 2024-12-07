import { OrbitControls } from "@react-three/drei"
import FBXModel from './FBXModel'

/* eslint-disable react/no-unknown-property */
const Experience = () => {
    return (
        <>
            <OrbitControls/>
            <ambientLight/>
            <directionalLight
                position={[-5, 10, 5]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            >
                <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]}/>
            </directionalLight>    
            <group position={[0,  -1, 0]}>
                <FBXModel url='Models/Hip Hop Dancing.fbx'/>
            </group>
            <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, -1, 0]}
                receiveShadow
            >
                <planeGeometry args={[1000, 1000]}/>
                <meshStandardMaterial color="#f0f0f0" />
            </mesh>
        </>
    )
}

export default Experience