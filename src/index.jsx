import "/index.css";
import ReactDOM from "react-dom/client";
import App from "/App";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { motion, MotionConfig } from "framer-motion";
import { Navigation } from "./components/UI/UI";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<>
		<App />
		<Navigation />
	</>
);
