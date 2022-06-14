import React, {useState, createRef, useEffect} from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, 
  Alert, Image, Platform, TouchableWithoutFeedback, 
  TouchableOpacity, Button, Keyboard  } from 'react-native';
import LoginPart from './Hooks';
import styles from './style';
import { useLogin } from './Hooks';

// export function LoginView() {
const LoginView = ({ navigation }) => {

  const {  setEmail , setPassword , handleSubmitPress } = useLogin();
  
  return ( 
    <View style={styles.container}>
      <View style={styles.inputView}>
         <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}
        onPress={handleSubmitPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default LoginView;
