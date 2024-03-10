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
	Text,
	MeshReflectorMaterial,
} from "@react-three/drei";
import React, { useLayoutEffect, useRef, forwardRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";

import { gsap } from "gsap";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import Desk from "./components/Desk";
import MyAvatar from "./components/MyAvatar";

export default function App() {
	const [section, setSection] = useState(0);
	const introSection = useRef();
	const aboutSection = useRef();
	const scroll = useScroll();

	console.log(scroll.el);

	return (
		<>
			<Perf />
			<color
				attach='background'
				args={["#2c4767"]}
			/>
			<fog
				attach='fog'
				args={["orange", 0, 100]}
			/>

			<Scroll>
				<group ref={introSection}>
					<Text
						font={"/fonts/kdam-thmor-pro-v4-latin-regular.woff"}
						fontSize={0.2}
						textAlign='center'
						anchorX={"center"}
						outlineWidth={0.01}
						color={"OrangeRed"}
						outlineColor={"black"}
						outlineOffsetY={0.01}
						outlineBlur={0.02}
						outlineOpacity={0.3}
						position={[0, 1.9, 0.5]}>
						Hello!, Welcome to my portfolio.
					</Text>

					<Stage
						shadows={"contact"}
						preset={"portrait"}
						adjustCamera={true}
						environment={"city"}
						intensity={2}>
						<Desk
							rotation-y={-Math.PI / 2}
							position-z={5}
							position-y={0}
						/>
					</Stage>
				</group>

				<group position={[0, -5, 0]}>
					<MyAvatar scale={1} />
				</group>
			</Scroll>
		</>
	);
}
