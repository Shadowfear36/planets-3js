import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Stats, Stars, OrbitControls} from '@react-three/drei';
import Overlay from './components/Overlay';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Sun from './components/Sun';

function App() {

  const [inputState, setInputState] = useState(0);

  
  const inputChange = (e) => {
    setInputState(e.target.value)
  }


  
  return (
    <div className="App">
      <Canvas className="canvas">
        {/* TOOLS FOR DEVELOPMENT */}
        {/* <Stats/> */}
        <axesHelper args={[5]}/>
        <OrbitControls/>
        {/* STAGEING AND OBJECTS */}
        <ambientLight intensity={2} />
        <Stars radius={100} depth={20} count={3500} factor={3} saturation={0} fade speed={1} />

        <Earth inputState={inputState}/>
        <Mars inputState={inputState}/>
        <Sun inputState={inputState}/>
      </Canvas>
      <Overlay inputState={inputState} inputChange={inputChange}/>
    </div>
  );
}

export default App;
