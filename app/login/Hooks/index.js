export function loginfetch() {
  return async dispatch => {
    dispatch({type: types.FETCH_NOTES});
    try {
      let response = await fetch('https://62775f6e08221c96846440a0.mockapi.io/notes');
      // let response = await fetch('http://localhost:3000/notes');
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

  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }