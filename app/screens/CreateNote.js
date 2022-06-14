import React, {Component, useState,useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './style';
import * as notesActions from '../actions/notesActions';
import {useDispatch} from 'react-redux';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
// import ImagePicker from 'react-native-image-picker';

function CreateNote({ navigation }) {

  const dispatch= useDispatch()

	const dispatch= useDispatch()
  const setnote = () => {
    const note= {
      "name": name,
      "title": title,
      "description": description,
      "avatar": avatar,
    }
    dispatch(notesActions.createNote(note));
    navigation.navigate("Home");
  };

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [description, setDescription] = useState("");
 
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.cancelled) {
  //     setAvatar(result.uri);
  //   }
  // };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log('image=',image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setAvatar(imageUri);
    });
  };

  const choosePhotoFromLibrary  = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log('image=',image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setAvatar(imageUri);
    });
  };

  // const pickImage = () => {
  //   let options = {
  //     mediaType: 'all',
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   };
  //   launchImageLibrary(options, (response) => {
  //     console.log('Response = ', response);
  //     if (response.didCancel) {
  //       alert('User cancelled camera picker');
  //       return;
  //     } else if (response.errorCode == 'camera_unavailable') {
  //       alert('Camera not available on device');
  //       return;
  //     } else if (response.errorCode == 'permission') {
  //       alert('Permission not satisfied');
  //       return;
  //     } else if (response.errorCode == 'others') {
  //       alert(response.errorMessage);
  //       return;
  //     }
  //     setAvatar(response);
  //   });
  // };

  return (
    <View>
      <TextInput
        style={styles.textfield}
        placeholder={'Name'}
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textfield}
        placeholder={'Title'}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.textfield}
        placeholder={'Description'}
        onChangeText={text => setDescription(text)}
        value={description}
      />
      {avatar && <Image source={{ uri: avatar }} style={{ width: 200, height: 200 }} />}
    
      <Button title="Camera" onPress={takePhotoFromCamera} />
      <Button title="Gallery" onPress={choosePhotoFromLibrary} />
       
      <Button title="Create" onPress={setnote} />
    </View>
  );
}
export default CreateNote;
