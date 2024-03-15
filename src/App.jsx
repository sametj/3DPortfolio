import { CameraControls, Scroll, useScroll } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

import { gsap } from "gsap";

import { Perf } from "r3f-perf";
import { UI } from "./components/UI/UI";
import Experience from "./components/Experience";

export default function App() {
	const [section, setSection] = useState(0);
	const cameraRef = useRef();
	const experienceRef = useRef();
	const data = useScroll();
	const lastScroll = useRef(0);
	const isAnimating = useRef(false);
	data.fill.classList.add("top-0");
	data.fill.classList.add("absolute");

	useEffect(() => {
		gsap.to(data.el, {
			duration: 1,
			scrollTop: section * data.el.scrollHeight,
			onStart: () => (isAnimating.current = true),
			onComplete: () => (isAnimating.current = false),
		});
	}, [section]);

	useFrame(() => {
		data.scroll.current > 0.5 ? setSection(1) : setSection(0);
		if (isAnimating) {
			lastScroll.current = data.scroll.current;
			return;
		}
		const current = Math.floor(data.scroll.current * data.pages);
		if (data.scroll.current > lastScroll.current && current === 0) {
			setSection(1);
		}
		if (
			data.scroll.current < lastScroll.current &&
			data.scroll.current < 1 / (data.pages - 1)
		) {
			setSection(0);
		}
		lastScroll.current = data.scroll.current;
	});

	return (
		<>
			<Perf />
			<CameraControls
				ref={cameraRef}
				enabled={false}
			/>
			<color
				attach='background'
				args={["#191920"]}
			/>
			<fog
				attach='fog'
				args={["#191920", 20, 42]}
			/>

			<Scroll html>
				<UI />
			</Scroll>
			<Scroll>
				<Experience
					ref={experienceRef}
					section={section}
				/>
			</Scroll>
		</>
	);
}
