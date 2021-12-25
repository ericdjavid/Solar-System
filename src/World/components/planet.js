import { MathUtils, MeshStandardMaterial, Mesh, TextureLoader, SphereBufferGeometry } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createPlanet(name, radius, distance, revolution, texture) {

    const geo = new SphereBufferGeometry(radius, 20, 20);
    const material = new TextureLoader().load(texture);
    // console.log(texture);
    const okMaterial = new MeshStandardMaterial({ map: material });

    const mesh = new Mesh(geo, okMaterial);
    mesh.position.x += distance;

    const radiansPerSecond = MathUtils.degToRad(5);
    mesh.tick = (delta) => {
        // Sun.rotation.z += radiansPerSecond * delta;
        // Sun.rotation.x += radiansPerSecond * delta;
        mesh.rotation.y -= radiansPerSecond * delta;
    };

    return (mesh);
}

export { createPlanet }