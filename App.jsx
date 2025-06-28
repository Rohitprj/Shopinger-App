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
import ReviewsScreen from './src/Screens/Reviews';
import AddReviewScreen from './src/Screens/AddReview';
import CheckoutScreen from './src/Screens/Checkout';
import CheckoutProduct from './src/Screens/CheckoutProduct';
import StaticShoppingBagScreen from './src/Screens/ShoppingBag';
import Payment from './src/Screens/Payment';

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
      <Stack.Screen name="Reviews" component={ReviewsScreen} />
      <Stack.Screen name="AddReview" component={AddReviewScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="CheckoutProduct" component={CheckoutProduct} />
      <Stack.Screen name="ShoppingBag" component={StaticShoppingBagScreen} />
      <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
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