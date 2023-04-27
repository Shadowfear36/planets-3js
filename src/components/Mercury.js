import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Mercury({inputState}) {

    const mercuryRef = useRef(null);

    const mercuryNorm = require('../textures/Mercury_Normal.png');
    const mercuryMap = require('../textures/Mercury_Color.png');
    const mercuryMeta = require('../textures/Mercury_Metallic.png');
    const mercuryRough = require('../textures/Mercury_Roughness.png');

    const map = useTexture(mercuryMap);
    const normalMap = useTexture(mercuryNorm);
    const metalMap = useTexture(mercuryMeta);
    const roughMap = useTexture(mercuryRough);

    useFrame(() => {
        mercuryRef.current.rotation.y -= 0.0015;
        mercuryRef.current.rotation.x += 0.0005;
    })

    const mercuryRate = 0.38;
    
  return (
    <>  
        <mesh ref={mercuryRef} scale={[.7,.7,.7]} position={[-10, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
        </mesh>

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[-10,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Mercury</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * mercuryRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}
