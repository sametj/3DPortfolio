import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Camera(ref, tarX, tarY, tarZ, posX, posY, posZ) {
	return useFrame((state) => {
		const cameraPosition = new THREE.Vector3();
		cameraPosition.setFromMatrixPosition(ref.current.matrixWorld);

		cameraPosition.y += posY;
		cameraPosition.z += posZ;
		cameraPosition.x += posX;

		const cameraTarget = new THREE.Vector3();
		cameraTarget.setFromMatrixPosition(ref.current.matrixWorld);
		cameraTarget.y -= tarY;
		cameraTarget.z -= tarZ;
		cameraTarget.x -= tarX;

		state.camera.lookAt(cameraTarget);

		state.camera.position.lerp(cameraPosition, 0.1);
	});
}

export default Camera;
