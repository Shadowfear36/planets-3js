import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Venus({inputState}) {

    const venusRef = useRef(null);

    const venusNorm = require('../textures/Venus_Normal.png');
    const venusMap = require('../textures/Venus_Color.png');
    const venusMeta = require('../textures/Venus_Metallic.png');
    const venusRough = require('../textures/Venus_Roughness.png');

    const map = useTexture(venusMap);
    const normalMap = useTexture(venusNorm);
    const metalMap = useTexture(venusMeta);
    const roughMap = useTexture(venusRough);

    useFrame(() => {
        venusRef.current.rotation.y -= 0.0015;
        venusRef.current.rotation.x += 0.0005;
    })

    const venusRate = .91;
    
  return (
    <>  
        <mesh ref={venusRef} scale={[.7,.7,.7]} position={[-5, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
        </mesh>

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[-5,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Venus</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * venusRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}