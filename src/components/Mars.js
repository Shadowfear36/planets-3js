import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Mars({inputState}) {

    // const earthNorm = require('../textures/Earth_Normal.jpg');
    // const earthMap = require('../textures/Earth_Diffuse.jpg');

    // const map = useTexture(earthMap);
    // const normalMap = useTexture(earthNorm);

    const earthRef = useRef(null);

    useFrame(() => {
        earthRef.current.rotation.y -= 0.0015;
        earthRef.current.rotation.x -= 0.0015;
    })

    const marsRate = 0.38;
    
  return (
    <>  
        <mesh ref={earthRef} scale={[1,1,1]} position={[5, .8, 0]}>
            <sphereGeometry />
            {/* <meshStandardMaterial map={map} normalMap={normalMap}/> */}
            <meshStandardMaterial/>
        </mesh>

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[5,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Mars</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * marsRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}
