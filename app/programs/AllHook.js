import React, {useEffect, useState, useCallback} from 'react';
import {View,Button,Text} from 'react-native';
import  TodoList from './TodoList';

const AllHooks = () => {

	const [count, setCount] = useState(0);
	// const [title, setCount] = useState(0);
	// const [discre, setCount] = useState(0);
	// const [count, setCount] = useState(0);


	const onsave = () => {
		setCount(count + 1)
	}

	const select = useCallback(() => {
		console.log("What's up ")
	},[])

  useEffect(() =>{
  	console.log("useEffect")
  },[count])

	return (
		<View>
			<Text>{count} </Text>
			<TodoList addNewTodo={select()}/>
			<Button title="ClickMe" onPress={()=> onsave() }/>
		</View>
		)
}
export default AllHooks;
	