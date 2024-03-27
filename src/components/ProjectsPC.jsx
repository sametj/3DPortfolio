import React, { useEffect, useRef, useState } from "react";
import { Outlines, useGLTF, useVideoTexture } from "@react-three/drei";
import {
	EffectComposer,
	Outline,
	Select,
	Selection,
} from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useContext } from "react";

export default function ProjectsPc(props) {
	const { nodes, materials } = useGLTF("/models/ProjectsPc.glb");
	const { video } = props;
	const [videoSrc, setVideoSrc] = useState(video);

	useEffect(() => {
		setVideoSrc(video);
	}, [video]);

	const videos = useVideoTexture(videoSrc);
	videos.flipY = false;

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
				position={[2.149, 1.108, -1.403]}
				rotation={[-Math.PI, 1.543, 0]}>
				<meshStandardMaterial
					map={videos}
					toneMapped={false}
				/>
			</mesh>
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
