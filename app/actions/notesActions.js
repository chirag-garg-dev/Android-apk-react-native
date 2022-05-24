import * as types from '../actionTypes/notes';

export function fetchNotes() {
  return async dispatch => {
    dispatch({type: types.FETCH_NOTES});
    try {
      // let response = await fetch('https://62775f6e08221c96846440a0.mockapi.io/notes');
      let response = await fetch('https://rails-api-article.herokuapp.com/notes');
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.FETCH_NOTES_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.FETCH_NOTES_FAILURE, error});
    }
  };
}

export function createNote(note) {
  console.log("assssssssssssss")
  return async dispatch => {
    dispatch({type: types.CREATE_NOTE});
    try {
      let response = await fetch('https://rails-api-article.herokuapp.com/notes', {
      // let response = await fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({note}),
      });
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.CREATE_NOTE_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.CREATE_NOTE_FAILURE, error});
    }
  };
}

export function deleteNote(id) {
  return async dispatch => {
    dispatch({type: types.DELETE_NOTE});
  try {
      // let response = await fetch('https://62775f6e08221c96846440a0.mockapi.io/notes/'+id, {
      let response = await fetch('https://rails-api-article.herokuapp.com/notes/'+id,{
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.DELETE_NOTE_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.DELETE_NOTE_FAILURE, error});
    }
  };
}

export function updateNote(note,id) {

  return async dispatch => {
    dispatch({type: types.UPDATE_NOTE});
    try {
      // let response = await fetch('https://62775f6e08221c96846440a0.mockapi.io/notes/'+id, {
      let response = await fetch('https://rails-api-article.herokuapp.com/notes/'+id,{
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(note),
      });
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.UPDATE_NOTE_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.UPDATE_NOTE_FAILURE, error});
    }
  };
}
