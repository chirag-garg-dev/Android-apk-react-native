import React, { Component, useEffect, useState } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import * as notesActions from './../../actions/notesActions';

export const postData = () => {

  const dispatch= useDispatch()
  
  useEffect(()=>{
    dispatch(notesActions.fetchNotes());
  },[dispatch])

  const myState =useSelector((state)=>state)

  const [isNew, setIsNew] = useState(false);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('');
 

  return {
    isNew, setIsNew  , loading , setLoading, note, setNote, myState
  };
};


