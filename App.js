// import React from 'react';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';
// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import reducers from './app/reducers';
// import Home from './app/containers/homeContainer';

// const rootReducer = combineReducers({...reducers});
// const store = createStore(rootReducer, applyMiddleware(thunk));

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
// };

// export default App;

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginView} from './app/login';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from './app/reducers';
import Home from './app/containers/homeContainer';

const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer, applyMiddleware(thunk));

import {SignUp} from './app/signup';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "#e3f1efa1" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        />
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('Sign')}
      />
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('HomeP')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chirag Screen</Text>
      <Button
        title="Go to Chirag details "
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
 
function VsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LoginView />
    </View>
  );
}

function SnScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
     <SignUp />
    </View>
    );
}

function HmScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <Provider store={store}>
      <Home />
    </Provider>
    </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={VsScreen} />
        <Stack.Screen name="Sign" component={SnScreen} />
        <Stack.Screen name="HomeP" component={HmScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
