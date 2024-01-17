import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Auditorium from '../models/Auditorium';
import Loader from '../components/Loader'

export default function Home() {
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

                    <Auditorium />
                </Suspense>

            </Canvas>
        </section>
    )
}