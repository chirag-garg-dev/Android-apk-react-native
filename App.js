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







// import React from 'react';
// import {AppRegistry} from 'react-native';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';

// import AppReducer from './src/reducers';
// import AppNavigator from './src/navigations/AppNavigation';

// const store = createStore(AppReducer, applyMiddleware(thunk));

// console.disableYellowBox = true;

// function StarterApp() {
//   return (
//     <Provider store={store}>
//       <AppNavigator />
//     </Provider>
//   );
// }

// AppRegistry.registerComponent('rn_starter_kit', () => StarterApp);

// export default StarterApp;




// import React from 'react';
// import {Image, Pressable, StyleSheet} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen';
// import LoginScreen from '../screens/LoginScreen';
// import SignupScreen from '../screens/SignupScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';
// import {AppIcon, AppStyles} from '../AppStyles';
// import {Configuration} from '../Configuration';
// import DrawerContainer from '../components/DrawerContainer';

// const Stack = createStackNavigator();

// // login stack
// const LoginStack = () => (
//   <Stack.Navigator
//     initialRouteName="Welcome"
//     screenOptions={{
//       headerTintColor: 'red',
//       headerTitleStyle: styles.headerTitleStyle,
//       headerMode: 'float',
//     }}>
//     <Stack.Screen name="Welcome" component={WelcomeScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Signup" component={SignupScreen} />
    
//   </Stack.Navigator>
// );

// const HomeStack = () => (
//   <Stack.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       headerTintColor: 'red',
//       headerTitleStyle: styles.headerTitleStyle,
//       headerMode: 'float',
//     }}>
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={({navigation}) => ({
//         headerLeft: () => (
//           <Pressable onPress={() => navigation.openDrawer()}>
//             <Image style={styles.iconStyle} source={AppIcon.images.menu} />
//           </Pressable>
//         ),
//         headerLeftContainerStyle: {paddingLeft: 10},
//       })}
//     />
//   </Stack.Navigator>
// );

// const BottomTab = createBottomTabNavigator();

// const TabNavigator = () => (
//   <BottomTab.Navigator
//     initialRouteName="Home"
//     screenOptions={{
//       tabBarInactiveTintColor: 'grey',
//       tabBarActiveTintColor: AppStyles.color.tint,
//       tabBarIcon: ({focused}) => {
//         return (
//           <Image
//             style={{
//               tintColor: focused ? AppStyles.color.tint : AppStyles.color.grey,
//             }}
//             source={AppIcon.images.home}
//           />
//         );
//       },
//       headerShown: false,
//     }}>
//     <BottomTab.Screen
//       options={{tabBarLabel: 'Home'}}
//       name="HomeStack"
//       component={HomeStack}
//     />
//   </BottomTab.Navigator>
// );

// // drawer stack
// const Drawer = createDrawerNavigator();
// const DrawerStack = () => (
//   <Drawer.Navigator
//     screenOptions={{
//       drawerStyle: {outerWidth: 200},
//       drawerPosition: 'left',
//       headerShown: false,
//     }}
//     drawerContent={({navigation}) => (
//       <DrawerContainer navigation={navigation} />
//     )}>
//     <Drawer.Screen name="Tab" component={TabNavigator} />
//   </Drawer.Navigator>
// );

// // Manifest of possible screens
// const RootNavigator = () => (
//   <Stack.Navigator
//     initialRouteName="LoginStack"
//     screenOptions={{headerShown: false}}>
//     <Stack.Screen name="LoginStack" component={LoginStack} />
//     <Stack.Screen name="DrawerStack" component={DrawerStack} />
//   </Stack.Navigator>
// );

// const AppNavigator = () => (
//   <NavigationContainer>
//     <RootNavigator />
//   </NavigationContainer>
// );

// const styles = StyleSheet.create({
//   headerTitleStyle: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//     alignSelf: 'center',
//     color: 'black',
//   },
//   iconStyle: {tintColor: AppStyles.color.tint, width: 30, height: 30},
// });

// export default AppNavigator;























// import React from 'react';
// import {Image, Text, Pressable, StyleSheet} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';
// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import  AsyncStorage  from "@react-native-async-storage/async-storage"; 
// import reducers from './app/reducers';
// import {LoginView} from './app/login';
// import LoginScreen from './'
// import Home from './app/screens/Home';
// import {SignUp} from './app/signup';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// // import {SplashScreen} from './app/csplash/ccc';

// const rootReducer = combineReducers({...reducers});
// const store = createStore(rootReducer, applyMiddleware(thunk));


// const Stack = createStackNavigator();
// const BottomTab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const LoginStack = () => (
//   <Stack.Navigator initialRouteName="Welcome"
//     screenOptions={{
//       headerTintColor: 'red',
//       headerTitleStyle: styles.headerTitleStyle,
//       headerMode: 'float',
//     }}>
//     <Stack.Screen name="Welcome" component={WelcomeScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Signup" component={SignupScreen} />
//   </Stack.Navigator>
// );


//   const getData = async () => {
//     const save =  await AsyncStorage.getItem("token");
//     return save      
//   } 

//   const logoutData = async () => {
//     await AsyncStorage.setItem("token", "");
//     console.log("getData", getData());
//   }
 
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "#e3f1efa1" }}>
//       <Text>Home Screen</Text>
//       {getData() ?
//         (<>
//         <Button
//           title="Go to Home Page"
//           onPress={() => navigation.navigate('Post')}
//         />
//         <Button
//           title="Logout"
//           onPress={() => logoutData('')}
//         />
//       </>) :
//       (<>
//         <Button
//           title="Go to Login"
//           onPress={() => navigation.navigate('Login')}
//           />
//         <Button
//           title="Go to SignUp"
//           onPress={() => navigation.navigate('Signup')}
//         />
//       </>
//       )
//     }
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
// const styles = StyleSheet.create({
//   headerTitleStyle: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//     alignSelf: 'center',
//     color: 'black',
//   },
//   iconStyle: {tintColor: AppStyles.color.tint, width: 30, height: 30},
// });
// export default App;




































































import * as React from 'react';
import  AsyncStorage  from "@react-native-async-storage/async-storage"; 

import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {LoginView} from './app/login';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from './app/reducers';
import Home from './app/screens/Home';

const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer, applyMiddleware(thunk));
import {SignUp} from './app/signup';
// import {SplashScreen} from './app/csplash/ccc';

const Drawer = createDrawerNavigator();
  const getData = async () => {
    const save =  await AsyncStorage.getItem("token");
     console.log(save);
     return save;
  } 

  const logoutData = async () => {
    await AsyncStorage.setItem("token", "");
    console.log("getData", getData());
  }
 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "#e3f1efa1" }}>
      <Text>Home Screen</Text>
      { getData() ?
        (<>
        <Button
          title="Go to Home Page"
          onPress={() => navigation.navigate('Post')}
        />
        <Button
          title="Logout"
          onPress={() => logoutData('')}
        />
      </>) :
      (<>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
          />
        <Button
          title="Go to SignUp"
          onPress={() => navigation.navigate('Signup')}
        />
      </>)
    }
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

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Login" component={VsScreen} />
        <Drawer.Screen name="Signup" component={SnScreen} />
        <Drawer.Screen name="Post" component={HmScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;


