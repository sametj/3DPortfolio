import "/index.css";
import ReactDOM from "react-dom/client";
import App from "/App";
import { Canvas } from "@react-three/fiber";

import { ScrollControls } from "@react-three/drei";
import { Camera } from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const cameraSettings = {
	fov: 15,
	near: 0.1,
	far: 1000,
	position: [0, 1, 3],
};

root.render(
	<>
		<Canvas camera={cameraSettings}>
			<ScrollControls
				eps={1}
				pages={8}
				damping={0.1}
				maxSpeed={10}
				distance={1}
				style={{
					height: "100vh",
				}}>
				<App />
			</ScrollControls>
		</Canvas>
	</>
);
