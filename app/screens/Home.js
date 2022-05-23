import React, {Component,useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notesActions from '../actions/notesActions';
import {
  ScrollView, FlatList, SafeAreaView, StatusBar,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import NotesList from './NotesList';
import UpdateNote from './UpdateNote';
import {postData} from './Hooks';


export default function  Home({ navigation }) {
  
  const {myState, isNew, setIsNew  , loading , setLoading, note, setNote} = postData();
  const {data, status} = myState.notes;
    
  if (status === 'failure') {
    return <Text>{'Error'}</Text>;
  } else if (status == 'loading') {
    return <ActivityIndicator size="large" />  
  }
    
  const renderNote = ({ item }) => {
    return <NotesList note={item} editNote={_editNote} deleteNote={_deleteNote} /> 
  }

  const _editNote = (note) => {
    setNote(note);
    navigation.navigate('Update',  { note: note});
  };

  const _deleteNote = (id) => {
    dispatch(notesActions.deleteNote(id));
  } 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderNote}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
