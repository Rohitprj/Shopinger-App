// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather'; // For eye icon
// import GoogleIcon from 'react-native-vector-icons/AntDesign'; // For Google icon
// import AppleIcon from 'react-native-vector-icons/FontAwesome'; // For Apple icon
// import FacebookIcon from 'react-native-vector-icons/FontAwesome'; // For Facebook icon

// const { width } = Dimensions.get('window');

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {
//     console.log('Login attempt:', { email, password });
//     // Implement your login logic here
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome Back!</Text>

//       <View style={styles.inputContainer}>
//         <Icon name="user" size={20} color="#888" style={styles.inputIcon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Username or Email"
//           placeholderTextColor="#999"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Icon name="lock" size={20} color="#888" style={styles.inputIcon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#999"
//           secureTextEntry={!showPassword}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
//           <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordButton}>
//         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate("GetStarted")}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>

//       <Text style={styles.orContinueWith}>- OR Continue with -</Text>

//       <View style={styles.socialButtonsContainer}>
//         <TouchableOpacity style={styles.socialButton}>
//           <GoogleIcon name="google" size={30} color="#DB4437" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.socialButton}>
//           <AppleIcon name="apple" size={30} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.socialButton}>
//           <FacebookIcon name="facebook" size={30} color="#4267B2" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.createAccountContainer}>
//         <Text style={styles.createAccountText}>Create An Account </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('CreateAccountScreen')}>
//           <Text style={styles.signUpText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   welcomeText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 40,
//     alignSelf: 'flex-start',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   inputIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: '#333',
//     fontSize: 16,
//   },
//   eyeIcon: {
//     padding: 5,
//   },
//   forgotPasswordButton: {
//     alignSelf: 'flex-end',
//     marginBottom: 30,
//   },
//   forgotPasswordText: {
//     color: '#FF6F00',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   loginButton: {
//     backgroundColor: '#FF6F00',
//     width: '100%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   orContinueWith: {
//     color: '#888',
//     fontSize: 16,
//     marginBottom: 30,
//   },
//   socialButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '70%',
//     marginBottom: 50,
//   },
//   socialButton: {
//     backgroundColor: '#f0f0f0',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   createAccountContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   createAccountText: {
//     color: '#666',
//     fontSize: 16,
//   },
//   signUpText: {
//     color: '#FF6F00',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator, // Import ActivityIndicator for loading state
  Alert, // Import Alert for user feedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // For eye icon
import GoogleIcon from 'react-native-vector-icons/AntDesign'; // For Google icon
import AppleIcon from 'react-native-vector-icons/FontAwesome'; // For Apple icon
import FacebookIcon from 'react-native-vector-icons/FontAwesome'; // For Facebook icon

// Import the axiosInstance from your axiosConfig.js file
import axiosInstance from '../utils/AxiosInstance'; // Adjust the path as per your project structure

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading indicator

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both username/email and password.');
      return;
    }

    setLoading(true); // Start loading

    try {
      // Prepare data for x-www-form-urlencoded
      // The API expects 'email' and 'password' in this format
      const requestBody = new URLSearchParams();
      requestBody.append('email', email);
      requestBody.append('password', password);

      const response = await axiosInstance.post('/public/user-login', requestBody.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      console.log('Login successful:', response.data);

      if (response.data.success) {
        Alert.alert('Success', 'Login successful!');
        // Navigate to the next screen upon successful login
        // Make sure 'GetStarted' is a valid route in your navigation stack
        navigation.navigate('GetStarted');
      } else {
        // Handle API success: false, but still a 200 OK response
        Alert.alert('Login Failed', response.data.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        Alert.alert('Login Failed', error.response.data.message || 'An error occurred during login. Please try again.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        Alert.alert('Network Error', 'No response from server. Please check your internet connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        Alert.alert('Error', error.message || 'An unexpected error occurred.');
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#888" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading} // Disable input when loading
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          editable={!loading} // Disable input when loading
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)} disabled={loading}>
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.orContinueWith}>- OR Continue with -</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <GoogleIcon name="google" size={30} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AppleIcon name="apple" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FacebookIcon name="facebook" size={30} color="#4267B2" />
        </TouchableOpacity>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>Create An Account </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccountScreen')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#333',
    fontSize: 16,
  },
  eyeIcon: {
    padding: 5,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#FF6F00',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#FF6F00',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orContinueWith: {
    color: '#888',
    fontSize: 16,
    marginBottom: 30,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    marginBottom: 50,
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  createAccountContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  createAccountText: {
    color: '#666',
    fontSize: 16,
  },
  signUpText: {
    color: '#FF6F00',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
