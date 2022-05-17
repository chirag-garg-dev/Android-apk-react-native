// import React, {useState, createRef} from 'react';
// import { AsyncStorage } from 'react-native';
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

 
// export function LoginView() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
 
//   const passwordInputRef = createRef();
 
//   const handleSubmitPress = () => {
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
 
//     fetch('http://localhost:3000/login', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         'Content-Type':
//         'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setLoading(false);
//         console.log(responseJson);
//         if (responseJson.status === 'success') {
//           AsyncStorage.setItem('user_id', responseJson.data.email);
//           console.log(responseJson.data.email);
//           navigation.replace('DrawerNavigationRoutes');
//         } else {
//           setErrortext(responseJson.msg);
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
//       <Image style={styles.image} source={require("./../../Image/images.jpeg")} />
// 	    <View style={styles.inputView}>
//         <TextInput
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

 
import React, {useState, createRef} from 'react';
import {AsyncStorage} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from './style';


export function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
 
  const handleSubmitPress = () => {
    setErrortext('');
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: email, password: password};
    let formBody = [];
    for (let key in dataToSend) {
    let encodedKey = encodeURIComponent(key);
    let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch('https://rails-api-article.herokuapp.com/login', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        if (!responseJson.token == false) {
          AsyncStorage.setItem("token", responseJson["token"]);
            alert('Login Successful');
            console.log("Login Successful")
        } else {
          alert("Please check your email id or password");
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };


 
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
}

 