// axiosConfig.js
import axios from 'axios';

// 1. Create an Axios instance
//    - baseURL: The base URL for your API. This will be prepended to all relative URLs.
//      Replace 'YOUR_API_BASE_URL_HERE' with your actual API endpoint.
//    - timeout: The maximum time in milliseconds a request can take before being aborted.
//    - headers: Default headers to be sent with every request.
const axiosInstance = axios.create({
  baseURL: 'https://shopinger.co.in/api//', // IMPORTANT: Replace with your actual API base URL
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // You can add other default headers here, e.g., Authorization tokens if they are static
  },
});

// 2. Add a request interceptor
//    - This interceptor will be executed before every request is sent.
//    - It's commonly used to add authentication tokens (e.g., JWT) to the headers.
axiosInstance.interceptors.request.use(
  async (config) => {
    // Example: Get a token from AsyncStorage (or any other secure storage)
    // import AsyncStorage from '@react-native-async-storage/async-storage';
    // const token = await AsyncStorage.getItem('userToken');

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    console.log('Request Interceptor:', config);
    return config;
  },
  (error) => {
    // Do something with request error
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// 3. Add a response interceptor
//    - This interceptor will be executed for every response (both success and error).
//    - It's commonly used to handle global errors (e.g., 401 Unauthorized),
//      refresh tokens, or transform response data.
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lies in the range of 2xx cause this function to trigger.
    // Do something with response data
    console.log('Response Interceptor (Success):', response);
    return response;
  },
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger.
    // Do something with response error

    console.error('Response Interceptor (Error):', error.response || error.message);

    // Example: Handle 401 Unauthorized errors
    // if (error.response && error.response.status === 401) {
    //   // Redirect to login, refresh token, etc.
    //   console.log('Unauthorized request. Redirecting to login...');
    //   // You might want to navigate to a login screen or dispatch a logout action
    // }

    return Promise.reject(error);
  }
);

export default axiosInstance;

// How to use the instance in your React Native components/services:

// import api from './axiosConfig'; // Assuming axiosConfig.js is in the same directory or properly imported

// // Example GET request
// const fetchData = async () => {
//   try {
//     const response = await api.get('/users'); // This will hit YOUR_API_BASE_URL_HERE/users
//     console.log('Data:', response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// // Example POST request
// const postData = async (data) => {
//   try {
//     const response = await api.post('/products', data); // This will hit YOUR_API_BASE_URL_HERE/products
//     console.log('Posted data:', response.data);
//   } catch (error) {
//     console.error('Error posting data:', error);
//   }
// };

// // You can also use it directly in your functional components:
// // import React, { useEffect, useState } from 'react';
// // import { View, Text, Button } from 'react-native';
// // import api from './axiosConfig';

// // const MyComponent = () => {
// //   const [data, setData] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const loadData = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const response = await api.get('/items');
// //       setData(response.data);
// //     } catch (err) {
// //       setError(err.message || 'An error occurred');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadData();
// //   }, []);

// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Axios Instance Example</Text>
// //       {loading && <Text>Loading...</Text>}
// //       {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
// //       {data && <Text>Data: {JSON.stringify(data, null, 2)}</Text>}
// //       <Button title="Refresh Data" onPress={loadData} />
// //     </View>
// //   );
// // };

// // export default MyComponent;
