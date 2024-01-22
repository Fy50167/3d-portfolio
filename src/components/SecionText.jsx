import { Text } from '@react-three/drei';
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function SectionText(props) {
    const markerRef = useRef();
    useFrame((state) => {
        state.camera.position.lerp({ x: 50, y: 25, z: 50 });
        state.camera.lookAt(0, 0, 0);
        state.camera.updateProjectionMatrix;
    });

    return (
        <>
            <Text
                position={[-1500, 500, 1000]}
                font={'fonts/JuliusSansOne-Regular.ttf'}
                color='#b99b4c'
                fontSize={150}
                lineHeight={1}
                rotation={[0, Math.PI, 0]}
                letterSpacing={0.02}
                textAlign='center'
                ref={markerRef}
            >
                FRANCIS YANG{'\n'}WEB DEVELOPER
            </Text>
        </>
    );
}
