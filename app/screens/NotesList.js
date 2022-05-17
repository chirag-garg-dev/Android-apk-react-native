import React , {Component, useState } from 'react';
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
 
function NotesList  ({note, deleteNote, editNote }) {

	return( 
  	<View style={styles.row} >
       <View style={[styles.container, {backgroundColor: '#B5F1F7'}]}>
        <Text style={styles.quote}>{note.name}</Text>
        <Text style={styles.quote}>{note.title}</Text>
        <Text style={styles.author}>{note.description}</Text>
        
        {note.avatar && <Image source={{ uri: note.avatar }} style={{ width: 400, height: 400 }} />}
        
        <Button title="Delete" onPress={() => {
                deleteNote(note.id)
                }} />
         <Button title= "Edit" onPress={() => {
         		editNote(note)
         }}/>

      </View>

    </View>
	);
}; 

export default NotesList;

