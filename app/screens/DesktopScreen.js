import React, {useEffect,useCallback, useState} from 'react';
import  AsyncStorage  from "@react-native-async-storage/async-storage"; 
import YoutubePlayer from 'react-native-youtube-iframe';
import Video from 'react-native-video';
import {Button, Text, View,
  StatusBar, StyleSheet, Alert, Modal, Pressable} from 'react-native';

const DesktopScreen = ({ navigation }) => {
    
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }
  const logOutData = async () => {
    await AsyncStorage.setItem("token",'');
    navigation.navigate('LoginStack');      
  } 
  
  return (
    <View style={styles.container}>
    
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="red" />   
      <Text style={styles.text}> WELCOME</Text>   
    <View>
      <Video
        source={require('./../../assets/office.mp4')}  
        rate={1.0}
        volume={1.0}
        resizeMode="cover"
        controls={true}  
        style={styles.backgroundVideo}  
      />  
    </View>
        
    </View>
    <Text style={styles.text}> SASS</Text>   
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
    backgroundColor: "#00f4ff"
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
  },
  backgroundVideo: {
      width:400,
      height:400,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      marginBottom: 10,
    }

});


export default DesktopScreen;
