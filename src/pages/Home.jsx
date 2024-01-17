import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Auditorium from '../models/Auditorium';
import Loader from '../components/Loader'

export default function Home() {
    const adjustModel = () => {
        let screenScale = null;
        let screenPosition = [0, -0.65, -43];
        let rotation = [0.1, 4.7, 0];

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
                camera = {{near: 0.1, far: 1000}}
            >
                <Suspense fallback = {<Loader />}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />

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