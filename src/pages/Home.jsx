import { useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FirstPersonControls, useHelper } from '@react-three/drei';
import { DirectionalLight, DirectionalLightHelper } from 'three';
import { useControls } from "leva";
import { Suspense } from 'react';
import Auditorium from '../models/Auditorium';
import Loader from '../components/Loader';



function LightScene() {
    /* const { x, tx, y, ty, z, tz, intensity } = useControls({
        x: { value: 1, min: 0, max: 3000 },
        y: { value: 1, min: 0, max: 3000 },
        z: { value: 1, min: 0, max: 7000 },
        intensity: { value: 0.5, min: 0, max: 5 }
    });
   const dirLight = useRef();

    useHelper(dirLight, DirectionalLightHelper, 500, 'red'); */

    return (
        <>
            <ambientLight color='#efddb4' intensity = {0.1}/>
            <directionalLight
                position={[0, 2500, 0]}
                intensity={0.30}
                color='#efddb4'
                ref={dirLight}
            />
            <hemisphereLight color = '#FFD700' groundColor = {'#000000'} intensity = {0.1} />
        </>
    )
};

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
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 20000, position: [50, 2100, -1850], fov: [50], rotation: [Math.PI / 8, Math.PI, 0]}}
            >
                <Suspense fallback = {<Loader />}>
                    <FirstPersonControls 
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
                    />
                    <LightScene />
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