import { Text } from '@react-three/drei';

export default function OverlayText() {
    return (
        <>
            <Text
                position={[-50, 1500, 2500]}
                font={'fonts/JuliusSansOne-Regular.ttf'}
                color='#b99b4c'
                fontSize={150}
                lineHeight={1}
                rotation={[0, Math.PI, 0]}
                letterSpacing={0.02}
                textAlign='center'
            >
                FRANCIS YANG{'\n'}WEB DEVELOPER
            </Text>
        </>
    );
}
