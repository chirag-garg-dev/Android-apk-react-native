import React,{useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const initialState = 0;

const reducer = (state, action) => {
	if (action.type == "INCREMENT") {
		return state + 1;
	}
	else if (action.type == "Decrement") {
		return state - 1;	
	}
	return state;
} 

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<View>
			<Text>{state}</Text>
			<Button title="Increment" onPress={() => dispatch({type: "INCREMENT"})} />
			<Button title="Decrement" onPress={() => dispatch({type: "Decrement"})} />
		</View>
		)
}

export default UseReducer;

