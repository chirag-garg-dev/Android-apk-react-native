import React, { Component,useState } from "react";
import {useSignup} from "./Hooks";

import {
  StyleSheet,
  Text,
  View,
  Button,  
  TextInput,
} from "react-native";
import styles from './style';

export function SignUp() {

    const {email, setEmail, setPassword , password, handleSubmitButton } = useSignup();

    return (
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

 
