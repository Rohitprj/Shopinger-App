// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Settings() {
//   return (
//     <View>
//       <Text>Settings</Text>
//     </View>
//   )
// }

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {removeUserData} from '../utils/tokenStorage'; // Adjust the path as necessary for your project structure
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

export default function Settings() {
  const navigation = useNavigation(); // Get the navigation object

  const handleLogout = async () => {
    await removeUserData(); // Call the function to remove user data
    console.log('User logged out. Navigating to Home.');
    // After logging out, navigate back to the initial unauthenticated screen (e.g., Home or Login)
    // This will also trigger the App.js logic to re-check for token and redirect accordingly.
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}], // Navigate to the 'Home' screen, clearing the stack
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF6F00', // A distinct color for logout
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
