import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper, SpotLightHelper } from 'three';
import { useControls } from "leva";

export default function LightScene() {
    const { x, y, z, intensity, distance, angle } = useControls({
        x: { value: 1, min: 0, max: 3000 },
        y: { value: 1, min: 0, max: 3000 },
        z: { value: 1, min: 0, max: 7000 },
        intensity: { value: 0.5, min: 0, max: 3000 },
        distance: { value: 500, min: 0, max: 3000 },
        angle: { value: Math.PI / 4, min: 0, max: Math.PI / 2 }
    });
    /* const dirLight = useRef();
    useHelper(dirLight, DirectionalLightHelper, 500, 'red'); */

    const spotLight = useRef();
    useHelper(spotLight, SpotLightHelper, 'green');

    return (
        <>
            <ambientLight color='#efddb4' intensity = {0.1}/>
            <directionalLight
                position={[0, 2500, 0]}
                intensity={0.30}
                color='#efddb4'
                /*ref={dirLight}*/
            />
            <spotLight
                position={[x, y, z]}
                intensity={intensity}
                distance={distance}
                angle={angle}
                ref={spotLight}
            />
            <hemisphereLight color = '#FFD700' groundColor = {'#000000'} intensity = {0.1} />
        </>
    )
}