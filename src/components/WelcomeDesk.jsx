import React, { useRef } from "react";
import {
	useGLTF,
	Float,
	Text3D,
	CameraControls,
	Center,
	useVideoTexture,
	Text,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Avatar from "./Avatar";
import * as THREE from "three";

export default function WelcomeDesk(props) {
	const { nodes, materials } = useGLTF("/models/AnimatedDesk.glb");
	const videoTexture = useVideoTexture("/videos/videoTextture.mp4");
	const groupRef = useRef();

	videoTexture.flipY = false;
	videoTexture.colorSpace = THREE.SRGBColorSpace;

	useFrame((state, delta) => {
		const cursorX = state.pointer.x / state.viewport.width;
		const cursorY = state.pointer.y / state.viewport.height;

		// Add the mouse movement to the initial group position
		groupRef.current.position.x = cursorX * 0.2;
		groupRef.current.position.y = -cursorY * 0.1;

		state.camera.lookAt(0, 0, 0);
	});

	return (
		<>
			<group
				ref={groupRef}
				{...props}
				rotation-y={-Math.PI / 2}
				position={[0, -1, 0]}
				dispose={null}>
				<group position={[0, 0.3, 0]}>
					<Text
						fontSize={0.2}
						rotation-y={Math.PI / 2}
						position={[-2.14, 3, 1.586]}
						bevelEnabled
						font='/fonts/kdam-thmor-pro-v4-latin-regular.woff'>
						Hi, My name is Temitope Moses James (Teejay)
						<meshNormalMaterial attach='material' />
					</Text>
					<Text
						fontSize={0.2}
						rotation-y={Math.PI * 0.6}
						position={[-2.14, 2.7, 1.586]}
						bevelEnabled
						font='/fonts/kdam-thmor-pro-v4-latin-regular.woff'>
						I am a FullStack Developer
						<meshBasicMaterial
							attach='material'
							color={"green"}
						/>
					</Text>
				</group>

				<group name='Scene'>
					<group
						name='Keyboard'
						position={[-2.14, 1.281, 1.586]}
						rotation={[0, 0.209, 0]}
						scale={[1.114, 0.642, 1.114]}>
						<mesh
							name='Base001'
							castShadow
							receiveShadow
							geometry={nodes.Base001.geometry}
							material={materials["Base.001"]}
						/>
						<mesh
							name='Base001_1'
							castShadow
							receiveShadow
							geometry={nodes.Base001_1.geometry}
							material={materials["Key.Caps"]}
						/>
						<mesh
							name='Base001_2'
							castShadow
							receiveShadow
							geometry={nodes.Base001_2.geometry}
							material={materials.Backlight}
						/>
						<mesh
							name='Base001_3'
							castShadow
							receiveShadow
							geometry={nodes.Base001_3.geometry}
							material={materials["Switch.Plastic.Red"]}
						/>
						<mesh
							name='Base001_4'
							castShadow
							receiveShadow
							geometry={nodes.Base001_4.geometry}
							material={materials["Switch.Plastic.Trans"]}
						/>
						<mesh
							name='Base001_5'
							castShadow
							receiveShadow
							geometry={nodes.Base001_5.geometry}
							material={materials["Stand.Axis"]}
						/>
						<mesh
							name='Base001_6'
							castShadow
							receiveShadow
							geometry={nodes.Base001_6.geometry}
							material={materials.Sticker}
						/>
					</group>
					<group
						name='MouseThermaltakeBlack'
						position={[-2.24, 1.283, 0.95]}
						rotation={[Math.PI / 2, 0, -1.788]}
						scale={0.055}>
						<mesh
							name='MouseThermaltakeBlack_1'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_1.geometry}
							material={materials.wire_000000083}
						/>
						<mesh
							name='MouseThermaltakeBlack_2'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_2.geometry}
							material={materials.wire_000000125}
						/>
						<mesh
							name='MouseThermaltakeBlack_3'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_3.geometry}
							material={materials.wire_169255193}
						/>
						<mesh
							name='MouseThermaltakeBlack_4'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_4.geometry}
							material={materials.wire_000083069}
						/>
						<mesh
							name='MouseThermaltakeBlack_5'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_5.geometry}
							material={materials.wire_197131131}
						/>
						<mesh
							name='MouseThermaltakeBlack_6'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_6.geometry}
							material={materials.wire_083035000}
						/>
						<mesh
							name='MouseThermaltakeBlack_7'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_7.geometry}
							material={materials.wire_000083000}
						/>
						<mesh
							name='MouseThermaltakeBlack_8'
							castShadow
							receiveShadow
							geometry={nodes.MouseThermaltakeBlack_8.geometry}
							material={materials.wire_255215169}
						/>
					</group>
					<group
						name='Empty'
						position={[-1.191, 0.138, 1.205]}
						rotation={[0, -1.424, 0]}
						scale={1.496}>
						<Avatar />
					</group>
					<group
						name='Monitor'
						position={[-2.498, 1.883, 1.351]}>
						<mesh
							name='Plane004'
							castShadow
							receiveShadow
							geometry={nodes.Plane004.geometry}
							material={materials["Monitor Frame"]}
						/>
						<mesh
							name='Plane004_1'
							castShadow
							receiveShadow
							geometry={nodes.Plane004_1.geometry}
							material={materials.Base}
						/>
						<mesh
							name='Plane004_2'
							castShadow
							receiveShadow
							geometry={nodes.Plane004_2.geometry}>
							<meshBasicMaterial
								attach='material'
								map={videoTexture}
							/>
						</mesh>
					</group>
					<mesh
						name='Cube005_Baked'
						castShadow
						receiveShadow
						geometry={nodes.Cube005_Baked.geometry}
						material={materials["Cube.005_Baked"]}
						position={[-2.451, 0.417, 2.905]}
					/>
					<mesh
						name='Plane_Baked'
						castShadow
						receiveShadow
						geometry={nodes.Plane_Baked.geometry}
						material={materials.Plane_Baked}
						position={[-2.464, 0.4, 3.003]}
					/>
					<mesh
						name='Table_Baked'
						castShadow
						receiveShadow
						geometry={nodes.Table_Baked.geometry}
						material={materials.Table_Baked}
						position={[-2.327, 1.154, 1.275]}
					/>
					<mesh
						name='Chair_Baked'
						castShadow
						receiveShadow
						geometry={nodes.Chair_Baked.geometry}
						material={materials.Chair_Baked}
						position={[-1.12, 0.825, 1.157]}
						rotation={[0, -0.393, 0]}
						scale={[1.312, 1.024, 1.312]}
					/>
					<mesh
						name='Cube007_Baked'
						castShadow
						receiveShadow
						geometry={nodes.Cube007_Baked.geometry}
						material={materials["Cube.007_Baked"]}
						position={[-2.538, 0.501, 2.79]}
						scale={[-0.049, -0.043, -0.006]}
					/>
				</group>
			</group>
		</>
	);
}

useGLTF.preload("/models/AnimatedDesk.glb");
