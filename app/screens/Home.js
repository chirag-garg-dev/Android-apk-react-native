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


export default function  Home() {
  
  const {myState, isNew, setIsNew  , loading , setLoading, note, setNote} = postData();
   
  function renderNotes() {
    const {data, status} = myState.notes;
    if (status === 'failure') {
      return <Text>{'Error'}</Text>;
    } else if (status == 'loading') {
      return <ActivityIndicator size="large" />;
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

  const renderNote = ({ item }) => {
    return( 
      <>
      <NotesList note={item} editNote={_editNote} deleteNote={_deleteNote} /> 
      </>
    );
  }

  const _editNote = (note) => {
    setIsNew({isNew: true})
    setNote(note);
  };

  const _updateNote = (note,id) =>  {
    notesActions.updateNote(note,id)
    setIsNew({isNew: false});    
  }

  const _deleteNote = (id) => {
    dispatch(notesActions.deleteNote(id));
  } 

return (
 <View style={styles.container}>
    {isNew ? <UpdateNote note={note}   />  : renderNotes() }
    {isNew ?   <Button title="Back"  /> :<Button title="Create"/> }
  </View>
  )
}










































// import React, {Component,useEffect, useState, useDispatch} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// // import Home from '../screens/home';
// import * as notesActions from '../actions/notesActions';
// import fetchNotes from './../actions/notesActions';
// import {
//   ScrollView, FlatList, SafeAreaView, StatusBar,
//   View,
//   Text,
//   TextInput,
//   Button,
//   Image,
// } from 'react-native';
// import styles from './style';
// import NotesList from './NotesList';
// import UpdateNote from './UpdateNote';
// import GetLocation from 'react-native-get-location';
 
//   class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isNew: false,
//       isNew1: false,
//       location: '',
//       loading: false,
//       text: '',
//       note: '',
//     };
//   }

//   componentDidMount() {
//     this.props.actions.fetchNotes();
//   }

//   _editNote = (note) => {
//     this.setState({isNew: true, note: note});
//   };
 
//   _createNote = () => {
//     const {text} = this.state;
//     const note = {text};
//     this.props.actions.createNote(note);
//     this.setState({text: ''});
//   };

//   _deleteNote = (id) => {
//     this.props.actions.deleteNote(id);
//   }

//   _updateNote = (note,id) => {
//   console.log("111111111111111111111", note, id)
//     this.props.actions.updateNote(note,id);
//     this.setState({isNew: false, note: ' '});
//   }

//   _renderNote = ({ item }) => {
//     return( 
//       <>
//       <NotesList 
//       note={item}
//       deleteNote={this._deleteNote}
//       editNote={this._editNote}
//       />
//       </>
//     );
//   }


//   _renderNotes() {
//     const {data, status} = this.props.notes;
//     if (status === 'failure') {
//       return <Text>{'Error'}</Text>;
//     } else if (status == 'loading') {
//       return <Text>{'Loading'}</Text>;
//     }
//     return (
//       <SafeAreaView style={styles.container}>
//         <FlatList
//         data={data}
//         renderItem={this._renderNote}
//         keyExtractor={(item) => item.id}
//         />
//       </SafeAreaView>
//       );
//     // return <View>{data.map(note => this._renderNote(note))}</View>;
//   }

   
//   _renderNew = () => {
//     this.setState({isNew: !this.state.isNew});
//   }


//   _renderCreateForm() {
//     return (
//       <View>
//         <TextInput
//           style={styles.textfield}
//           placeholder={'Text'}
//           onChangeText={text => this.setState({text})}
//           value={this.state.text}
//         />
//         <Button title="Create" onPress={this._createNote} />
//       </View>
//     );
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//        <View>
//          <Button
//             disabled={this.state.loading}
//             title="Get Location"
//             onPress={this._requestLocation}
//           />
//              <Text>abc{this.state.location.longitude}</Text>
//               <Text>Latitude{this.state.location.latitude}</Text>
//              <Text>abc dddddd</Text>
      
//         </View>
//         {this.state.isNew ? <UpdateNote note={this.state.note} updateNote={this._updateNote} /> : this._renderNotes()}
//         {this.state.isNew ?   <Button title="Back" onPress={this._renderNew} /> :<Button title="Create"/>  }
//        </View>
//     );
//   }
// }


// const actions = {
//   ...notesActions,
// };

// const mapStateToProps = state => ({
//   notes: state.notes,
// });

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(actions, dispatch),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Home);




















