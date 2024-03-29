import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/ligths.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/loops.js';
import { createControls } from './systems/controls.js';
import { createMeshGroup } from './components/saturnGroup.js';
import { createSun } from './components/Sun.js';
import { createPlanet } from './components/planet.js';

import {
    CubeTextureLoader,
    SphereBufferGeometry,
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
} from 'https://unpkg.com/three@0.126.1/build/three.module.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();

        const loader = new CubeTextureLoader();
        const texture = loader.load([
            './resources/corona_ft.png',
            './resources/corona_bk.png',
            './resources/corona_up.png',
            './resources/corona_dn.png',
            './resources/corona_rt.png',
            './resources/corona_lf.png',
        ]);
        scene.background = texture;

        container.append(renderer.domElement);
        // call loop frame for animation
        loop = new Loop(camera, scene, renderer);



        controls = createControls(camera, renderer.domElement);
        const { mainLight, ambientLight } = createLights();
        const saturnGroup = createMeshGroup();
        const sun = createSun();

        // const mercury = {};
        // const venus = {};
        // const earth = {};
        // const solarSystem = [
        //     [mercury, "mercury", 5, 8, 2, './assets/textures/2k_mercury.jpg'],
        //     [venus, "mercury2", 20, 15, 2, './assets/textures/2k_mercury.jpg'],
        //     [earth, "mercury3", 30, 20, 2, './assets/textures/2k_mercury.jpg']
        // ];

        // console.log(solarSystem);

        // add meshes to updatable list
        // let i = 0;
        // let j = 0;
        // for (let i = 0; i < solarSystem.length; i++) {

        //     console.log(solarSystem[i]);
        //     solarSystem[i][0] = createPlanet([i][1], [i][2], [i][3], [i][4], './assets/textures/2k_mercury.jpg');
        //     console.log([i][0]);
        //     loop.updatables.push();
        //     scene.add(planet);
        // }
        const mercury = createPlanet("mercury", 0.3, 48, 2, "./assets/textures/2k_mercury.jpg", 4);
        const venus = createPlanet("venus", 0.9, 66, 2, "./assets/textures/venus.jpg", 2);
        const earth = createPlanet("earth", 1, 86, 2, "./assets/textures/earth.jpg", 1);
        const mars = createPlanet("mars", 0.5, 106, 2, "./assets/textures/mars.jpg", 0.5);
        const jupiter = createPlanet("jupiter", 11, 120, 2, "./assets/textures/jupiter.jpg", 0.09);
        const saturne = createPlanet("saturne", 9, 150, 2, "./assets/textures/saturn.jpg", 0.033);
        const uranus = createPlanet("uranus", 4, 180, 2, "./assets/textures/uranus.jpg", 0.011);

        // const group = new Group();
        // group.add(sun, mercury, venus, earth, mars, jupiter, saturne, uranus);
        // group.tick = (delta) => {
        //     group.rotation.y -= delta * MathUtils.degToRad(20);
        // };

        // loop.updatables.push(group);
        loop.updatables.push(sun, saturnGroup, camera, mercury, venus, earth, mars, jupiter, saturne, uranus);
        loop.updatables.push(controls);
        scene.add(sun, saturnGroup, ambientLight, mercury, venus, earth, mars, jupiter, saturne, uranus);

        // resize the elements of the world
        const resizer = new Resizer(container, camera, renderer);
        // No need to resize the map on screen resize as we producing an animation of 60 frames per seconds
        // resizer.onResize = () => {
        //     this.render();
        // };
        window.addEventListener('click', () => {
            console.log(earth);
            controls.target.copy(earth.children[0].position)
        })
    }
    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }

    start() {
        loop.start()
    }

    stop() {
        loop.stop()
    }
}

export { World }