// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import React from 'react';
// import {removeUserData} from '../utils/tokenStorage'; // Adjust the path as necessary for your project structure
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

// export default function Settings() {
//   const navigation = useNavigation(); // Get the navigation object

//   const handleLogout = async () => {
//     await removeUserData();
//     console.log('User logged out. Navigating to Home.');

//     navigation.reset({
//       index: 0,
//       routes: [{name: 'Home'}], // Navigate to the 'Home' screen, clearing the stack
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Settings</Text>

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.logoutButtonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#333',
//   },
//   logoutButton: {
//     backgroundColor: '#FF6F00', // A distinct color for logout
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
// import React from 'react';
// import {removeUserData} from '../utils/tokenStorage'; // Adjust the path as necessary for your project structure
// import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

// export default function Settings() {
//   const navigation = useNavigation(); // Get the navigation object

//   const handleLogout = async () => {
//     await removeUserData();
//     console.log('User logged out. Navigating to Home.');

//     navigation.reset({
//       index: 0,
//       routes: [{name: 'Home'}], // Navigate to the 'Home' screen, clearing the stack
//     });
//   };

//   // Placeholder function for navigation to other sections
//   const navigateTo = (screenName) => {
//     console.log(`Navigating to ${screenName}`);
//     // Implement actual navigation logic here, e.g.:
//     // navigation.navigate(screenName);
//     // For now, we'll just log.
//     if (screenName === 'Addresses') {
//       navigation.navigate('AllAddresses'); // Assuming 'AllAddresses' is the correct screen name
//     } else {
//       // You can add navigation for 'Profile' and 'MyOrders' here
//       // For example: navigation.navigate('ProfileScreen');
//       // Alert.alert('Navigation', `Navigate to ${screenName} is not yet implemented.`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {/* Header/Title */}
//         <Text style={styles.headerTitle}>Profile</Text>

//         {/* Profile Card */}
//         <View style={styles.profileCard}>
//           <Image
//             source={{ uri: 'https://placehold.co/60x60/FF6F00/FFFFFF?text=👤' }} // Placeholder for user avatar
//             style={styles.avatar}
//           />
//           <View style={styles.profileInfo}>
//             <Text style={styles.profileName}>New</Text> {/* Replace with actual user name */}
//             <Text style={styles.profileEmail}>new@gmail.com</Text> {/* Replace with actual user email */}
//           </View>
//         </View>

//         {/* Menu Items Card */}
//         <View style={styles.menuCard}>
//           <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Profile')}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=👤' }} // Profile icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.menuItemText}>Profile</Text>
//           </TouchableOpacity>

//           <View style={styles.separator} />

//           <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ShoppingBag')}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=📦' }} // Orders icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.menuItemText}>My Orders</Text>
//           </TouchableOpacity>

//           <View style={styles.separator} />

//           <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AllAddresses')}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=📍' }} // Addresses icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.menuItemText}>Addresses</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Logout Button Card (or directly as a button) */}
//         <View style={styles.logoutCard}>
//           <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=➡️' }} // Logout icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.logoutButtonText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8', // Light background for the whole screen
//   },
//   scrollViewContent: {
//     padding: 20,
//     paddingTop: 50, // Adjust for status bar/header
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   profileCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30, // Makes it circular
//     marginRight: 15,
//     backgroundColor: '#FF6F00', // Placeholder background
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   profileEmail: {
//     fontSize: 14,
//     color: '#777',
//   },
//   menuCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden', // Ensures separator doesn't bleed outside
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//   },
//   menuIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 15,
//     tintColor: '#FF6F00', // Icon color
//   },
//   menuItemText: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1, // Allows text to take up remaining space
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#f0f0f0',
//     marginLeft: 54, // Align with text, past the icon
//   },
//   logoutCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   logoutButton: {
//     flexDirection: 'row', // To align icon and text
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFEFE0', // Light orange background for the logout button
//     borderRadius: 10, // Apply border radius to the button itself
//   },
//   logoutButtonText: {
//     color: '#FF6F00', // Orange text for logout
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 15, // Space between icon and text
//   },
// });

// import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, ActivityIndicator, Alert} from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import {removeUserData, getUserData} from '../utils/tokenStorage'; // Adjust the path as necessary
// import {useNavigation, useFocusEffect} from '@react-navigation/native';
// import axiosInstance from '../utils/AxiosInstance'; // Import axiosInstance

// export default function Settings() {
//   const navigation = useNavigation();
//   const [userName, setUserName] = useState('New'); // State for dynamic user name
//   const [userEmail, setUserEmail] = useState('new@gmail.com'); // State for dynamic user email
//   const [userPhone, setUserPhone] = useState(''); // State for dynamic user phone
//   const [loadingProfile, setLoadingProfile] = useState(true); // State for initial loading of profile info
//   const [updatingProfile, setUpdatingProfile] = useState(false); // State for update profile API call
//   const [profileError, setProfileError] = useState(null); // State for profile fetch/update error
//   const [showProfileEditForm, setShowProfileEditForm] = useState(false); // State to toggle profile edit form

//   // Function to fetch user profile data
//   const fetchUserProfile = useCallback(async () => {
//     setLoadingProfile(true);
//     setProfileError(null);
//     try {
//       const userData = await getUserData(); // Get token/user ID from local storage
//       if (userData && userData.token) {
//         const response = await axiosInstance.get('/web/get-user-details'); // API to get current user details
//         if (response.data && response.data.success) {
//           setUserName(response.data.user.name || 'User');
//           setUserEmail(response.data.user.email || 'user@example.com');
//           setUserPhone(response.data.user.phone || ''); // Set phone number
//         } else {
//           setProfileError(response.data.message || 'Failed to load profile.');
//           setUserName('Guest');
//           setUserEmail('guest@example.com');
//           setUserPhone('');
//         }
//       } else {
//         setProfileError('User not logged in.');
//         setUserName('Guest');
//         setUserEmail('guest@example.com');
//         setUserPhone('');
//       }
//     } catch (e) {
//       console.error('Error fetching user profile:', e);
//       setProfileError('Could not load profile data.');
//       setUserName('Guest');
//       setUserEmail('guest@example.com');
//       setUserPhone('');
//     } finally {
//       setLoadingProfile(false);
//     }
//   }, []);

//   // Use useFocusEffect to refetch profile data whenever the screen comes into focus
//   useFocusEffect(
//     useCallback(() => {
//       fetchUserProfile();
//       // Reset to main settings view when screen is focused
//       setShowProfileEditForm(false);
//       return () => {
//         // Optional cleanup if needed when screen loses focus
//       };
//     }, [fetchUserProfile])
//   );

//   const handleLogout = async () => {
//     await removeUserData();
//     console.log('User logged out. Navigating to Home.');

//     navigation.reset({
//       index: 0,
//       routes: [{name: 'Home'}], // Navigate to the 'Home' screen, clearing the stack
//     });
//   };

//   const handleUpdateProfile = async () => {
//     if (!userName.trim() || !userPhone.trim()) {
//       Alert.alert('Validation Error', 'Name and Phone cannot be empty.');
//       return;
//     }

//     setUpdatingProfile(true);
//     setProfileError(null);

//     try {
//       // Construct URL-encoded form data
//       const formData = new URLSearchParams();
//       formData.append('name', userName);
//       formData.append('phone', userPhone);

//       const response = await axiosInstance.put(
//         '/web/update-details', // Your API endpoint
//         formData.toString(), // Send as URL-encoded string
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             // Authorization header is typically handled by axiosInstance if configured
//             // otherwise, you'd add it here: 'Authorization': `Bearer ${userToken}`
//           },
//         }
//       );
//       console.log("Update details",response)
//       if (response.data && response.data.success) {
//         Alert.alert('Success', response.data.message || 'Profile updated successfully!');
//         // Refresh profile data after successful update
//         await fetchUserProfile();
//         setShowProfileEditForm(false); // Go back to main settings view
//       } else {
//         Alert.alert('Error', response.data.message || 'Failed to update profile. Please try again.');
//         setProfileError(response.data.message || 'Failed to update profile.');
//       }
//     } catch (e) {
//       console.error('Error updating profile:', e);
//       let errorMessage = 'Failed to update profile. Please try again.';
//       if (e.response) {
//         errorMessage = e.response.data?.message || `Server Error: ${e.response.status}`;
//       } else if (e.request) {
//         errorMessage = 'Network Error: No response from server. Check your internet connection.';
//       } else {
//         errorMessage = `Error: ${e.message}`;
//       }
//       Alert.alert('Update Failed', errorMessage);
//       setProfileError(errorMessage);
//     } finally {
//       setUpdatingProfile(false);
//     }
//   };

//   // Function for navigation to other sections
//   const navigateTo = (screenName) => {
//     console.log(`Navigating to ${screenName}`);
//     if (screenName === 'Profile') {
//       setShowProfileEditForm(true); // Show the profile edit form
//     } else if (screenName === 'MyOrders') {
//       navigation.navigate('ShoppingBag'); // Assuming ShoppingBag is for orders
//     } else if (screenName === 'Addresses') {
//       navigation.navigate('AllAddresses');
//     } else {
//       Alert.alert('Navigation', `Navigate to ${screenName} is not yet implemented.`);
//     }
//   };

//   if (loadingProfile) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#FF6F00" />
//         <Text style={styles.loadingText}>Loading profile...</Text>
//       </View>
//     );
//   }

//   // Conditional rendering based on showProfileEditForm state
//   if (showProfileEditForm) {
//     return (
//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollViewContent}>
//           <Text style={styles.headerTitle}>Edit Profile</Text>

//           {profileError && <Text style={styles.errorText}>{profileError}</Text>}

//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Name</Text>
//             <TextInput
//               style={styles.input}
//               value={userName}
//               onChangeText={setUserName}
//               placeholder="Enter your name"
//               placeholderTextColor="#999"
//             />
//           </View>

//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Phone</Text>
//             <TextInput
//               style={styles.input}
//               value={userPhone}
//               onChangeText={setUserPhone}
//               placeholder="Enter your phone number"
//               placeholderTextColor="#999"
//               keyboardType="phone-pad"
//             />
//           </View>

//           <TouchableOpacity
//             style={styles.updateButton}
//             onPress={handleUpdateProfile}
//             disabled={updatingProfile}>
//             {updatingProfile ? (
//               <ActivityIndicator color="#fff" size="small" />
//             ) : (
//               <Text style={styles.updateButtonText}>Update Profile</Text>
//             )}
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.cancelButton}
//             onPress={() => setShowProfileEditForm(false)}
//             disabled={updatingProfile}>
//             <Text style={styles.cancelButtonText}>Cancel</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     );
//   }

//   // Default Settings Menu View
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {/* Header/Title */}
//         <Text style={styles.headerTitle}>Settings</Text>

//         {/* Profile Card */}
//         <View style={styles.profileCard}>
//           <Image
//             source={{ uri: 'https://placehold.co/60x60/FF6F00/FFFFFF?text=👤' }} // Placeholder for user avatar
//             style={styles.avatar}
//           />
//           <View style={styles.profileInfo}>
//             <Text style={styles.profileName}>{userName}</Text>
//             <Text style={styles.profileEmail}>{userEmail}</Text>
//           </View>
//         </View>

//         {/* Menu Items Card */}
//         <View style={styles.menuCard}>
//           <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Profile')}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=👤' }} // Profile icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.menuItemText}>Profile</Text>
//           </TouchableOpacity>

//           <View style={styles.separator} />

//           <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('MyOrders')}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=📦' }} // Orders icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.menuItemText}>My Orders</Text>
//           </TouchableOpacity>

//           <View style={styles.separator} />

//           <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Addresses')}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=📍' }} // Addresses icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.menuItemText}>Addresses</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Logout Button Card (or directly as a button) */}
//         <View style={styles.logoutCard}>
//           <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//             <Image
//               source={{ uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=➡️' }} // Logout icon
//               style={styles.menuIcon}
//             />
//             <Text style={styles.logoutButtonText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8', // Light background for the whole screen
//   },
//   scrollViewContent: {
//     padding: 20,
//     paddingTop: 50, // Adjust for status bar/header
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   profileCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30, // Makes it circular
//     marginRight: 15,
//     backgroundColor: '#FF6F00', // Placeholder background
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   profileEmail: {
//     fontSize: 14,
//     color: '#777',
//   },
//   profileErrorText: {
//     fontSize: 14,
//     color: 'red',
//   },
//   menuCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden', // Ensures separator doesn't bleed outside
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//   },
//   menuIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 15,
//     tintColor: '#FF6F00', // Icon color
//   },
//   menuItemText: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1, // Allows text to take up remaining space
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#f0f0f0',
//     marginLeft: 54, // Align with text, past the icon
//   },
//   logoutCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 20, // Added margin for consistency
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   logoutButton: {
//     flexDirection: 'row', // To align icon and text
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFEFE0', // Light orange background for the logout button
//     borderRadius: 10, // Apply border radius to the button itself
//   },
//   logoutButtonText: {
//     color: '#FF6F00', // Orange text for logout
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 15, // Space between icon and text
//   },
//   // Styles for the profile edit form
//   formGroup: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 8,
//     fontWeight: '600',
//   },
//   input: {
//     width: '100%',
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     fontSize: 16,
//     color: '#333',
//     backgroundColor: '#fff',
//   },
//   updateButton: {
//     backgroundColor: '#FF6F00',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//     marginTop: 20,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   updateButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cancelButton: {
//     backgroundColor: '#ccc', // A neutral color for cancel
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//     marginTop: 10,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   cancelButtonText: {
//     color: '#333',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 20,
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#555',
//   },
// });

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {removeUserData, getUserData} from '../utils/tokenStorage'; // Adjust the path as necessary
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import axiosInstance from '../utils/AxiosInstance'; // Import axiosInstance
import Feather from 'react-native-vector-icons/Feather';
// import Icons from 'react-native-vector-icons/MaterialDesignIcons';

export default function Settings() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('New'); // State for dynamic user name
  const [userEmail, setUserEmail] = useState('new@gmail.com'); // State for dynamic user email
  const [userPhone, setUserPhone] = useState(''); // State for dynamic user phone
  const [loadingProfile, setLoadingProfile] = useState(true); // State for initial loading of profile info
  const [updatingProfile, setUpdatingProfile] = useState(false); // State for update profile API call
  const [profileError, setProfileError] = useState(null); // State for profile fetch/update error
  const [showProfileEditForm, setShowProfileEditForm] = useState(false); // State to toggle profile edit form

  // Function to fetch user profile data from local storage
  const fetchUserProfile = useCallback(async () => {
    setLoadingProfile(true);
    setProfileError(null);
    try {
      const userData = await getUserData(); // Get user data from AsyncStorage

      console.log(`User Data:`, userData);
      if (userData && userData.token) {
        // User is logged in, use data from AsyncStorage
        setUserEmail(userData.email || 'user@example.com');
        // Since 'name' is not in UserData, initialize userName from email or a default
        setUserName(userData.email ? userData.email.split('@')[0] : 'User');
        setUserPhone(''); // Phone is not in UserData, so initialize as empty
      } else {
        // User not logged in
        setProfileError('User not logged in.');
        setUserName('Guest');
        setUserEmail('guest@example.com');
        setUserPhone('');
      }
    } catch (e) {
      console.error('Error fetching user profile from AsyncStorage:', e);
      setProfileError('Could not load profile data from local storage.');
      setUserName('Guest');
      setUserEmail('guest@example.com');
      setUserPhone('');
    } finally {
      setLoadingProfile(false);
    }
  }, []);

  // Use useFocusEffect to refetch profile data whenever the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      fetchUserProfile();
      // Reset to main settings view when screen is focused
      setShowProfileEditForm(false);
      return () => {
        // Optional cleanup if needed when screen loses focus
      };
    }, [fetchUserProfile]),
  );

  const handleLogout = async () => {
    await removeUserData();
    console.log('User logged out. Navigating to Home.');

    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}], // Navigate to the 'Home' screen, clearing the stack
    });
  };

  const handleUpdateProfile = async () => {
    if (!userName.trim() || !userPhone.trim()) {
      Alert.alert('Validation Error', 'Name and Phone cannot be empty.');
      return;
    }

    setUpdatingProfile(true);
    setProfileError(null);

    try {
      // Construct URL-encoded form data
      const formData = new URLSearchParams();
      formData.append('name', userName);
      formData.append('phone', userPhone);

      const response = await axiosInstance.put(
        '/web/update-details', // Your API endpoint
        formData.toString(), // Send as URL-encoded string
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // Authorization header is typically handled by axiosInstance if configured
            // otherwise, you'd add it here: 'Authorization': `Bearer ${userToken}`
          },
        },
      );

      if (response.data && response.data.success) {
        Alert.alert(
          'Success',
          response.data.message || 'Profile updated successfully!',
        );
        // Refresh profile data after successful update
        await fetchUserProfile();
        setShowProfileEditForm(false); // Go back to main settings view
      } else {
        Alert.alert(
          'Error',
          response.data.message ||
            'Failed to update profile. Please try again.',
        );
        setProfileError(response.data.message || 'Failed to update profile.');
      }
    } catch (e) {
      console.error('Error updating profile:', e);
      let errorMessage = 'Failed to update profile. Please try again.';
      if (e.response) {
        errorMessage =
          e.response.data?.message || `Server Error: ${e.response.status}`;
      } else if (e.request) {
        errorMessage =
          'Network Error: No response from server. Check your internet connection.';
      } else {
        errorMessage = `Error: ${e.message}`;
      }
      Alert.alert('Update Failed', errorMessage);
      setProfileError(errorMessage);
    } finally {
      setUpdatingProfile(false);
    }
  };

  // Function for navigation to other sections
  const navigateTo = screenName => {
    console.log(`Navigating to ${screenName}`);
    if (screenName === 'Profile') {
      setShowProfileEditForm(true); // Show the profile edit form
    } else if (screenName === 'MyOrders') {
      navigation.navigate('ShoppingBag'); // Assuming ShoppingBag is for orders
    } else if (screenName === 'Addresses') {
      navigation.navigate('AllAddresses');
    } else if (screenName === 'Wishlist') {
      navigation.navigate('Wishlist');
    } else {
      Alert.alert(
        'Navigation',
        `Navigate to ${screenName} is not yet implemented.`,
      );
    }
  };

  if (loadingProfile) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6F00" />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  // Conditional rendering based on showProfileEditForm state
  if (showProfileEditForm) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.headerTitle}>Edit Profile</Text>

          {profileError && <Text style={styles.errorText}>{profileError}</Text>}

          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={userPhone}
              onChangeText={setUserPhone}
              placeholder="Enter your phone number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUpdateProfile}
            disabled={updatingProfile}>
            {updatingProfile ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.updateButtonText}>Update Profile</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setShowProfileEditForm(false)}
            disabled={updatingProfile}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  // Default Settings Menu View
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header/Title */}
        <Text style={styles.headerTitle}>Profile</Text>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={require('../../assets/images/Profile.png')}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userName}</Text>
            <Text style={styles.profileEmail}>{userEmail}</Text>
          </View>
        </View>

        {/* Menu Items Card */}
        <View style={styles.menuCard}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Profile')}>
            {/* <Image
              source={{uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=👤'}} // Profile icon
              style={styles.menuIcon}
            /> */}
            <Feather
              size={26}
              name="user"
              color="black"
              style={{right: 7, bottom: 1}}
            />
            <Text style={styles.menuItemText}>Profile</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('MyOrders')}>
            {/* <Image
              source={{uri: 'https://placehold.co/24x24/FF6F00/FFFFFF?text=📦'}} // Orders icon
              style={styles.menuIcon}
            /> */}
            <Feather
              size={26}
              name="shopping-bag"
              color="black"
              style={{right: 7, bottom: 1}}
            />
            <Text style={styles.menuItemText}>My Orders</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo('Addresses')}>
            <Feather
              size={26}
              name="plus"
              color="black"
              style={{right: 7, bottom: 1}}
            />
            <Text style={styles.menuItemText}>Addresses</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={{...styles.menuItem, left: 3}}
            onPress={() => navigation.navigate('Wishlist')}>
            <Feather
              size={26}
              name="heart"
              color="black"
              style={{right: 10, bottom: 1}}
            />
            <Text style={styles.menuItemText}>Wishlist</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button Card (or directly as a button) */}
        <View style={styles.logoutCard}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Feather
              size={26}
              name="log-out"
              color="black"
              style={{right: 10, bottom: 1}}
            />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Light background for the whole screen
  },
  scrollViewContent: {
    padding: 20,
    paddingTop: 50, // Adjust for status bar/header
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // Makes it circular
    marginRight: 15,
    backgroundColor: '#FF6F00', // Placeholder background
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  profileErrorText: {
    fontSize: 14,
    color: 'red',
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden', // Ensures separator doesn't bleed outside
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    tintColor: '#FF6F00', // Icon color
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    flex: 1, // Allows text to take up remaining space
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 24, // Align with text, past the icon
  },
  logoutCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20, // Added margin for consistency
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  logoutButton: {
    flexDirection: 'row', // To align icon and text
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFEFE0', // Light orange background for the logout button
    borderRadius: 10, // Apply border radius to the button itself
  },
  logoutButtonText: {
    color: '#FF6F00', // Orange text for logout
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15, // Space between icon and text
  },
  // Styles for the profile edit form
  formGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  updateButton: {
    backgroundColor: '#FF6F00',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc', // A neutral color for cancel
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});
