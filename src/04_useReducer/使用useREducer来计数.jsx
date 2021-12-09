import React,{useReducer} from 'react' ;

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		default:
			return state
	}
}

const App = () => {

	const [count,dispatch] = useReducer(reducer,0)
	return (
	  <div>
			<div>函数声明-{count}</div>
			<button onClick={() => dispatch({ type: 'increment' })}>+1</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
	  </div>
	)
}

export default App;