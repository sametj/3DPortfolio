import {
	CameraControls,
	Center,
	Html,
	OrbitControls,
	PresentationControls,
	Scroll,
	Stage,
	useScroll,
	ScrollControls,
	useHelper,
} from "@react-three/drei";
import React, { useLayoutEffect, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { forwardRef } from "react";
import { gsap } from "gsap";
import { useControls } from "leva";
import Avatar from "./components/Avatar";
import { Perf } from "r3f-perf";

import * as THREE from "three";
import Desk from "./components/Desk";

function App() {
	return (
		<>
			<Perf />
			<color
				attach='background'
				args={["#C0DEE5"]}
			/>
			<ambientLight intensity={1} />
			<Stage>
				<Center position={[0, 1.5, -1]}>
					<Desk />
				</Center>
			</Stage>
		</>
	);
}

export default forwardRef(App);
