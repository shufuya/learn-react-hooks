import React, { useEffect, useState } from 'react';

const Parent = () => {
  const [isShow, setShow] = useState(true);

  return (
    <div>
      <div onClick={() => setShow(false)}>父组件</div>
      {isShow ? <App /> : null}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('哈哈哈哈');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
  
      <div>子组件</div>
    </div>
  );
};

export default Parent;
