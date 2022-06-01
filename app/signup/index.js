import React, { Component,useState,useEffect } from "react";
import {useSignup} from "./Hooks";
import  AsyncStorage  from "@react-native-async-storage/async-storage"; 
import {
  StyleSheet,
  Text,
  View,
  Button,  
  TextInput,
} from "react-native";
import styles from './style';

function SignUp({ navigation }) {
    const {email, setEmail, setPassword , password, handleSubmitButton } = useSignup();

    const getData = async () => {
      const save =  await AsyncStorage.getItem("token");
      console.log(save)
      save && navigation.navigate('DrawerStack');   
    } 
    useEffect(() => {
      getData()  
    },[]);
    
    return (
    getData(),
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="enter email"
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={email => setEmail(email)} 
          
        />
        <TextInput
          style={styles.input}
          placeholder="enter password"
          autoCapitalize="none"
          placeholderTextColor='white'
          secureTextEntry={true}
          onChangeText={password => setPassword(password)} 
        />
        <Button
          title='Sign Up'
           onPress={handleSubmitButton}
        />
      </View>
    )
  }

 
export default SignUp;