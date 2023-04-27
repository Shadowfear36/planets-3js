import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Pluto({inputState}) {

    const plutoRef = useRef(null);

    const plutoNorm = require('../textures/Pluto_Normal.png');
    const plutoMap = require('../textures/Pluto_Color.png');
    const plutoMeta = require('../textures/Pluto_Metallic.png');
    const plutoRough = require('../textures/Pluto_Roughness.png');

    const map = useTexture(plutoMap);
    const normalMap = useTexture(plutoNorm);
    const metalMap = useTexture(plutoMeta);
    const roughMap = useTexture(plutoRough);

    useFrame(() => {
        plutoRef.current.rotation.y -= 0.0015;
        plutoRef.current.rotation.x += 0.0005;
    })

    const plutoRate = .06;
    
  return (
    <>  
        <mesh ref={plutoRef} scale={[.7,.7,.7]} position={[30, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
        </mesh>

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[30,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Pluto</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * plutoRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}