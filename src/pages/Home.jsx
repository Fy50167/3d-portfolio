import { useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FirstPersonControls, useHelper } from '@react-three/drei';
import { DirectionalLight, DirectionalLightHelper } from 'three';
import { useControls } from "leva";
import { Suspense } from 'react';
import Auditorium from '../models/Auditorium';
import Loader from '../components/Loader';

const OrbitCameraControls = () => {
    const {camera, gl} = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
    
        controls.minDistance = 0;
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

    const dirLight = useRef<DirectionalLight>(null);
    useHelper(dirLight, DirectionalLightHelper, 1, "red");


    return (
        <section className = 'w-full h-screen relative'>
            <Canvas 
                className = 'w-full h-screen bg-transparent'
                camera = {{near: 0.1, far: 20000, position: [50, 2100, -1850], fov: [50],  rotation: [Math.PI / 8, Math.PI, 0]}}
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
                    <ambientLight intensity = {0.1}/>
                    <directionalLight position = {[0, 5, 0]} intensity = {0.4} ref = {dirLight}/>
                    <hemisphereLight color = '#FFD700' groundColor = {'#000000'} intensity = {0.1} />
                    

                    
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