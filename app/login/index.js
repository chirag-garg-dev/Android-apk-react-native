import React, {useState, createRef, useEffect} from 'react';
import  AsyncStorage  from "@react-native-async-storage/async-storage"; 
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, 
  Alert, Image, Platform, TouchableWithoutFeedback, 
  TouchableOpacity, Button, Keyboard  } from 'react-native';
import LoginPart from './Hooks';
import styles from './style';
import { useLogin } from './Hooks';

// export function LoginView() {
const LoginView = ({ navigation }) => {

  const {  setEmail , setPassword , handleSubmitPress } = useLogin();

  const getData = async () => {
    const save =  await AsyncStorage.getItem("token");
      console.log(save)
      save && navigation.navigate('DrawerStack');   
    } 
      useEffect(() => {
        getData()  
      },[]);
      
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





 
// import React, {useState, createRef} from 'react';
// import {AsyncStorage} from 'react-native';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import styles from './style';
// import useLogin from "./Hooks";

// export function LoginView() {

//   // const { email ,setEmail, setPassword , password , handleSubmitPress} = useLogin();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
 
//   const handleSubmitPress = async () => {
//     setErrortext('');
//     if (!email) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!password) {
//       alert('Please fill Password');
//       return;
//     }
//     setLoading(true);
//     let dataToSend = {email: email, password: password};
//     let formBody = [];
//     for (let key in dataToSend) {
//     let encodedKey = encodeURIComponent(key);
//     let encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');
//     fetch('https://rails-api-article.herokuapp.com/login', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         'Content-Type':
//         'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//     .then((response) => response.json())
//       .then((responseJson) => {
//         setLoading(false);
//         if (!responseJson.token == false) {
//           localStorage.setItem("token", responseJson["token"]);

//             alert('Login Successful');
//             console.log("Login Successful")
//         } else {
//           alert("Please check your email id or password");
//           console.log('Please check your email id or password');
//         }
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error(error);
//       });
//   };


 
//   return (    
//     <View style={styles.container}>
//       <View style={styles.inputView}>
//          <TextInput
//           style={styles.TextInput}
//           placeholder="Email."
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         />
//       </View>
 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password."
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         />
//       </View>
 
//       <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text>
//       </TouchableOpacity>
 
//       <TouchableOpacity style={styles.loginBtn}
//         onPress={handleSubmitPress}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

//  