import "/index.css";
import ReactDOM from "react-dom/client";
import App from "/App";
import { Canvas } from "@react-three/fiber";

import { ScrollControls } from "@react-three/drei";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const cameraSettings = {
	fov: 45,
	near: 0.1,
	far: 2000,
	position: [0, 2, 8],
};

root.render(
	<>
		<Canvas
			dpr={[1, 2]}
			camera={cameraSettings}>
			<App />
		</Canvas>
	</>
);
