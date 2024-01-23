import { Text, useCursor } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import { useControls } from 'leva';

export default function SectionText() {
    return (
        <>
            <Text
                position={[1700, 500, 1350]}
                font={'fonts/Quicksand-Regular.ttf'}
                color='#b99b4c'
                fontSize={150}
                lineHeight={1}
                rotation={[0, Math.PI, 0]}
                letterSpacing={0.02}
                textAlign='center'
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
            >
                Contact
            </Text>
        </>
    );
}
