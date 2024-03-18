import "/index.css";
import ReactDOM from "react-dom/client";
import App from "/App";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { motion, MotionConfig } from "framer-motion";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const cameraSettings = {
	fov: 45,
	near: 0.1,
	far: 1000,
	position: [0, 4, 14],
};

root.render(
	<>
		<MotionConfig
			transition={{
				type: "spring",
				mass: 4,
				stiffness: 500,
				damping: 80,
				restDelta: 0.0001,
			}}>
			<Canvas
				shadows
				camera={cameraSettings}>
				<ScrollControls
					pages={2}
					damping={0.1}>
					<App />
				</ScrollControls>
			</Canvas>
		</MotionConfig>
	</>
);
