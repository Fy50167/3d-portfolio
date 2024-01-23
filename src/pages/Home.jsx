import { Canvas } from '@react-three/fiber';
import { FirstPersonControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import Auditorium from '../models/Auditorium';
import Loader from '../components/Loader';
import LightScene from '../components/LightScene';
import OverlayText from '../components/OverlayText';
import SectionText from '../components/SectionText';
import { Color } from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useControls } from 'leva';

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
    };

    const [auditoriumScale, auditoriumPosition, auditoriumRotation] =
        adjustModel();

    const bloomColor = new Color('#b99b4c');
    bloomColor.multiplyScalar(1.3);

    /* const { x, y, z } = useControls({
        x: { value: 1, min: -3000, max: 3000 },
        y: { value: 1, min: -3000, max: 3000 },
        z: { value: 1, min: -7000, max: 7000 },
    }); */

    return (
        <section className='w-full h-screen relative'>
            <Canvas
                className='w-full h-screen bg-transparent'
                camera={{
                    near: 0.1,
                    far: 20000,
                    position: [50, 2100, -1850],
                    fov: [50],
                    rotation: [Math.PI / 8, Math.PI, 0],
                }}
            >
                <Suspense fallback={<Loader />}>
                    {/* <FirstPersonControls 
                        activeLook
                        autoForward
                        enabled
                        heightCoef={1}
                        heightMax={1}
                        heightMin={0}
                        lookSpeed={0.03}
                        lookVertical
                        movementSpeed={0.5}
                        verticalMax={3.141592653589793}
                        verticalMin={0}
                    /> */}
                    <LightScene />
                    <OverlayText />
                    <SectionText />

                    <EffectComposer>
                        <Bloom mipmapBlur intensity={1.2} />
                    </EffectComposer>
                    <Auditorium
                        position={auditoriumPosition}
                        scale={auditoriumScale}
                        rotation={auditoriumRotation}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
}
