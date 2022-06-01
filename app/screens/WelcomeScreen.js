import React, {useEffect, useState} from 'react';
import {Button, ActivityIndicator, Text, View,
  Image, ImageBackground,StatusBar, StyleSheet, Alert, Modal, Pressable} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
   const [modalVisible, setModalVisible] = useState(false);
	
  return (
    <View style={styles.container}>
   <StatusBar
        animated={true}
        backgroundColor="red" />
   	 
    	<ImageBackground source={require('./../../Image/welcome.jpeg')} 
    	resizeMode="cover" style={styles.image}>
      
      <Text style={styles.text}>Inside</Text>
      <Button title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button title="Signup"
        onPress={() => navigation.navigate('Signup')} />

    	</ImageBackground>
      
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => (setModalVisible(!modalVisible), navigation.navigate("Post"))}
            >
              <Text style={styles.textStyle}>Show Posts</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Post</Text>
      </Pressable>
 		</View>
    )	
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default WelcomeScreen;



 






//  

// import React, { useState } from "react";
// import { View, Switch, StyleSheet } from "react-native";

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default App;