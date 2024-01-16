import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function Home() {
    return (
        <section classname = 'w-full h-screen relative'>
            <div classname = 'absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                Hi! This is my site!
            </div>

            <Canvas 
                classname = 'w-full h-screen bg-transparent'
                camera = {{near: 0.1, far: 1000}}
            >
                <Suspense fallback = {<Loader />}>
                    <directionalLight />
                    <ambientLight />
                    <pointLight />
                    <spotLight />
                    <hemisphereLight />
                </Suspense>

            </Canvas>
        </section>
    )
}