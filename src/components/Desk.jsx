import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Desk(props) {
	const { nodes, materials } = useGLTF("/models/Desk.glb");
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Table.geometry}
				material={materials["Material.001"]}
				position={[0.395, 0, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TableLegs.geometry}
					material={materials["Table leg"]}
				/>
			</mesh>
			<group
				position={[-0.274, 1.326, -0.013]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={1.551}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane011.geometry}
					material={materials.Monitor}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane011_1.geometry}
					material={materials.LaptopScreen}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Wall.geometry}
				material={materials.Wall}
				position={[-0.271, 0.984, 0]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={[1, 1, 2.014]}
			/>
			<group
				position={[0.721, 0.971, 0.056]}
				scale={[0.712, 1, 1]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane013.geometry}
					material={materials.KeyNoard}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane013_1.geometry}
					material={materials.BackLight}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.KeyCaps.geometry}
					material={materials.KeyCaps}
					position={[-0.187, 0.022, 0.486]}
					scale={[1.405, 0.589, 1]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PictureFrame.geometry}
				material={materials.PictureFrame}
				position={[-0.272, 1.61, 1.634]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PictureFrame001.geometry}
				material={materials.Frame2}
				position={[-0.272, 1.61, -1.557]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Mouse.geometry}
				material={materials.Mouse}
				position={[0.759, 0.971, -0.665]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.MousePad.geometry}
				material={materials.MousePad}
				position={[0.682, 0.971, -0.022]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PenHolder.geometry}
				material={materials.PencilCup}
				position={[-0.11, 1.053, 1.013]}
				scale={0.107}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Pen.geometry}
				material={materials.Pen}
				position={[-0.1, 1.017, 1.006]}
				rotation={[-2.664, 0, 0]}
				scale={0.638}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Pen001.geometry}
				material={materials.Pen}
				position={[-0.1, 1.017, 1.006]}
				rotation={[2.706, 0, 0]}
				scale={0.638}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Laptop001.geometry}
				material={materials.Laptop}
				position={[0.484, 0.971, 1.271]}
				rotation={[0, 0.645, 0]}
				scale={1.631}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.laptop.geometry}
					material={materials["Laptop Keyboard"]}
					position={[0.057, 0.005, 0.133]}
					scale={[1.014, 1, 1.024]}
				/>
				<group position={[0, 0.007, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane027.geometry}
						material={materials.Laptop}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane027_1.geometry}
						material={materials.LaptopScreen}
					/>
				</group>
			</mesh>
			<group position={[0.731, 0.971, -1.065]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane076.geometry}
					material={materials.Iphone}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane076_1.geometry}
					material={materials.Music}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane076_2.geometry}
					material={materials.Black}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Clock.geometry}
				material={materials.AlarmClock}
				position={[-0.194, 0.992, 0.005]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PictureFrame002.geometry}
				material={materials.Image}
				position={[-0.259, 1.61, 1.634]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PictureFrame003.geometry}
				material={materials.image}
				position={[-0.272, 1.61, -1.557]}
				rotation={[0, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Clock001.geometry}
				material={materials.ClockFace}
				position={[-0.195, 0.992, 0.005]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Card.geometry}
				material={materials.Board}
				position={[-0.156, 1.517, -0.016]}
				scale={[0.261, 0.27, 0.345]}>
				<group
					position={[0.09, -1.245, -1.544]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.766, 0.825, 0.825]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve005.geometry}
						material={materials["SVGMat.008"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve005_1.geometry}
						material={materials["SVGMat.007"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve005_2.geometry}
						material={materials["SVGMat.009"]}
					/>
				</group>
				<group
					position={[0.128, -1.153, 1.54]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.567, 0.502, 0.61]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve009.geometry}
						material={materials["SVGMat.012"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve009_1.geometry}
						material={materials["SVGMat.010"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve009_2.geometry}
						material={materials["SVGMat.011"]}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Curve002.geometry}
					material={materials["THREE.JS"]}
					position={[0.095, -1.272, -0.859]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.676, 0.728, 0.728]}
				/>
				<group
					position={[0.086, -1.294, -0.257]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.929, 1, 1]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve018.geometry}
						material={materials["SVGMat.022"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve018_1.geometry}
						material={materials["SVGMat.020"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve018_2.geometry}
						material={materials["SVGMat.021"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve018_3.geometry}
						material={materials["SVGMat.023"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve018_4.geometry}
						material={materials["SVGMat.024"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve018_5.geometry}
						material={materials["SVGMat.025"]}
					/>
				</group>
				<group
					position={[0.088, -1.14, 2.071]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.556, 0.598, 0.598]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve010.geometry}
						material={materials["SVGMat.013"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve010_1.geometry}
						material={materials["SVGMat.014"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve010_2.geometry}
						material={materials["SVGMat.015"]}
					/>
				</group>
				<group
					position={[0.096, -1.168, 0.991]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.61, 0.336, 0.657]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve002_1.geometry}
						material={materials["SVGMat.004"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Curve002_2.geometry}
						material={materials["SVGMat.002"]}
					/>
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ProfileName.geometry}
					material={materials.Purple}
					position={[0.089, 0.906, 1.033]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.319, 0.343, 0.343]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ProfileTitle.geometry}
					material={materials.Stack}
					position={[0.089, 0.15, 0.845]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.3, 0.322, 0.322]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ProfileTitle001.geometry}
					material={materials.Blue}
					position={[0.089, -0.355, 0.616]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.333, 0.358, 0.358]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ReactIcon.geometry}
					material={materials["SVGMat.017"]}
					position={[0.096, -1.14, 0.473]}
					rotation={[Math.PI / 2, 0, -Math.PI / 2]}
					scale={[0.758, 0.815, 0.815]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.ProfileBox.geometry}
					material={materials["Material.002"]}
					position={[-0.035, 0.456, 1.704]}
					rotation={[0, 0, -Math.PI / 2]}
					scale={[1.856, 1.856, 1.725]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Hair001.geometry}
						material={materials.Hair}
						position={[-0.092, 0.125, 0]}
						rotation={[0, 0, Math.PI / 2]}
						scale={[0.091, 0.108, 0.125]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane005.geometry}
						material={nodes.Plane005.material}
						position={[0.182, 0.098, 0.001]}
						scale={[0.539, 0.585, 0.585]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.ProfileFace001.geometry}
						material={materials.Skin}
						position={[-0.083, 0.112, 0]}
						rotation={[0, 0, Math.PI / 2]}
						scale={[0.093, 0.135, 0.135]}
					/>
				</mesh>
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Chair002.geometry}
				material={materials.Cushion}
				position={[1.713, 0.794, 0.029]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Chair001.geometry}
					material={materials["Table leg"]}
					position={[0.013, -0.451, 0.008]}
					scale={1.031}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Chair003.geometry}
					material={materials.Cushion}
					position={[0.032, 0.309, 0.465]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane.geometry}
					material={materials.Cushion}
					position={[-0.012, -0.109, 0.014]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane001.geometry}
					material={materials.Cushion}
					position={[0.44, 0.426, 0.001]}
					rotation={[0, 0, 0.081]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane002.geometry}
					material={materials.Cushion}
					position={[0.462, 0.42, 0.015]}
					rotation={[0, 0, 0.081]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Chair.geometry}
					material={materials.Cushion}
					position={[-0.172, -0.099, 0.003]}
					rotation={[-Math.PI, 0, 0]}
					scale={1.031}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Wheel.geometry}
					material={materials.Cushion}
					position={[0.563, -0.7, 0.242]}
					scale={1.031}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Wheel001.geometry}
					material={materials.Cushion}
					position={[-0.227, -0.7, 0.559]}
					rotation={[0, -1.566, 0]}
					scale={1.031}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Wheel002.geometry}
					material={materials.Cushion}
					position={[-0.548, -0.7, -0.228]}
					rotation={[Math.PI, -0.012, Math.PI]}
					scale={1.031}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Wheel003.geometry}
					material={materials.Cushion}
					position={[0.244, -0.7, -0.552]}
					rotation={[-Math.PI, 1.565, -Math.PI]}
					scale={1.031}
				/>
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Floor.geometry}
				material={materials.Floor}
				position={[0.862, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle.geometry}
				material={materials.Rug}
				position={[1.754, 0, 0]}
				scale={1.312}
			/>
		</group>
	);
}

useGLTF.preload("/models/Desk.glb");
