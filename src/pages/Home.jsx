import { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense } from 'react';
import Auditorium from '../models/Auditorium';
import Loader from '../components/Loader';

const OrbitCameraControls = () => {
    const {camera, gl} = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        return () => {
            controls.dispose();
        }
    }, [camera, gl]);
    return null
}

export default function Home() {
    const adjustModel = () => {
        let screenScale = null;
        let screenPosition = [0, 0, 0];
        let rotation = [0, 0, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const [auditoriumScale, auditoriumPosition, auditoriumRotation] = adjustModel(); 

    return (
        <section className = 'w-full h-screen relative'>
            <Canvas 
                className = 'w-full h-screen bg-transparent'
                camera = {{near: 0.1, far: 20000, position: [0, 3600, -500], fov: [50]}}
            >
                <Suspense fallback = {<Loader />}>
                    <axesHelper args={[5]} />
                    <gridHelper size={10} divisions={50} />
                    <OrbitCameraControls />
                    <directionalLight position = {[0, 1, 0]} intensity = {2}/>
                    <ambientLight intensity = {0.03}/>

                    
                    <Auditorium 
                        position = {auditoriumPosition}
                        scale = {auditoriumScale}
                        rotation = {auditoriumRotation}
                    />
                </Suspense>

            </Canvas>
        </section>
    )
}