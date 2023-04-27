import React, {useRef} from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, useTexture, useGLTF } from '@react-three/drei';

export default function Saturn({inputState}) {

    const saturnRef = useRef(null);
    const saturnModel = require('../models/Saturn2.glb');

    const fbxSaturn = useLoader(GLTFLoader, saturnModel)
    // const jupiterNorm = require('../textures/Jupiter_Normal.png');
    // const jupiterMap = require('../textures/Jupiter_Color.png');
    // const jupiterMeta = require('../textures/Jupiter_Metallic.png');
    // const jupiterRough = require('../textures/Jupiter_Roughness.png');

    // const map = useTexture(jupiterMap);
    // const normalMap = useTexture(jupiterNorm);
    // const metalMap = useTexture(jupiterMeta);
    // const roughMap = useTexture(jupiterRough);

    // useFrame(() => {
    //     saturnRef.current.rotation.y -= 0.0015;
    //     saturnRef.current.rotation.x += 0.0005;
    // })

    console.log(fbxSaturn);

    const saturnRate = 1.06;
    
  return (
    <>  
        {/* <mesh ref={saturnRef} scale={[.7,.7,.7]} position={[15, .8, 0]}>
            <sphereGeometry />
            <meshStandardMaterial  map={map} rough={1} normalMap={normalMap} metalnessMap={metalMap} roughnessMap={roughMap} emmissive={1}/>
        </mesh> */}
            <primitive object={fbxSaturn.scene}  position={[15, .8, 0]}/>
        <Html
        as='div'
        wrapperClass={"planet-container"}
        transform
        scale={[.5,.5,.5]}
        position={[15,-1,0]}
        >  
            <div className="planet-wrapper">
                <h1>Saturn</h1>
                <h4>Your Weight On This Planet:</h4>
                <p>{inputState * saturnRate}lbs</p> 
            </div>  
        </Html>
    </>
  )
}