import { DirectionalLight, AmbientLight, HemisphereLight } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createLights() {

    const light = new DirectionalLight('white', 10);

    light.position.set(10, 10, 10);
    // const ambientLight = new AmbientLight('white', 2);
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        6, // intensity
    );

    light.tick = (delta) => {
        light.position.x += 1;
    }
    return { light, ambientLight };
}

export { createLights };