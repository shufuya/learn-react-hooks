import React, { useRef } from 'react';

const App = () => {
  const myRef = useRef();
  return (
    <div>
      <div>函数声明</div>
      <input ref={myRef} type='text'></input>
      <button
        onClick={() => {
          console.log(myRef.current.value);
        }}
      >
        点击获取
      </button>
    </div>
  );
};

export default App;
