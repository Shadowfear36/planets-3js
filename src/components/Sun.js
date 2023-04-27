import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useGLTF, useTexture } from '@react-three/drei';

export default function Sun({inputState}) {
    // const sunModel = require('../models/Sun.glb');
    // const sun = useGLTF(sunModel)

    const sunNorm = require('../textures/Sun_Normal.png');
    const sunMap = require('../textures/Sun_Color.png');
    const sunMeta = require('../textures/Sun_Metallic.png');
    const sunRough = require('../textures/Sun_Roughness.png');
    const sunEmmission = require('../textures/Sun_Emission.png');

    const map = useTexture(sunMap);
    const normalMap = useTexture(sunNorm);
    const metalMap = useTexture(sunMeta);
    const roughMap = useTexture(sunRough);
    const emmitMap =  useTexture(sunEmmission);

    const sunRate = 27.01;


    const sunRef = useRef(null);

    useFrame(() => {
        sunRef.current.rotation.y += 0.0005;
        sunRef.current.rotation.x -= 0.0005;
    })
    
  return (
    <>  
        <mesh ref={sunRef} scale={[4,4,4]} position={[-15, 4, 0]}>
            {/* <primitive object={sun.scene} position={[-5,-4,0]}/> */}
            <sphereGeometry />
            <meshStandardMaterial  map={map} normalMap={normalMap} metalnessMap={metalMap} rough={1} roughnessMap={roughMap} emmissiveMap={emmitMap}/>
        </mesh>


        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[-15,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Sun</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * sunRate}lbs</p> 
            </div>  
        </Html>
    </>
  );
}
