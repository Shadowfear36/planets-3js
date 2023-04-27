import React from 'react';

export default function Overlay({inputState, inputChange}) {

  return (
    <div className={"input-wrapper"}>   
            <label className="input-label">
              Enter Your Weight<br/>In Earth Pounds...
              <input type="number" value={inputState} onChange={inputChange} />
            </label>
            <button className="left">Left</button>
            <button className="right">Right</button>
    </div>

  );
};
