import React,{useState, useEffect,useMemo,useCallback} from 'react';
import Child from './Child.js'
import {
  Text,
   View,
   StyleSheet,
   Button
} from 'react-native';

const UseMemo = () => {
  
   const [count,setCount] = useState(0)
   const [item,setItem] = useState(0)
   const [child,setChild] = useState(0)
   
   const myFun = useMemo(() => {
     console.log("Hello Shivam")
     return count * 10
   },[count])
  
   // useEffect(()=>{
   // 	console.log("useEffect")
   // },[count])
  
   const myChild =useCallback(() => {
   	 console.log('i am child')
   },[child])
  
  return (
     <View style = {styles.container}>
       <Text style = {styles.text}>{myFun}</Text>
      <View style = {styles.section}>
       <Text style = {styles.text}>{count}</Text>
       <Button title = 'count' onPress = {() => { setCount(count+1)}} style = {styles.btn} />
      </View>
      <View style = {styles.section}>
       <Text style = {styles.text}>{item}</Text>
       <Button  title =  'item' onPress = {() => { setItem(item+10)}} style = {styles.btn} />
      </View>
      <View style = {styles.section}>
       <Child child = {child} myFun = {myChild()}/>
       <Button title = 'chhild' onPress = {() => { setChild(child+1)}} style = {styles.btn} />
      </View>
     </View>
    )
 }
const styles = StyleSheet.create({
	container : {
		alignItems : 'center',
		justifyContent : 'center'
	},
	text : {
    fontSize : 30
	},
  btn: {
    height: 40,
    marginTop: 10,
    fontSize: 32,
   },
  section : {
  	width : 200,
  	// height : 100,
    marginTop: 10,
  	borderWidth : 1,
  	textAlign : 'center'
  }
})
export default UseMemo

// useMemo Vs UseEffect

// import React,{useState, useEffect,useMemo} from 'react';
// import {
//   Text,
//    View,
//    StyleSheet,
//    Button,
// } from 'react-native';
// // import Temp from './../extraThings/Temprature'
//  const UseMemo = () => {
//    const [count,setCount] = useState(0)
//    const [item,setItem] = useState(0)
   
//    // useEffect(()=>{
//    // 	console.log("hello shivam")
//    // },[count])

//     const myFun = useMemo(() => {
//     	return(
//        <Text style = {styles.text}>useEffect VS useMemo {count}</Text>)
//    },[])

//   return (
//      <View style = {styles.container}>
//       {myFun}
       
//       <Text  style = {styles.text} >useEffect VS useMemo {count}</Text>
//       <Text  style = {styles.text} >useEffect VS useMemo {count}</Text>
//       <Text  style = {styles.text} >useEffect VS useMemo {count}</Text>
//       <Text  style = {styles.text} >useEffect VS useMemo {count}</Text>
//       <Button title = 'count' onPress = {() => { setCount(count+1)}} style = {styles.btn} />
//      </View>
//     )
//  }
// const styles = StyleSheet.create({
// 	container : {
// 		alignItems : 'center',
// 		justifyContent : 'center'
// 	},
// 	text : {
//     fontSize : 25
// 	},
// 	btn : {
// 		margin : 40
// 	}
// })
// export default UseMemo