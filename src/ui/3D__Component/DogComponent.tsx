import {Canvas} from "@react-three/fiber";
import './DogComponent.css'
import {OrbitControls, Plane, useGLTF} from "@react-three/drei";

const Card = () => {
    const {scene} = useGLTF("./model/Dog.glb");
    return <primitive object={scene}>

    </primitive>
}


export const DogComponent = () => {

    return (
        <div className="canvas-container">
            <Canvas
                className="canvas-model-viewer"
                camera={{position: [30,50,15]}}
            >
                <ambientLight />
                <pointLight position={[0,0,0]}></pointLight>
                <directionalLight position={[5, 5, 5]} intensity={1.5}/>
                <directionalLight position={[-5, 5, -5]} intensity={2.5}/>
                <Card/>
                <Plane/>
                <OrbitControls
                    target={[-10, 10, 10]} // Punto hacia donde mira la cámara
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                    maxDistance={2500}
                    minDistance={2}
                />
                {/*<Environment files="./hdr/fondo.hdr" background />*/}
            </Canvas>
        </div>
    )
}