import React,{memo} from "react";
import {Text,Button, View} from "react-native"



const TodoList = ({addNewTodo}) => {
console.log("Hello")
	return (
		<View>
		<Text>Hello World</Text>
		<Button title="TodoList" onPress={() => addNewTodo()}  />
		</View>

		)
}

export default memo(TodoList);
