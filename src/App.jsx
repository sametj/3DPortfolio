import { Scroll } from "@react-three/drei";
import React, { useContext, useState, createContext } from "react";
import { Perf } from "r3f-perf";
import { UI } from "./components/UI/UI";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

export const VideoContext = createContext();

const cameraSettings = {
	fov: 15,
	near: 0.1,
	far: 1000,
	position: [0, 3, 14],
};

export default function App() {
	const [video, setVideo] = useState("/videos/test1.mp4");

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
						<VideoContext.Provider value={setVideo}>
							<UI />
						</VideoContext.Provider>
					</Scroll>
					<Scroll>
						<VideoContext.Provider value={video}>
							<Experience />
						</VideoContext.Provider>
					</Scroll>
				</ScrollControls>
			</Canvas>
		</>
	);
}
