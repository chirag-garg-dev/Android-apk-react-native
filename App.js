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

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {LoginView} from './app/login';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';
// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import reducers from './app/reducers';
// import Home from './app/containers/homeContainer';

// const rootReducer = combineReducers({...reducers});
// const store = createStore(rootReducer, applyMiddleware(thunk));

// import {SignUp} from './app/signup';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "#e3f1efa1" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Login"
//         onPress={() => navigation.navigate('Login')}
//         />
//       <Button
//         title="Go to SignUp"
//         onPress={() => navigation.navigate('Signup')}
//       />
//       <Button
//         title="Go to Home Page"
//         onPress={() => navigation.navigate('Post')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Chirag Screen</Text>
//       <Button
//         title="Go to Chirag details "
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }
 
// function VsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       <LoginView />
//     </View>
//   );
// }

// function SnScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center'}}>
//      <SignUp />
//     </View>
//     );
// }

// function HmScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center'}}>
//       <Provider store={store}>
//       <Home />
//     </Provider>
//     </View>
//     );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Login" component={VsScreen} />
//         <Stack.Screen name="Signup" component={SnScreen} />
//         <Stack.Screen name="Post" component={HmScreen} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;





// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }







import React from 'react';
import {AppRegistry} from 'react-native';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import AppReducer from './src/reducers';
import AppNavigator from './src/navigations/AppNavigation';

const store = createStore(AppReducer, applyMiddleware(thunk));

console.disableYellowBox = true;

function StarterApp() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

AppRegistry.registerComponent('rn_starter_kit', () => StarterApp);

export default StarterApp;


// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import {LoginView} from './app/login';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';
// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import reducers from './app/reducers';
// import Home from './app/containers/homeContainer';

// const rootReducer = combineReducers({...reducers});
// const store = createStore(rootReducer, applyMiddleware(thunk));

// import {SignUp} from './app/signup';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "#e3f1efa1" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Login"
//         onPress={() => navigation.navigate('Login')}
//         />
//       <Button
//         title="Go to SignUp"
//         onPress={() => navigation.navigate('Signup')}
//       />
//       <Button
//         title="Go to Home Page"
//         onPress={() => navigation.navigate('Post')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Chirag Screen</Text>
//       <Button
//         title="Go to Chirag details "
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }
 
// function VsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       <LoginView />
//     </View>
//   );
// }

// function SnScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center'}}>
//      <SignUp />
//     </View>
//     );
// }

// function HmScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center'}}>
//       <Provider store={store}>
//       <Home />
//     </Provider>
//     </View>
//     );
// }

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Details" component={DetailsScreen} />
//         <Drawer.Screen name="Login" component={VsScreen} />
//         <Drawer.Screen name="Signup" component={SnScreen} />
//         <Drawer.Screen name="Post" component={HmScreen} />

//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


