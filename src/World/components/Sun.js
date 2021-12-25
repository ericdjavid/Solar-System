import {
    SphereBufferGeometry,
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    MeshBasicMaterial,
    TextureLoader
} from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createSun() {
    // a group holds other objects
    // but cannot be seen itself

    // const group = new Group();
    const geometry = new SphereBufferGeometry(4, 30, 30);

    const material = new TextureLoader().load('assets/textures/sun.jpeg');
    const sunMaterial = new MeshStandardMaterial({ map: material });

    const Sun = new Mesh(geometry, sunMaterial);

    Sun.position.set(0, 0, 0);
    // add the sphere to the group
    // group.add(Sun);
    const radiansPerSecond = MathUtils.degToRad(5);
    Sun.tick = (delta) => {
        // Sun.rotation.z += radiansPerSecond * delta;
        // Sun.rotation.x += radiansPerSecond * delta;
        Sun.rotation.y -= radiansPerSecond * delta;
    };

    return Sun;
}

export { createSun };