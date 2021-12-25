import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/ligths.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/loops.js';
import { createControls } from './systems/controls.js';
import { createMeshGroup } from './components/saturnGroup.js';
import { createSun } from './components/Sun.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();

        container.append(renderer.domElement);
        // call loop frame for animation
        loop = new Loop(camera, scene, renderer);

        const controls = createControls(camera, renderer.domElement);
        // const cube = createCube(-7);
        // const cube2 = createCube(0);
        // const cube3 = createCube(7);
        const { ambientLight, mainLight } = createLights();
        // controls.target.copy(cube.position);
        // const saturnGroup = createMeshGroup();
        const sun = createSun();
        // add meshes to updatable list
        loop.updatables.push(sun, camera);
        loop.updatables.push(controls);
        scene.add(ambientLight, sun, mainLight);
        // console.log(scene.children);

        // resize the elements of the world
        const resizer = new Resizer(container, camera, renderer);
        // No need to resize the map on screen resize as we producing an animation of 60 frames per seconds
        // resizer.onResize = () => {
        //     this.render();
        // };
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