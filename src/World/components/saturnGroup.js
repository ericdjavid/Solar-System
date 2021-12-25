import {
    SphereBufferGeometry,
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
} from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createMeshGroup() {
    // a group holds other objects
    // but cannot be seen itself
    const group = new Group();
    const geometry = new SphereBufferGeometry(0.25, 16, 16);

    const material = new MeshStandardMaterial({
        color: 'indigo',
    });

    const protoSphere = new Mesh(geometry, material);

    // add the sphere to the group
    group.add(protoSphere);

    for (let i = 0; i < 1; i += 0.05) {
        const sphere = protoSphere.clone();

        // position the spheres on around a circle
        sphere.scale.multiplyScalar(0.4);
        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.z = Math.sin(2 * Math.PI * i);
        // sphere.position.y = 0.1;

        group.add(sphere);
    }

    group.tick = (delta) => {
        group.rotation.y -= delta * MathUtils.degToRad(30);
    };

    return group;
}

export { createMeshGroup };