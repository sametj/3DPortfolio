import React, { forwardRef } from "react";
import { motion } from "framer-motion-3d";
import Portfolio from "./Portfolio";
import {
	ContactShadows,
	Environment,
	MeshReflectorMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Experience(props, ref) {
	const { section } = props;
	useFrame(() => {
		console.log(section);
	});
	return (
		<>
			<ambientLight intensity={0.2} />
			<directionalLight
				castShadow
				intensity={4}
				position={[15, 6, 6]}
				shadow-mapSize={[512, 512]}
				shadow-normalBias={0.5}>
				<orthographicCamera
					attach='shadow-camera'
					left={-20}
					right={20}
					top={20}
					bottom={-20}
				/>
			</directionalLight>
			<ContactShadows
				rotation-x={Math.PI / 2}
				position={[0, -0.8, 0]}
				opacity={0.5}
				width={10}
				height={10}
				blur={1}
				far={0.8}
			/>
			<Environment preset='park' />
			<motion.group
				ref={ref}
				position={[-1, -10, -5]}
				scale={0.4}
				animate={{
					y: section === 0 ? -10 : -6,
					x: section === 0 ? -1 : -0.5,
				}}>
				<mesh position={[0, 20, -20]}>
					<planeGeometry args={[100, 29]} />
					<meshBasicMaterial color='blue' />
				</mesh>
				<Portfolio rotation={[0, -Math.PI * 1.1, 0]} />
				<mesh
					position-z={0}
					rotation-x={-Math.PI / 2}>
					<planeGeometry args={[50, 30]} />
					<MeshReflectorMaterial
						blur={[400, 100]}
						resolution={1024}
						mixBlur={1}
						mixStrength={15}
						depthScale={1}
						minDepthThreshold={0.85}
						color='#151515'
						metalness={0.6}
						roughness={1}
					/>
				</mesh>
			</motion.group>
		</>
	);
}

export default forwardRef(Experience);
