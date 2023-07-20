import React from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function Overlay({inputState, inputChange, cameraPos, cameraChange}) {

  const handleLeft = () => {
    let newPos = cameraPos[0] - 5;
    if (newPos == -15){
      cameraChange([newPos, 3, 0])
    }
    else if(newPos > -16){
      console.log("left " + newPos)
      cameraChange([newPos, 0, 0])
    }
    else{
      console.log("max left")
    }
  }

  const handleRight = () => {
    let newPos = cameraPos[0] + 5;
    if(newPos <= 30){
      console.log("right " + newPos)
      cameraChange([newPos, 0, 0])
    }
    else{
      console.log("max left")
    }
  }
  return (
    <div className={"input-wrapper"}>   
            <label className="input-label">
              Enter Your Weight<br/>In Earth Pounds...
              <input type="number" value={inputState} onChange={inputChange} />
            </label>
            <button onClick={()=> handleLeft()}className="left"><BsFillArrowLeftCircleFill size={50}/></button>
            <button onClick={()=> handleRight()}className="right"><BsFillArrowRightCircleFill size={50}/></button>
    </div>

  );
};
