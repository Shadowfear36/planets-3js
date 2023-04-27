import './App.css';
import { useState, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { Stats, Stars, OrbitControls} from '@react-three/drei';
import Overlay from './components/Overlay';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Sun from './components/Sun';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Jupiter from './components/Jupiter';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Neptune from './components/Neptune';
import Pluto from './components/Pluto';

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
        <OrbitControls target={[15,0,0]}/>
        {/* STAGEING AND OBJECTS */}
        <ambientLight intensity={2} />
        <Stars radius={100} depth={20} count={3500} factor={3} saturation={0} fade speed={1} />

        <Sun inputState={inputState}/>
        <Mercury inputState={inputState}/>
        <Venus inputState={inputState}/>
        <Earth inputState={inputState}/>
        <Mars inputState={inputState}/>
        <Jupiter inputState={inputState}/>
        <Saturn  inputState={inputState}/>
        <Uranus inputState={inputState}/>
        <Neptune inputState={inputState}/>
        <Pluto inputState={inputState}/>
      </Canvas>
      <Overlay inputState={inputState} inputChange={inputChange}/>
    </div>
  );
}

export default App;
