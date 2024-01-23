import { useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function CameraAnimation() {
    const location = useLocation();

    useFrame((state) => {
        if (location.pathname === '/projects') {
            state.camera.position.lerp({ x: 1800, y: 150, z: 1250 }, 0.03);
            state.camera.lookAt(0, 250, 2400);
        } else if (location.pathname === '/') {
            state.camera.position.lerp({ x: 50, y: 2100, z: -1850 }, 0.03);
            state.camera.lookAt(0, 250, 2400);
        } else if (location.pathname === '/resume') {
            state.camera.position.lerp({ x: 0, y: 150, z: 1250 }, 0.03);
            state.camera.lookAt(0, 250, 2400);
        } else if (location.pathname === '/contact') {
            state.camera.position.lerp({ x: -1800, y: 150, z: 1250 }, 0.03);
            state.camera.lookAt(0, 250, 2400);
        }
    });

    return <></>;
}
