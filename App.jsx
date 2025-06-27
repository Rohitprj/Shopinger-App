import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import LoginScreen from './src/Screens/LoginScreen';
import CreateAccountScreen from './src/Screens/CreateAccountScreen';
import ForgotPassword from './src/Screens/ForgotPassword';
import GetStarted from './src/Screens/GetStarted';
import ProductsPage from './src/Screens/ProductsPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './src/Screens/Search';
import Settings from './src/Screens/Settings';
import Wishlist from './src/Screens/Wishlist';
import Cart from './src/Screens/Cart';

const Stack = createNativeStackNavigator();
const StackNavigator = ()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="LoginScreen" component={LoginScreen}  />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}  />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}  />
      <Stack.Screen name="GetStarted" component={GetStarted}  />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="ProductsPage" component={ProductsPage} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}