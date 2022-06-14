import React, {useState, createRef,useEffect  } from 'react';
import  AsyncStorage  from "@react-native-async-storage/async-storage"; 
import { useNavigation } from '@react-navigation/native';

export const useLogin = () => {
  
  const navigation = useNavigation();
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
      console.log(save)
      save && navigation.navigate('DrawerStack');   
  } 
    useEffect(() => {
      getData()  
    },[]);

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
          navigation.navigate('DrawerStack');
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


// import React, {useState, createRef} from 'react';

// import { useNavigation } from '@react-navigation/native';

// export const useLogin = () => {
  
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
 
//   const handleSubmitPress =  () => {
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

//           navigation.navigate('DrawerStack');
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
//   return {
//     email, setEmail , password , setPassword , handleSubmitPress 
//   }; 
// };