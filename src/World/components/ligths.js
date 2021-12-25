import { DirectionalLight, AmbientLight, HemisphereLight } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createLights() {

    const mainLight = new DirectionalLight('white', 2);

    mainLight.position.set(10, 20, 20);
    // const ambientLight = new AmbientLight('white', 2);
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        3, // intensity
    );

    // light.tick = (delta) => {
    //     light.position.x += 1;
    // }

    return { mainLight, ambientLight };
}

export { createLights };