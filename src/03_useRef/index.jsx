import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import anime from 'animejs';

const App = () => {
	const elementRef = useRef();
	//判断动画是否开启
	const [isAnimate1, setAnimate1] = useState(false);
	const [isAnimate2, setAnimate2] = useState(false);

	useEffect(() => {
		isAnimate1 && anima1();
	}, [isAnimate1]);

	useEffect(() => {
		isAnimate2 && anima2();
	}, [isAnimate2]);

	function anima1() {
		anime({
			targets: elementRef.current,
			translateX: 200,
			backgroundColor: '#ff8888',
			borderRadius: ['0%', '50%'],
			complete: () => {
				setAnimate1(false);
				setAnimate2(true);
			},
		});
	}
	function anima2() {
		anime({
			targets: elementRef.current,
			translateX: 0,
			backgroundColor: '#f00',
			borderRadius: ['50%', '0%'],
			complete: () => {
				setAnimate2(false);
				console.log('完成第二个动画啦');
			},
		});
	}
	function clickHandler() {
		setAnimate1(true);
	}

	return (
		<div className='ref_container' onClick={clickHandler}>
			<div className='ref_el' ref={elementRef}></div>
		</div>
	);
};

export default App;
