const INITIAL_STATE = {
  data: [],
  status: null,
  error: null,
  createStatus: null,
  createError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return {
        ...state,
        status: 'loading',
        error: null,
      };

    case 'FETCH_NOTES_SUCCESS':
      return {
        ...state,
        status: 'success',
        data: action.data,
        error: null,
      };

    case 'FETCH_NOTES_FAILURE':
      return {
        ...state,
        status: 'failure',
        error: action.error,
      };

    case 'CREATE_NOTE':
      return {
        ...state,
        createStatus: 'loading',
        createError: null,
      };

    case 'CREATE_NOTE_SUCCESS':
      return {
        ...state,
        createStatus: 'success',
        data: [...state.data, action.data],
        createError: null,
      };

    case 'CREATE_NOTE_FAILURE':
      return {
        ...state,
        createStatus: 'failure',
        createError: action.error,
      };

    case 'DELETE_NOTE':
 
      return {
        ...state,
        deleteStatus: 'loading',
        deleteError: null,
      };


    case 'DELETE_NOTE_SUCCESS':
      let  id  = action.data;
      let clone = JSON.parse(JSON.stringify(state.data));
      const index = clone.findIndex(obj => obj.id === id.id);
      if (index !== -1) clone.splice(index, 1);
      return {
        ...state,
        deleteStatus: 'success',
        data: [...clone],
        deleteError: null,
      };

    case 'DELETE_NOTE_FAILURE':
 
      return {
        ...state,
        deleteStatus: 'failure',
        deleteError: action.error,
      };

    case 'UPDATE_NOTE':
       debugger
      return {
        ...state,
        updateStatus: 'loading',
        deleteError: null,
      };

    case 'UPDATE_NOTE_SUCCESS':
    let  up  = action.data;
    let clone1 = JSON.parse(JSON.stringify(state.data));
    const index1 = clone1.findIndex(obj => obj.id === up.id);
    if (index1 !== -1) clone1[index1] = up;
      return {
        ...state,
        updateStatus: 'success',
        data: [...clone1],
        updateError: null,
      };

    case 'UPDATE_NOTE_FAILURE':
      return {
        ...state,
        updateStatus: 'failure',
        updateError: action.error,
      };

    default:
      return state;
  }
};