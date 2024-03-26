import React, {
	useRef,
	forwardRef,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import { motion } from "framer-motion-3d";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import LandingRoom from "./LandingRoom";
import { Scroll, useScroll } from "@react-three/drei";
import AboutMe from "./AboutMe";
import ProjectsPc from "./ProjectsPC";
import FloorPlane from "./FloorPlane";

function Experience(props) {
	const [section, setSection] = useState(0);
	document.querySelector("#root").classList.add("touch-none");

	const camera = useThree((state) => state.camera);
	window.addEventListener("mousemove", (e) => {
		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;
		gsap.to(camera.position, {
			x: -x * 0.1,

			duration: 1,
		});
	});

	window.addEventListener("scrollY", (e) => {
		const scroll = window.scrollY;
	});

	return (
		<>
			<Environment preset='warehouse' />
			{/* Landing Room */}
			<group position={[0, -0.95, 0]}>
				<LandingRoom
					rotation={[0, Math.PI / 5, 0]}
					scale={0.3}
					position-z={-2}
					position-x={1}
					position-y={0.1}
				/>
				<FloorPlane />
			</group>

			{/* About Me */}
			<group
				position={[-2, -4.8, 0]}
				rotation={[0, 0, 0]}
				scale={[1, 1, 1]}>
				<AboutMe rotation={[0, Math.PI / 8, 0]} />
				<FloorPlane />
			</group>

			{/* Projects */}
			<group
				position={[-1, -8.7, 0]}
				scale={0.7}>
				<ProjectsPc
					scale={1}
					position-x={0}
					position-y={1}
				/>
				<FloorPlane />
			</group>
		</>
	);
}

export default Experience;
