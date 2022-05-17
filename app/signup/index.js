import React, { Component,useState } from "react";
// import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
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

    const {email, onChangeemail } = useSignup();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [errortext, setErrortext] = useState('');
  
  // const handleSubmitButton = async () => {
  //   setErrortext('');
  //   if (!email) {
  //     alert('Please fill Email');
  //     return;
  //   }
  //   if (!password) {
  //     alert('Please fill Password');
  //     return;
  //   }
  //   setLoading(true);
  //   var dataToSend = {
  //     email: email,
  //     password: password,
  //   };
  //   var formBody = [];
  //   for (var key in dataToSend) {
  //     var encodedKey = encodeURIComponent(key);
  //     var encodedValue = encodeURIComponent(dataToSend[key]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }
  //   formBody = formBody.join('&');
  //   fetch('https://rails-api-article.herokuapp.com/signup', {
  //     method: 'POST',
  //     body: formBody,
  //     headers: {
  //       'Content-Type':
  //       'application/x-www-form-urlencoded;charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setLoading(false);
  //       console.log(responseJson);
        
  //       // If server response message same as Data Matched
  //       if (!responseJson == false) {
  //           AsyncStorage.setItem("token", responseJson["token"]);
  //            alert("Registration Successful"); 
  //             // localStorage.setItem("token", responseJson["token"]);
  //         console.log('Registration Successful. Please Login to proceed');
  //         console.log(AsyncStorage.setItem);

  //       } else {
  //         setErrortext(responseJson);
  //       }
  //     })
  //     .catch((error) => {
  //       //Hide Loader
  //       setLoading(false);
  //       console.error(error);
  //     });
  // };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="enter email"
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={onChangeemail} 
          
        />
       
      </View>
    )
  }

 