import React, {useEffect, useState} from 'react';
import  AsyncStorage  from "@react-native-async-storage/async-storage"; 

import {Button, Text, View,
  StatusBar, StyleSheet, Alert, Modal, Pressable} from 'react-native';

const DesktopScreen = ({ navigation }) => {
  
  const logOutData = async () => {
    await AsyncStorage.setItem("token",'');
    navigation.navigate('LoginStack');      
  } 
  
  return (
    <View style={styles.container}>
   <StatusBar
        animated={true}
        backgroundColor="red" />      
      <Text style={styles.text}>Inside</Text>
      
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => logOutData()}
      >
        <Text style={styles.textStyle}>Log Out</Text>
      </Pressable>
    </View>
    ) 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#70c3e6",
    flex: 1,
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


export default DesktopScreen;



 

