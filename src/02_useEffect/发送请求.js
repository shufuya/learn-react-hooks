import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log('useEffect正在执行');
  //     }, 1000);
  //     // document.title = `您点击了${count}次`;
  //   }, []);
  //发送请求
  useEffect(() => {
    axios
      .get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [count, setCount] = useState(5);

  return (
    <div>
      <div>函数声明--{count}</div>
      <button onClick={() => setCount(count + 1)}>count+1</button>
    </div>
  );
};

export default App;
