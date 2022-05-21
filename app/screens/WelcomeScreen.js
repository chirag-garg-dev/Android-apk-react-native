import React, {useEffect, useState} from 'react';
import {Button , ActivityIndicator, Text, View,  Image, ImageBackground, StyleSheet} from 'react-native';

 

const WelcomeScreen = ({ navigation }) => {

	return (
    <View style={styles.container}>
     	 
    	<ImageBackground source={require('./../../Image/welcome.jpeg')} 
    	resizeMode="cover" style={styles.image}>
      
      <Text style={styles.text}>Inside</Text>
    	</ImageBackground>
      
      <Button title="Your Post" 
      onPress={()=> navigation.navigate("Post")}
      />
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
  }
});


export default WelcomeScreen;