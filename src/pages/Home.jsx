import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Auditorium from '../models/Auditorium';
import Loader from '../components/Loader'

export default function Home() {
    const adjustModel = () => {
        let screenScale = null;
        let screenPosition = [0, 450, 1500]; // [x, z, y]
        let rotation = [150, 0, 0];

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
                camera = {{near: 0.1, far: 20000}}
            >
                <axesHelper args={[5]} />
                <gridHelper size={10} divisions={10} />
                <Suspense fallback = {<Loader />}>
                    <directionalLight position = {[0, 1, 0]} intensity = {2}/>
                    <ambientLight intensity = {0.03}/>
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