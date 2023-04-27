import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';

export default function Sun({inputState}) {
    const sunModel = require('../models/Sun.glb');
    const sun = useGLTF(sunModel)

    console.log(sun);

    const sunRef = useRef(null);

    // useFrame(() => {
    //     sunRef.current.rotation.y -= 0.0015;
    //     sunRef.current.rotation.x -= 0.0015;
    // })
    
  return (
    <>  
        <primitive object={sun.scene} position={[-5,-4,0]}/>
        

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[-5,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Sun</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState}lbs</p> 
            </div>  
        </Html>
    </>
  );
}
