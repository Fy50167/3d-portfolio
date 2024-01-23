import { Text } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import { useControls } from 'leva';

export default function SectionText(props) {
    const location = useLocation();
    const markerRef = useRef();
    const [boolean, setBoolean] = useState(false);
    useEffect(() => {
        console.log(location.pathname);
    }, [location.pathname]);
    useFrame((state) => {
        if (boolean) {
            state.camera.position.lerp({ x: 50, y: 25, z: 50 });
            state.camera.lookAt(0, 0, 0);
            state.camera.updateProjectionMatrix;
        }
    });

    return (
        <>
            <Text
                position={[1700, 500, 1350]}
                font={'fonts/Quicksand-Regular.ttf'}
                color='#b99b4c'
                fontSize={150}
                lineHeight={1}
                rotation={[0, Math.PI / 1.08, 0]}
                letterSpacing={0.02}
                textAlign='center'
                ref={markerRef}
            >
                Work
            </Text>

            <Text
                position={[0, 500, 1200]}
                font={'fonts/Quicksand-Regular.ttf'}
                color='#b99b4c'
                fontSize={150}
                lineHeight={1}
                rotation={[0, Math.PI, 0]}
                letterSpacing={0.02}
                textAlign='center'
                ref={markerRef}
            >
                Resume
            </Text>

            <Text
                position={[-1700, 500, 1350]}
                font={'fonts/Quicksand-Regular.ttf'}
                color='#b99b4c'
                fontSize={150}
                lineHeight={1}
                rotation={[0, Math.PI / 0.92, 0]}
                letterSpacing={0.02}
                textAlign='center'
                ref={markerRef}
            >
                Contact
            </Text>
        </>
    );
}
