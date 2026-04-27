//Ejemplo de un cubo en RA
import { Canvas } from "@react-three/fiber";
import XrCube from './XrCube';
import XrOctahedron from './XrOctahedron';
import { ARButton, XR } from "@react-three/xr";


function EjAR() {


    return (
        <>
            <ARButton />
            <Canvas
                style={{ height: '75vh' }} >
                <XR>
                    <XrOctahedron />

                </XR>
            </Canvas>
        </>
    )

}

export default EjAR;