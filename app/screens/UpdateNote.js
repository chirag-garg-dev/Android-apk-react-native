import React, {Component, useState, useEffect } from 'react';
// import * as ImagePicker from 'expo-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect, useDispatch, useSelector} from 'react-redux';
  
import * as notesActions from '../actions/notesActions';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {postData} from './Hooks';

function UpdateNote({ note, updateNote, navigation, deleteNote }){

  const { isNew, setIsNew } = postData();


  const dispatch= useDispatch()

	const [name, setName] = useState(note.name);
	const [title, setTitle] = useState(note.title);
	const [description, setDescription] = useState(note.description);
  const [image, setImage] = useState(note.avatar);

	const dataNote= (id) =>{
		const note = {
			'name': name, 
			'title': title,
			'description': description,
      'avatar': image
		}

    dispatch(notesActions.updateNote(note,id))
	  setIsNew({isNew: false})
  }

  const pickImage = async () => {
     launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setImage(response);
      }
    });

// let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

	return (
    <View>
        <TextInput
          style={styles.textfield}
          placeholder={'name'}
          onChangeText={(text => setName(text))}
          value={name}
        />
        <TextInput
          style={styles.textfield}
          placeholder={'title'}
          onChangeText={(text => setTitle(text))}
          value={title}
        />
        <TextInput
          style={styles.textfield}
          placeholder={'Description'}
          onChangeText={(text => setDescription(text))}
          value={description}
        />
 
        <Button title="Pick an image from camera roll" onPress={pickImage} 
        />
      	<Button title="Submit" onPress={() => {
                dataNote(note.id)
                }} /> 
       </View>
	);
}
export default UpdateNote;