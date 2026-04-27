import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from '../../Model/Model.jsx'

function EjARHectorF() {
    return (
        <Canvas
            style={{ height: '100vh' }}           
            camera={{ position: [0, 0, 5], fov: 2 }} 
        >
            <ambientLight intensity={1} />        
            <directionalLight position={[5, 5, 5]} intensity={1} /> 
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls />                   
        </Canvas>
    )
}

export default EjARHectorF;