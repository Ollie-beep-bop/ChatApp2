import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import Registerscreen from './Screens/RegisterScreen';
import ChatScreen from './Screens/ChatScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Login" component={LoginScreen}/>
  <Stack.Screen name="Register" component={Registerscreen}/>
  <Stack.Screen name="Chat" component={ChatScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

