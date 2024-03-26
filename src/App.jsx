import { Scroll, useScroll } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";
import { Perf } from "r3f-perf";
import { UI } from "./components/UI/UI";
import Experience from "./components/Experience";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { motion, MotionConfig } from "framer-motion";
import { gsap } from "gsap";
import { Html } from "@react-three/drei";

const cameraSettings = {
	fov: 15,
	near: 0.1,
	far: 1000,
	position: [0, 3, 14],
};

export default function App() {
	return (
		<>
			<Canvas
				dpr={[1, 2]}
				shadows
				camera={cameraSettings}>
				<color
					attach='background'
					args={["#9A85E7"]}
				/>
				<Perf />
				<fog
					attach='fog'
					args={["#9A85E7", 12, 35]}
				/>
				<ScrollControls
					pages={4}
					damping={1}>
					<Scroll html>
						<UI />
					</Scroll>
					<Scroll>
						<Experience />
					</Scroll>
				</ScrollControls>
			</Canvas>
		</>
	);
}
