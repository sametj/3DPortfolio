import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Portfolio(props) {
	const { nodes, materials } = useGLTF("/models/Portfolio.glb");
	return (
		<group
			{...props}
			dispose={null}>
			<group
				position={[-2.557, 19.715, 6.315]}
				rotation={[0, 1.571, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane075.geometry}
					material={materials["Table leg.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane075_1.geometry}
					material={materials["Material.015"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Wall.geometry}
				material={materials["Wall.003"]}
				position={[-2.557, 22.306, 8.069]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<group
				position={[-2.454, 22.329, 5.47]}
				rotation={[0, 1.571, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane079.geometry}
					material={materials["KeyCaps.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane079_1.geometry}
					material={materials["KeyNoard.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane079_2.geometry}
					material={materials["BackLight.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane079_3.geometry}
					material={materials["Mouse.002"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.MousePad.geometry}
				material={materials["MousePad.002"]}
				position={[-2.615, 22.274, 5.557]}
				rotation={[0, 1.571, 0]}
			/>
			<group
				position={[0.792, 22.305, 6.079]}
				rotation={[-Math.PI, 0.926, -Math.PI]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane081.geometry}
					material={materials["Laptop.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane081_1.geometry}
					material={materials["Laptop Keyboard.002"]}
				/>
			</group>
			<group
				position={[-5.362, 22.274, 5.429]}
				rotation={[0, 1.571, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane082.geometry}
					material={materials["Iphone.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane082_1.geometry}
					material={materials["Black.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Iphone001.geometry}
					material={materials["Music.002"]}
					position={[0, 0.001, 0]}
				/>
			</group>
			<group
				position={[-2.543, 22.328, 7.866]}
				rotation={[0, 1.571, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084.geometry}
					material={materials["AlarmClock.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_1.geometry}
					material={materials["PictureFrame.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_2.geometry}
					material={materials["Image.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_3.geometry}
					material={materials["Frame2.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_4.geometry}
					material={materials["image.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_5.geometry}
					material={materials["Pen.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_6.geometry}
					material={materials["PencilCup.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_7.geometry}
					material={materials["Board.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_8.geometry}
					material={materials["SVGMat.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_9.geometry}
					material={materials["SVGMat.003"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_10.geometry}
					material={materials["SVGMat.005"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_11.geometry}
					material={materials["SVGMat.006"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_12.geometry}
					material={materials["SVGMat.016"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_13.geometry}
					material={materials["SVGMat.018"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_14.geometry}
					material={materials["SVGMat.019"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_15.geometry}
					material={materials["SVGMat.026"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_16.geometry}
					material={materials["SVGMat.027"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_17.geometry}
					material={materials["SVGMat.028"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_18.geometry}
					material={materials["SVGMat.029"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_19.geometry}
					material={materials["SVGMat.030"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_20.geometry}
					material={materials["THREE.JS.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_21.geometry}
					material={materials["SVGMat.031"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_22.geometry}
					material={materials["SVGMat.032"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_23.geometry}
					material={materials["SVGMat.033"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_24.geometry}
					material={materials["SVGMat.034"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_25.geometry}
					material={materials["SVGMat.035"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_26.geometry}
					material={materials["SVGMat.036"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_27.geometry}
					material={materials["Material.016"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_28.geometry}
					material={materials["Skin.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_29.geometry}
					material={materials["Hair.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_30.geometry}
					material={materials["Purple.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_31.geometry}
					material={materials["Blue.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_32.geometry}
					material={materials["Stack.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane084_33.geometry}
					material={materials["Monitor.002"]}
				/>
			</group>
			<group
				position={[-2.479, 21.806, 2.842]}
				rotation={[0, 1.571, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane085.geometry}
					material={materials["Cushion.002"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane085_1.geometry}
					material={materials["Table leg.002"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Floor.geometry}
				material={materials["Floor.002"]}
				position={[-2.557, 19.715, 5.085]}
				rotation={[0, 1.571, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.RUG001.geometry}
				material={materials["Rug.004"]}
				position={[-2.557, 19.721, 2.734]}
				rotation={[0, 1.571, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Laptop003.geometry}
				material={materials["LaptopScreen.002"]}
				position={[1.203, 23.035, 6.631]}
				rotation={[-Math.PI, 0.926, -Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Room_Wall.geometry}
				material={materials["Wall.002"]}
				position={[-2.167, 3.329, -1.199]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Stairs.geometry}
				material={materials["Material.010"]}
				position={[-5.782, 3.705, -3.171]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.RigBase.geometry}
				material={materials.MetalicBlack}
				position={[-0.204, 0.059, -5.796]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.RigWheelHolder.geometry}
				material={materials.MetalicBlack}
				position={[-0.194, 0.173, -6.608]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<group
				position={[1.082, 0.249, -5.794]}
				rotation={[-Math.PI / 2, 1.303, Math.PI / 2]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane006_1.geometry}
					material={materials.Cushion}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane006_2.geometry}
					material={materials.Silver}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.RigWheelBase.geometry}
				material={materials.MetalicBlack}
				position={[-0.194, 1.08, -5.796]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<group
				position={[-0.575, 1.199, -5.796]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009.geometry}
					material={materials.AlarmClock}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009_1.geometry}
					material={materials.Silver}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009_2.geometry}
					material={materials.Concrete}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009_3.geometry}
					material={materials.Blue}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009_4.geometry}
					material={materials.green}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009_5.geometry}
					material={materials.TVWallFrame}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane009_6.geometry}
					material={materials.Black}
				/>
			</group>
			<group
				position={[-1.279, 0.26, -5.803]}
				rotation={[0, Math.PI / 2, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane020.geometry}
					material={materials.MetalicBlack}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane020_1.geometry}
					material={materials["Material.005"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.MonitorStand.geometry}
				material={materials.MetalicBlack}
				position={[0.144, 0.849, -6.773]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.WheelMonitor.geometry}
				material={materials.Frame}
				position={[-0.058, 1.7, -5.781]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.RigRug.geometry}
				material={materials.Black}
				position={[-0.204, 0.047, -5.796]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.WheelScreen001.geometry}
				material={materials.AlarmClock}
				position={[-0.575, 1.199, -5.796]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.TVSet_Frame.geometry}
				material={materials.TVWallFrame}
				position={[-0.7, 1.675, 2.452]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.TopShelf.geometry}
				material={materials.Wood}
				position={[-0.7, 2.76, 2.278]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.TVStand.geometry}
				material={materials.Wood}
				position={[-0.683, 0.659, 2.409]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.BottomShelf.geometry}
				material={materials.Wood}
				position={[-0.688, 0.31, 2.278]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Speaker.geometry}
				material={materials.MetalicBlack}
				position={[-2.137, 1.127, 2.409]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Couch.geometry}
				material={materials.Couch}
				position={[-0.75, 0.047, -1.909]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rug002.geometry}
				material={materials["Rug.002"]}
				position={[-0.763, 0.047, 0.415]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.TV.geometry}
				material={materials.MetalicBlack}
				position={[-0.7, 1.765, 2.409]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.TVScreen.geometry}
					material={materials.Screen}
					position={[0, 0.002, 0]}
				/>
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane003.geometry}
				material={materials.AlarmClock}
				position={[-5.186, 2.715, 2.492]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials.Wood}
				position={[-5.667, 0.047, 2.149]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube001.geometry}
				material={materials.KeyCaps}
				position={[-5.667, 0.047, 2.149]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Rug001.geometry}
				material={materials["Rug.002"]}
				position={[-5.578, 0.047, 0.415]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane010.geometry}
				material={materials.Emission}
				position={[-5.186, 2.715, 2.496]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane004.geometry}
				material={materials.AlarmClock}
				position={[-5.622, 2.955, 2.492]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane005.geometry}
				material={materials["Emission.001"]}
				position={[-5.622, 2.955, 2.496]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane006.geometry}
				material={materials.AlarmClock}
				position={[-6.028, 2.658, 2.492]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane011.geometry}
				material={materials["Emission.002"]}
				position={[-6.028, 2.658, 2.496]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane012.geometry}
				material={materials.AlarmClock}
				position={[-6.405, 2.973, 2.492]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane013.geometry}
				material={materials["Emission.003"]}
				position={[-6.405, 2.973, 2.496]}
				rotation={[-Math.PI / 2, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane022.geometry}
				material={materials.MetalicBlack}
				position={[2.345, 6.044, 0.512]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
			/>
			<group
				position={[-5.225, 3.949, 1.967]}
				rotation={[0, Math.PI / 2, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane057.geometry}
					material={materials.Concrete}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane057_1.geometry}
					material={materials.AlarmClock}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane008.geometry}
				material={materials.KeyCaps}
				position={[-5.34, 5.531, 2.382]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.RUG.geometry}
				material={materials.Rug}
				position={[-5.328, 3.963, 0.865]}
				rotation={[0, 1.571, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.WheelMonitor001.geometry}
				material={materials.Screen}
				position={[-0.061, 1.7, -5.781]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.AboutMeScreen.geometry}
				material={materials.Screen}
				position={[-5.667, 0.047, 2.143]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.PCScreen.geometry}
				material={materials.Screen}
				position={[-5.341, 5.827, 2.317]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ExperienceScreen.geometry}
				material={materials.Screen}
				position={[2.33, 6.044, 0.512]}
				rotation={[Math.PI / 2, 0, -Math.PI / 2]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.flower_003.geometry}
				material={materials["Material.003"]}
				position={[-0.999, 2.777, 2.266]}
				rotation={[-0.001, 1.571, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.flower_011.geometry}
				material={materials["Material.003"]}
				position={[-0.598, 2.777, 2.26]}
				rotation={[0.001, 1.571, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.flower_035.geometry}
				material={materials["Material.003"]}
				position={[-0.27, 2.777, 2.373]}
				rotation={[0.002, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.prop_001.geometry}
				material={materials["Material.003"]}
				position={[-0.695, 0.531, 2.126]}
				rotation={[-0.003, 0, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.prop_028.geometry}
				material={materials["Material.003"]}
				position={[-0.823, 0.813, 2.295]}
				rotation={[3.139, 0, -3.141]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.electronics_018.geometry}
				material={materials["Material.003"]}
				position={[-0.154, 0.601, 2.117]}
				rotation={[3.139, 0, -0.002]}
			/>
			<group
				position={[2.317, 2.109, 0.245]}
				rotation={[0, Math.PI / 2, 0]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Mesh712.geometry}
					material={materials["Material.003"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Mesh712_1.geometry}
					material={materials["Material.012"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.office_chair_021.geometry}
				material={materials["Material.003"]}
				position={[-5.993, 0.047, -1.756]}
				rotation={[0, -0.061, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.closet_035.geometry}
				material={materials["Material.003"]}
				position={[1.939, 3.949, -2.191]}
				rotation={[3.141, -1.538, 3.141]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.office_table_013.geometry}
				material={materials["Material.003"]}
				position={[1.507, 3.97, 0.511]}
				rotation={[0.003, -1.558, 0.003]}
			/>
			<group
				position={[1.022, 6.36, 2.446]}
				rotation={[Math.PI, 0, Math.PI]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Mesh325.geometry}
					material={materials["Material.003"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Mesh325_1.geometry}
					material={materials["Material.012"]}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.training_item_001.geometry}
				material={materials["Material.003"]}
				position={[-5.276, 3.983, 0.775]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.musical_instrument_004.geometry}
				material={materials["Material.003"]}
				position={[-1.905, 3.95, 2.102]}
				rotation={[3.142, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.tv_wall_003.geometry}
				material={materials["Material.003"]}
				position={[-1.775, 3.97, -2.636]}
				rotation={[0, -0.026, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.ottoman_004.geometry}
				material={materials["Material.003"]}
				position={[-1.495, 3.949, -1.449]}
				rotation={[0, Math.PI / 2, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.lamp_024.geometry}
				material={materials["Material.003"]}
				position={[-4.079, 5.515, 2.196]}
				rotation={[Math.PI, -Math.PI / 6, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.electronics_029.geometry}
				material={materials["Material.003"]}
				position={[-5.274, 5.551, 1.698]}
				rotation={[Math.PI, 0, Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.picture_060.geometry}
				material={materials["Material.003"]}
				position={[-5.508, 6.891, 2.49]}
				rotation={[Math.PI, 0, Math.PI]}
			/>
		</group>
	);
}

useGLTF.preload("/models/Portfolio.glb");
