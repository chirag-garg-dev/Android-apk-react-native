import React , {Component, useState } from 'react';
import {useDispatch} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';
import styles from './style';
import deleteNote from './../actions/notesActions';
import UpdateNote from './UpdateNote';
import * as notesActions from '../actions/notesActions';

function NotesList  ({note,  editNote }) {

  const dispatch= useDispatch()

  const deleteNote = (id) => {
    dispatch(notesActions.deleteNote(id));
  }

	return( 
  	<View style={styles.row} >
       <View style={[styles.container, {backgroundColor: '#B5F1F7'}]}>
        <Text style={styles.quote}>{note.name}</Text>
        <Text style={styles.quote}>{note.title}</Text>
        <Text style={styles.author}>{note.description}</Text>
        
        {note.avatar && <Image source={{ uri: note.avatar }} style={{ width: 400, height: 400 }} />}
         <View style={styles.buttonContainer}>
         <Button title= "Edit" onPress={() => {
         		editNote(note)
         }}/>
        <Button title="Delete" color="#841584" onPress={() => {
                deleteNote(note.id)
                }} />
      </View>
      </View>

    </View>
	);
}; 

export default NotesList;

