import React, {useState, createRef} from 'react';
import  AsyncStorage  from "@react-native-async-storage/async-storage"; 

export const useLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
 
  const savedData = async (token) => {
    await AsyncStorage.setItem("token",token);
            console.log("savedData", token);
  } 

  const getData = async () => {
    const save =  await AsyncStorage.getItem("token");
            console.log("getData", save);
  } 

  const handleSubmitPress = async () => {
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
          savedData(responseJson["token"]);
          getData();

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
  return {
    email, setEmail , password , setPassword , handleSubmitPress 
  }; 
};