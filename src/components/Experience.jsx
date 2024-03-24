import React, { useRef, forwardRef, useEffect } from "react";
import { motion } from "framer-motion-3d";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import LandingRoom from "./LandingRoom";
import { Scroll, useScroll } from "@react-three/drei";
import AboutMe from "./AboutMe";

function Experience(props) {
	const { section } = props;

	return (
		<>
			<group
				position={[0, -2, 0]}
				scale={0.4}>
				<LandingRoom
					rotation={[0, Math.PI / 5, 0]}
					position-z={-12}
					position-x={2}
				/>
				<Environment preset='apartment' />
				<mesh
					position-z={-12}
					rotation-x={-Math.PI / 2}>
					<planeGeometry args={[50, 30]} />
					<MeshReflectorMaterial
						blur={[400, 100]}
						resolution={1024}
						mixBlur={1}
						mixStrength={15}
						depthScale={0.2}
						minDepthThreshold={0.1}
						color='#151515'
						metalness={0.6}
						roughness={1}
					/>
				</mesh>
			</group>
			<group
				position={[-2, -5.5, 0]}
				rotation={[0, 0, 0]}
				scale={[1, 1, 1]}>
				<Environment preset='warehouse' />
				<AboutMe rotation={[0, Math.PI / 4, 0]} />
				<mesh
					position-z={-5}
					rotation-x={-Math.PI / 2}>
					<planeGeometry args={[20, 20]} />
					<MeshReflectorMaterial
						blur={[400, 100]}
						resolution={1024}
						mixBlur={1}
						mixStrength={15}
						depthScale={0.2}
						minDepthThreshold={0.1}
						color='#151515'
						metalness={0.6}
						roughness={1}
					/>
				</mesh>
			</group>
		</>
	);
}

export default Experience;
