import { MathUtils, MeshStandardMaterial, Mesh, TextureLoader, SphereBufferGeometry } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createPlanet(name, radius, distance, revolution, texture) {

    const geo = new SphereBufferGeometry(radius, 20, 20);
    const material = new TextureLoader().load(texture);
    // console.log(texture);
    const okMaterial = new MeshStandardMaterial({ map: material });

    const mesh = new Mesh(geo, okMaterial);
    // mesh.position.x = Math.cos(2 * Math.PI * 0.5) + distance;
    // mesh.position.z = Math.sin(2 * Math.PI * 0.5) + distance;
    mesh.position.x += distance;

    const radiansPerSecond = MathUtils.degToRad(5);
    mesh.tick = (delta) => {

        // mesh.rotation.y -= delta * MathUtils.degToRad(60);
        // mesh.rotation.z -= delta * MathUtils.degToRad(60);
        // var time = Date.now() * 0.0005;
        // mesh.position.x = Math.cos(2 * Math.PI * distance);
        // mesh.position.y = Math.cos(2 * Math.PI * distance);
        // mesh.position.z = Math.cos(time * 8) * 4;
    };

    return (mesh);
}

export { createPlanet }