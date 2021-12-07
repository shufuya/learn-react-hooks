import React, { useState } from 'react';
import './index.css';
import { Slider } from 'antd';

const App = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [borderRadius, setBorderRadius] = useState(10);

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${borderRadius}px`,
  };
  return (
    <div className='container'>
      <h2>width</h2>
      <Slider
        style={{ marginLeft: 20, marginRight: 20 }}
        defaultValue={width}
        min={0}
        max={300}
        onChange={(val) => {
          setWidth(val);
        }}
      />
      <h2>height</h2>
      <Slider
        style={{ marginLeft: 20, marginRight: 20 }}
        defaultValue={height}
        min={0}
        max={300}
        onChange={(val) => {
          setHeight(val);
        }}
      />
      <h2>borderRadius</h2>
      <Slider
        style={{ marginLeft: 20, marginRight: 20 }}
        defaultValue={borderRadius}
        min={0}
        max={100}
        onChange={(val) => {
          setBorderRadius(val);
        }}
      />
      <div style={style} className='el'></div>
    </div>
  );
};

export default App;
