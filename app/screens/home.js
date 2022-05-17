import React, {Component,useEffect} from 'react';
import {
  ScrollView, FlatList, SafeAreaView, StatusBar,
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';
import styles from './style';
import NotesList from './NotesList';
import UpdateNote from './UpdateNote';
import GetLocation from 'react-native-get-location'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNew: false,
      isNew1: false,
      location: '',
      loading: false,
      text: '',
      note: '',
    };
  }

  componentDidMount() {
    this.props.actions.fetchNotes();
  }

  _editNote = (note) => {
    this.setState({isNew: true, note: note});
  };

  _requestLocation = (teste = '') => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        this.setState({
          location: location
        });
      })
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location,

        });
      });
  }; 

  _requestLocation = (teste = '') => {
    return new Promise((resolve, reject) => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
      
    })
      .then(location => {
        this.setState({
          location: location

        });
      }) 
      .catch(ex => {
        const {code, message} = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location,

        });
      });
  });
  }; 

  //position.js
//     _requestLocation = (teste = '') => {

//     async function getCurrentPosition() {
//       return new Promise((resolve, reject) => {
//         Geolocation.getCurrentPosition(resolve, reject, {
//           enableHighAccuracy: true,
//           timeout: 15000,
//         })
//       .then(location => {
//         this.setState({
//           location: location
//         });
//       })
//       });
//     }
// }

    // export async function getUserLocation() {
    //   await request(
    //     // Check for permissions
    //     Platform.select({
    //       android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    //       ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    //     }),
    //   ).then((res) => {
    //     console.log('then');
    //     // Permission OK
    //     if (res === 'granted') {
    //       console.log('granted');
    //       return getCurrentPosition();
    //       // Permission denied
    //     } else {
    //       console.log('Location is not enabled');
    //     }
    //   });
    // }
    // };

    // getUserLocation()


  _createNote = () => {
    const {text} = this.state;
    const note = {text};
    this.props.actions.createNote(note);
    this.setState({text: ''});
  };

  _deleteNote = (id) => {
    this.props.actions.deleteNote(id);
  }

  _updateNote = (note,id) => {
    this.props.actions.updateNote(note,id);
    this.setState({isNew: false, note: ' '});
  }

  _renderNote = ({ item }) => {
    return( 
      <>
      <NotesList 
      note={item}
      deleteNote={this._deleteNote}
      editNote={this._editNote}
      />
      </>
    );
  }


  _renderNotes() {
    const {data, status} = this.props.notes;
    if (status === 'failure') {
      return <Text>{'Error'}</Text>;
    } else if (status == 'loading') {
      return <Text>{'Loading'}</Text>;
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        data={data}
        renderItem={this._renderNote}
        keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      );
    // return <View>{data.map(note => this._renderNote(note))}</View>;
  }

   
  _renderNew = () => {
    this.setState({isNew: !this.state.isNew});
  }


  _renderCreateForm() {
    return (
      <View>
        <TextInput
          style={styles.textfield}
          placeholder={'Text'}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Button title="Create" onPress={this._createNote} />
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
       <View>
         <Button
            disabled={this.state.loading}
            title="Get Location"
            onPress={this._requestLocation}
          />
             <Text>abc{this.state.location.longitude}</Text>
              <Text>Latitude{this.state.location.latitude}</Text>
             <Text>abc dddddd</Text>
      
        </View>
        {this.state.isNew ? <UpdateNote note={this.state.note} updateNote={this._updateNote} /> : this._renderNotes()}
        {this.state.isNew ?   <Button title="Back" onPress={this._renderNew} /> :<Button title="Create"/>  }
       </View>
    );
  }
}
