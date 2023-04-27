import React, {useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useTexture } from '@react-three/drei';

export default function Neptune({inputState}) {

    const neptuneRef = useRef(null);

    const neptuneNorm = require('../textures/Neptune_Normal.png');
    const neptuneMap = require('../textures/Neptune_Color.png');
    const neptuneMeta = require('../textures/Neptune_Metallic.png');
    const neptuneRough = require('../textures/Neptune_Roughness.png');

    const map = useTexture(neptuneMap);
    const normalMap = useTexture(neptuneNorm);
    const metalMap = useTexture(neptuneMeta);
    const roughMap = useTexture(neptuneRough);

    useFrame(() => {
        neptuneRef.current.rotation.y += 0.0035;
        neptuneRef.current.rotation.x += 0.0005;
    })

    const neptuneRate = .91;
    
  return (
    <>  
        <mesh ref={neptuneRef} scale={[.7,.7,.7]} position={[25, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
        </mesh>

        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[25,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Neptune</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * neptuneRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}