import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Jupiter({inputState}) {

    const jupiterRef = useRef(null);

    const jupiterNorm = require('../textures/Jupiter_Normal.png');
    const jupiterMap = require('../textures/Jupiter_Color.png');
    const jupiterMeta = require('../textures/Jupiter_Metallic.png');
    const jupiterRough = require('../textures/Jupiter_Roughness.png');

    const map = useTexture(jupiterMap);
    const normalMap = useTexture(jupiterNorm);
    const metalMap = useTexture(jupiterMeta);
    const roughMap = useTexture(jupiterRough);

    useFrame(() => {
        jupiterRef.current.rotation.y -= 0.005;
        jupiterRef.current.rotation.x += 0.0001;
    })

    const jupiterRate = 2.34;
    
  return (
    <>  
        <mesh ref={jupiterRef} scale={[.7,.7,.7]} position={[10, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
        </mesh>

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[10,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Jupiter</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * jupiterRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}
