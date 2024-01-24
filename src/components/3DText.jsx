import { Text } from '@react-three/drei';

export default function ThreeDText() {
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
                About Me
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
