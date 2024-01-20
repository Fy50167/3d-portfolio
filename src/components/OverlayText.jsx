import { Html } from "@react-three/drei";

export default function OverlayText() {

    return (
        <>
        <Html position={[0, 1000, 3000]}>
            <div className = 'rounded-md w-screen h-5 bg-black opacity-70'>
                <h1 style={{ margin: 0, color: 'white' }}>
                    Hello, 3D Text!
                </h1>
            </div>
        </Html>
        </>
    );
  };