import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Mars({inputState}) {

    const marsRef = useRef(null);

    const marsNorm = require('../textures/Mars_Normal.png');
    const marsMap = require('../textures/Mars_Color.png');
    const marsMeta = require('../textures/Mars_Metallic.png');
    const marsRough = require('../textures/Mars_Roughness.png');

    const map = useTexture(marsMap);
    const normalMap = useTexture(marsNorm);
    const metalMap = useTexture(marsMeta);
    const roughMap = useTexture(marsRough);

    useFrame(() => {
        marsRef.current.rotation.y -= 0.0015;
        marsRef.current.rotation.x += 0.0025;
    })

    const marsRate = 0.38;
    
  return (
    <>  
        <mesh ref={marsRef} scale={[.7,.7,.7]} position={[5, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
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
