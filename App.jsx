import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './src/Screens/GetStarted';
import LoginScreen from './src/Screens/LoginScreen';
import CreateAccountScreen from './src/Screens/CreateAccountScreen';
import ForgotPassword from './src/Screens/ForgotPassword';
const Stack = createNativeStackNavigator()
const StackNavigator = ()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStarted}  />
      <Stack.Screen name="LoginScreen" component={LoginScreen}  />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}  />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}  />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}