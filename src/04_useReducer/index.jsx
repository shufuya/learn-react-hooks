import React, { useReducer } from 'react';


let initValue = {count : 4}

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 }
		case 'decrement':
			return { count: state.count + 1 }
		default:
			return state
	}
}

const App = () => {

  const [state,dispatch]=	useReducer(reducer,initValue)
	return (
	  <div>
			<div>state : {state.count}</div>
			<button onClick={() => dispatch({ type: 'increment' })}>+1</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
	  </div>
	)
}

export default App;