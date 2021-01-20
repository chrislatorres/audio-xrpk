import * as THREE from 'three';
import {scene, renderer, camera} from 'app';

// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create the PositionalAudio object (passing in the listener)
const sound = new THREE.PositionalAudio( listener );

// load a sound and set it as the PositionalAudio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sound.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setRefDistance( 20 );
	sound.play();
});

// create an object for the sound to play from
const sphere = new THREE.SphereBufferGeometry( 20, 32, 16 );
const material = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const mesh = new THREE.Mesh( sphere, material );
scene.add( mesh );

// finally add the sound to the mesh
mesh.add( sound );
