import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Uranus({inputState}) {

    const uranusRef = useRef(null);

    const uranusNorm = require('../textures/Uranus_Normal.png');
    const uranusMap = require('../textures/Uranus_Color.png');
    const uranusMeta = require('../textures/Uranus_Metallic.png');
    const uranusRough = require('../textures/Uranus_Roughness.png');

    const map = useTexture(uranusMap);
    const normalMap = useTexture(uranusNorm);
    const metalMap = useTexture(uranusMeta);
    const roughMap = useTexture(uranusRough);

    useFrame(() => {
        uranusRef.current.rotation.y += 0.0025;
        uranusRef.current.rotation.x -= 0.0009;
    })

    const uranusRate = .92;
    
  return (
    <>  
        <mesh ref={uranusRef} scale={[.7,.7,.7]} position={[20, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
        </mesh>

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[20,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Uranus</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * uranusRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}