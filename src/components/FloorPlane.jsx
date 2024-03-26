import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

function FloorPlane() {
	return (
		<>
			<mesh
				position-z={-12}
				rotation-x={-Math.PI / 2}>
				<planeGeometry args={[50, 30]} />
				<meshStandardMaterial color='#151515' />
				{/* <MeshReflectorMaterial
					blur={[400, 100]}
					resolution={1024}
					mixBlur={1}
					mixStrength={15}
					depthScale={0.2}
					minDepthThreshold={0.1}
					color='#151515'
					metalness={0.6}
					roughness={1}
				/> */}
			</mesh>
		</>
	);
}

export default FloorPlane;
