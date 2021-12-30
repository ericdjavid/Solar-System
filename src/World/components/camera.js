import { PerspectiveCamera } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
        40, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        500, // far clipping plane
    );


    camera.position.set(100, 30, 300);

    // move the camera back so we can view the scene

    camera.tick = (delta) => {
        camera.position.z -= 0.001;
    };

    return camera;
}

export { createCamera };