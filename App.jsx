// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/Screens/Home';
// import LoginScreen from './src/Screens/LoginScreen';
// import CreateAccountScreen from './src/Screens/CreateAccountScreen';
// import ForgotPassword from './src/Screens/ForgotPassword';
// import GetStarted from './src/Screens/GetStarted';
// import ProductsPage from './src/Screens/ProductsPage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Search from './src/Screens/Search';
// import Settings from './src/Screens/Settings';
// import Wishlist from './src/Screens/Wishlist';
// import Cart from './src/Screens/Cart';
// import ReviewsScreen from './src/Screens/Reviews';
// import AddReviewScreen from './src/Screens/AddReview';
// import CheckoutScreen from './src/Screens/Checkout';
// import CheckoutProduct from './src/Screens/CheckoutProduct';
// import StaticShoppingBagScreen from './src/Screens/ShoppingBag';
// import Payment from './src/Screens/Payment';
// import ProductAllData from './src/Screens/ProductAllData';
// import ProductDetails from './src/Screens/ProductDetails';

// const Stack = createNativeStackNavigator();
// const StackNavigator = ()=>{
//   return(
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Home" component={Home}  />
//       <Stack.Screen name="LoginScreen" component={LoginScreen}  />
//       <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen}  />
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword}  />
//       <Stack.Screen name="GetStarted" component={GetStarted}  />
//       <Stack.Screen name="MainTabs" component={TabNavigator} />
//       <Stack.Screen name="ProductAllData" component={ProductAllData} />
//       <Stack.Screen name="ProductDetails" component={ProductDetails} />
//       <Stack.Screen name="Reviews" component={ReviewsScreen} />
//       <Stack.Screen name="AddReview" component={AddReviewScreen} />
//       <Stack.Screen name="Checkout" component={CheckoutScreen} />
//       <Stack.Screen name="CheckoutProduct" component={CheckoutProduct} />
//       <Stack.Screen name="ShoppingBag" component={StaticShoppingBagScreen} />
//       <Stack.Screen name="Payment" component={Payment} />
//       </Stack.Navigator>
//   )
// }

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false}}>
//       <Tab.Screen name="ProductsPage" component={ProductsPage} />
//       <Tab.Screen name="Wishlist" component={Wishlist} />
//       <Tab.Screen name="Cart" component={Cart} />
//       <Tab.Screen name="Search" component={Search} />
//       <Tab.Screen name="Settings" component={Settings} />
//     </Tab.Navigator>
//   );
// };
// export default function App() {
//   return (
//     <NavigationContainer>
//       <StackNavigator/>
//     </NavigationContainer>
//   );
// }

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ActivityIndicator, View, StyleSheet} from 'react-native'; // Import for loading indicator

// Import your AsyncStorage utility
import {getUserData} from './src/utils/tokenStorage'; // Adjust path as necessary

// Import all your screens
import Home from './src/Screens/Home';
import LoginScreen from './src/Screens/LoginScreen';
import CreateAccountScreen from './src/Screens/CreateAccountScreen';
import ForgotPassword from './src/Screens/ForgotPassword';
import GetStarted from './src/Screens/GetStarted';
import ProductsPage from './src/Screens/ProductsPage';
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
import ProductAllData from './src/Screens/ProductAllData';
import ProductDetails from './src/Screens/ProductDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define your Tab Navigator
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

// Define your Stack Navigator
const StackNavigator = ({initialRouteName}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="ProductAllData" component={ProductAllData} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Reviews" component={ReviewsScreen} />
      <Stack.Screen name="AddReview" component={AddReviewScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="CheckoutProduct" component={CheckoutProduct} />
      <Stack.Screen name="ShoppingBag" component={StaticShoppingBagScreen} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [initialRoute, setInitialRoute] = useState('Home'); // Default to 'Home'
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const userData = await getUserData();
        if (userData && userData.token) {
          console.log('Token found:', userData.token);
          setInitialRoute('GetStarted'); // Set to GetStarted if token exists
        } else {
          console.log('No token found, starting with Home.');
          setInitialRoute('Home'); // Stay at Home if no token
        }
      } catch (e) {
        console.error('Failed to retrieve user data from AsyncStorage:', e);
        setInitialRoute('Home'); // Fallback to Home on error
      } finally {
        setIsLoading(false); // Done loading, ready to render navigation
      }
    };

    checkUserToken();
  }, []); // Run only once on component mount

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6F00" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StackNavigator initialRouteName={initialRoute} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
