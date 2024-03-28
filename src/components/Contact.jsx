import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Contact(props) {
	const { nodes, materials } = useGLTF("/models/Contact.glb");
	return (
		<group
			{...props}
			dispose={null}>
			<group
				position={[-4.423, -0.373, 16.333]}
				rotation={[1.187, 0, 0]}
				scale={2.236}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_1.geometry}
					material={materials["Material.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_2.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_3.geometry}
					material={materials["SVGMat.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_4.geometry}
					material={materials["SVGMat.006"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_5.geometry}
					material={materials["SVGMat.007"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_6.geometry}
					material={materials["SVGMat.008"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_7.geometry}
					material={materials.Material}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Text002_8.geometry}
					material={materials.SVGMat}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/models/Contact.glb");
