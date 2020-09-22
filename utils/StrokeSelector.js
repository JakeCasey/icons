import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

let StrokeSelector = ({ color, handleChange }) => {
  let [displayColorPicker, updateDisplayColorPicker] = useState(false);

  let handleClick = () => {
    updateDisplayColorPicker(!displayColorPicker);
  };
  let handleClose = () => {
    updateDisplayColorPicker(false);
  };

  return (
    <div>
      <div
        className="inline-block p-1 bg-white rounded shadow cursor-pointer"
        onClick={handleClick}
      >
        <div style={{ background: color }} className="w-4 h-2" />
      </div>
      {displayColorPicker ? (
        <>
          <div className="absolute inset-0" onClick={handleClose} />
          <div style={{ marginLeft: -200 }} className="absolute z-10">
            <SketchPicker color={color} onChange={handleChange} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default StrokeSelector;
