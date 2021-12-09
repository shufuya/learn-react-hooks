import React, { useEffect, useRef, useState } from 'react';

const App = () => {
	let myRef = useRef(20);

	const [count, setCount] = useState(0);

	useEffect(() => {
		myRef.current = setInterval(() => {
			console.log('-------------', count);
		}, 1000);
		console.log(myRef.current);
		return () => {
			clearInterval(myRef.current);
		};
	}, [count]);
	return (
		<div>
			<div>{count}</div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				哈哈哈
			</button>
		</div>
	);
};

export default App;
