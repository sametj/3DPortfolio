import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function AboutMe(props) {
	const { nodes, materials } = useGLTF("/models/AboutMe.glb");
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ReactIcon001.geometry}
				material={materials["SVGMat.001"]}
				position={[-0.197, 0.93, 0.217]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.3}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ProfileTitle001.geometry}
				material={materials.Blue}
				position={[-0.481, 1.262, 0.209]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.209, 0.218, 0.218]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ProfileTitle.geometry}
				material={materials.Stack}
				position={[-0.736, 1.545, 0.207]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.189}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ProfileName.geometry}
				material={materials.Purple}
				position={[-0.443, 2.018, 0.206]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.151}
			/>
			<group
				position={[-0.402, 0.92, 0.218]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.242, 0.123, 0.242]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve003_1.geometry}
					material={materials["SVGMat.003"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve003_2.geometry}
					material={materials["SVGMat.005"]}
				/>
			</group>
			<group
				position={[-0.829, 0.93, 0.215]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.22}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve004.geometry}
					material={materials["SVGMat.006"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve004_1.geometry}
					material={materials["SVGMat.016"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve004_2.geometry}
					material={materials["SVGMat.018"]}
				/>
			</group>
			<group
				position={[0.092, 0.873, 0.214]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.368}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve006.geometry}
					material={materials["SVGMat.019"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve006_1.geometry}
					material={materials["SVGMat.026"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve006_2.geometry}
					material={materials["SVGMat.027"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve006_3.geometry}
					material={materials["SVGMat.028"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve006_4.geometry}
					material={materials["SVGMat.029"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve006_5.geometry}
					material={materials["SVGMat.030"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Curve003.geometry}
				material={materials["THREE.JS.001"]}
				position={[0.33, 0.882, 0.217]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.268}
			/>
			<group
				position={[-0.619, 0.925, 0.229]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.224, 0.185, 0.224]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve008.geometry}
					material={materials["SVGMat.031"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve008_1.geometry}
					material={materials["SVGMat.032"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve008_2.geometry}
					material={materials["SVGMat.033"]}
				/>
			</group>
			<group
				position={[0.601, 0.892, 0.216]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.303}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve011.geometry}
					material={materials["SVGMat.034"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve011_1.geometry}
					material={materials["SVGMat.035"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve011_2.geometry}
					material={materials["SVGMat.036"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Text.geometry}
				material={materials.Blue}
				position={[-0.858, 2.261, 0.012]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={0.428}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane_Baked.geometry}
				material={materials.MergedBake_Baked}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001_Baked.geometry}
				material={materials.MergedBake_Baked}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ProfileBox_Baked.geometry}
				material={materials.MergedBake_Baked}
				position={[-0.627, 1.998, 0.215]}
				rotation={[0, -1.559, -1.571]}
				scale={0.596}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Hair001_Baked.geometry}
				material={materials.MergedBake_Baked}
				position={[-0.627, 2.053, 0.257]}
				rotation={[0, -1.559, 0]}
				scale={[0.054, 0.065, 0.075]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane002_Baked.geometry}
				material={materials.MergedBake_Baked}
				position={[-0.627, 1.889, 0.241]}
				rotation={[0, -1.559, -Math.PI / 2]}
				scale={[0.321, 0.349, 0.349]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ProfileFace001_Baked.geometry}
				material={materials.MergedBake_Baked}
				position={[-0.627, 2.048, 0.249]}
				rotation={[0, -1.559, 0]}
				scale={[0.056, 0.08, 0.08]}
			/>
		</group>
	);
}

useGLTF.preload("/models/AboutMe.glb");
