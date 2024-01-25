import React, { useRef } from 'react';
import { useGLTF, MeshReflectorMaterial } from '@react-three/drei';
import auditoriumScene from '../assets/3d/auditoriumCompressed.glb';

export default function Auditorium(props) {
    const auditoriumRef = useRef();
    const { nodes, materials } = useGLTF(auditoriumScene);

    return (
        <group ref={auditoriumRef} {...props} dispose={null}>
            <group scale={100}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.128}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[0, -24.771, 87.956]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={
                                    nodes.polySurface4058_lambert64_0.geometry
                                }
                                material={materials.lambert64}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={
                                    nodes.polySurface4058_lambert64_0_1.geometry
                                }
                                material={materials.lambert64}
                            />
                        </group>
                        <group scale={100}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.chair_wood_lambert55_0.geometry}
                                material={materials.lambert55}
                                position={[0.023, 0.152, 2.174]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={0.006}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={
                                    nodes.chair_leather_lambert54_0.geometry
                                }
                                material={materials.lambert54}
                                position={[0.023, 0.152, 2.174]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={0.006}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface174_lambert63_0.geometry}
                            material={materials.lambert63}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface174_lambert63_0_1.geometry
                            }
                            material={materials.lambert63}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface218_lambert64_0.geometry}
                            material={materials.lambert64}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface218_lambert64_0_1.geometry
                            }
                            material={materials.lambert64}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface228_lambert64_0.geometry}
                            material={materials.lambert64}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface228_lambert64_0_1.geometry
                            }
                            material={materials.lambert64}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface228_lambert64_0_2.geometry
                            }
                            material={materials.lambert64}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4053_lambert63_0.geometry
                            }
                            material={materials.lambert63}
                            position={[0, 91.29, 5.353]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCylinder109_lambert74_0.geometry}
                            material={materials.lambert74}
                            position={[0, 0, -0.879]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4055_lambert63_0.geometry
                            }
                            material={materials.lambert63}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4056_lambert64_0.geometry
                            }
                            material={materials.lambert64}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4056_lambert64_0_1.geometry
                            }
                            material={materials.lambert64}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes._Mesh6_lambert59_0.geometry}
                            material={materials.lambert59}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube34_lambert75_0.geometry}
                            material={materials.lambert75}
                            scale={[0.989, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4100_lambert67_0.geometry
                            }
                            material={materials.lambert67}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4324_lambert80_0.geometry
                            }
                            material={materials.lambert80}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface1_lambert49_0.geometry}
                            material={materials.lambert49}
                            position={[0, 0, -5.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface169_lambert50_0.geometry}
                            material={materials.lambert50}
                            position={[0, 0, -5.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface175_lambert51_0.geometry}
                            material={materials.lambert51}
                            position={[0, 0, -5.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface182_lambert57_0.geometry}
                            material={materials.lambert57}
                            position={[0, 0, -5.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.polySurface305_lambert56_0.geometry}
                            material={materials.lambert56}
                            position={[0, 0, -5.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.Pino_polySurface174_lambert58_0.geometry
                            }
                            material={materials.lambert58}
                            position={[-10.35, 15.196, 221.676]}
                            rotation={[0, 1.528, 0]}
                            scale={1.547}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4194_lambert76_0.geometry
                            }
                            material={materials.lambert76}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4195_lambert63_0.geometry
                            }
                            material={materials.lambert63}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4195_lambert63_0_1.geometry
                            }
                            material={materials.lambert63}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4201_lambert73_0.geometry
                            }
                            material={materials.lambert73}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4294_lambert81_0.geometry
                            }
                            material={materials.lambert81}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4203_lambert72_0.geometry
                            }
                            material={materials.lambert72}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4325_lambert82_0.geometry
                            }
                            material={materials.lambert82}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4326_lambert83_0.geometry
                            }
                            material={materials.lambert83}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4295_lambert77_0.geometry
                            }
                            material={materials.lambert77}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                nodes.polySurface4296_lambert79_0.geometry
                            }
                            material={materials.lambert79}
                        />
                    </group>
                </group>
            </group>
            <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[100, 100]} />
                <MeshReflectorMaterial
                    blur={[100, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={1}
                    depthScale={1}
                    opacity={0.5}
                    transparent
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color='#333'
                    metalness={0.5}
                />
            </mesh>
        </group>
    );
}
