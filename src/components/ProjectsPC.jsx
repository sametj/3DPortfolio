import React, { useRef, useState } from "react";
import { Outlines, useGLTF } from "@react-three/drei";
import {
	EffectComposer,
	Outline,
	Select,
	Selection,
} from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ProjectsPc(props) {
	const { nodes, materials } = useGLTF("/models/ProjectsPc.glb");
	const [hovered, setHovered] = useState(null);
	const [activeRef, setActiveRef] = useState(null);

	const mainMaterial = useRef();

	const demoRef = useRef();
	const githubRef = useRef();

	const handlePointerOver = (e) => {
		e.stopPropagation();
		document.querySelector("#root").style.cursor = "pointer";
		setHovered(true);
		mainMaterial.current = e.object.material;
		e.object.material = new THREE.MeshBasicMaterial({
			color: "green",
		});
	};
	const handlePointerOut = (e) => {
		e.stopPropagation();
		document.querySelector("#root").style.cursor = "auto";
		setHovered(false);
		e.object.material = mainMaterial.current;
	};
	return (
		<group
			{...props}
			dispose={null}>
			<Selection>
				<EffectComposer
					multisampling={20}
					autoClear={false}>
					<Outline
						blur
						visibleEdgeColor='white'
						edgeStrength={200}
						width={1000}
					/>
				</EffectComposer>

				<group
					position={[0.804, 1.185, -1.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.594}>
					<mesh
						ref={githubRef}
						onPointerOver={handlePointerOver}
						onPointerOut={handlePointerOut}
						castShadow
						receiveShadow
						geometry={nodes.Plane005.geometry}
						material={materials.GitHub}
					/>

					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane005_1.geometry}
						material={materials["Text.001"]}
					/>
				</group>

				<group
					position={[-0.58, 1.185, -1.26]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.594}>
					<mesh
						ref={demoRef}
						onPointerOver={handlePointerOver}
						onPointerOut={handlePointerOut}
						castShadow
						receiveShadow
						geometry={nodes.Plane008.geometry}
						material={materials.Red}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane008_1.geometry}
						material={materials["Text.001"]}
					/>
				</group>
			</Selection>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ProjectPc001_Baked.geometry}
				material={materials.ProjectsPc}
				position={[2.149, 1.108, -1.418]}
				rotation={[-Math.PI, 1.543, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ProjectPc001_Baked001.geometry}
				material={materials.Screen}
				position={[2.149, 1.108, -1.403]}
				rotation={[-Math.PI, 1.543, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Curve001.geometry}
				material={materials.SVGMat}
			/>
		</group>
	);
}

useGLTF.preload("/models/ProjectsPc.glb");
