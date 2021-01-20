import * as THREE from 'three';
import {app, appManager, scene, renderer, camera} from 'app';

// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create the PositionalAudio object (passing in the listener)
const sound = new THREE.PositionalAudio( listener );

// load a sound and set it as the PositionalAudio object's buffer
const audioLoader = new THREE.AudioLoader();

audioLoader.load( app.files['./sound.mp3'], function( buffer ) {
  sound.setBuffer( buffer );
  sound.setRefDistance( 3 );
  sound.setLoop( true );
  sound.setVolume( 1 );
  sound.play();
});

// create an object for the sound to play from
const sphere = new THREE.SphereBufferGeometry( 3, 3, 3 );
const material = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const mesh = new THREE.Mesh( sphere, material );
mesh.add( sound );

app.object.add( mesh );
