import React from 'react';
import * as THREE from 'three';
import WebGL from "three/addons/capabilities/WebGL";

export default function FirstTry() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight , 0.1, 500 );
    const warning = WebGL.getWebGLErrorMessage();

    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize( window.innerWidth/2 , window.innerHeight/2  );
    document.body.appendChild( renderer.domElement );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const edgesGeometry = new THREE.EdgesGeometry( geometry );
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.LineSegments( edgesGeometry, material );

    scene.add( cube );

    // camera.position.y = -2;
    camera.position.z = 2;

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    }
    return (
        <>
            { WebGL.isWebGLAvailable() ? animate() : warning }
        </>
    )
}
