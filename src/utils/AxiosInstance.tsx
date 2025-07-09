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
    Accept: 'application/json',
    // You can add other default headers here, e.g., Authorization tokens if they are static
  },
});

// 2. Add a request interceptor
//    - This interceptor will be executed before every request is sent.
//    - It's commonly used to add authentication tokens (e.g., JWT) to the headers.
axiosInstance.interceptors.request.use(
  async config => {
    // Example: Get a token from AsyncStorage (or any other secure storage)
    // import AsyncStorage from '@react-native-async-storage/async-storage';
    // const token = await AsyncStorage.getItem('userToken');

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    console.log('Request Interceptor:', config);
    return config;
  },
  error => {
    // Do something with request error
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

// 3. Add a response interceptor
//    - This interceptor will be executed for every response (both success and error).
//    - It's commonly used to handle global errors (e.g., 401 Unauthorized),
//      refresh tokens, or transform response data.
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lies in the range of 2xx cause this function to trigger.
    // Do something with response data
    console.log('Response Interceptor (Success):', response);
    return response;
  },
  async error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger.
    // Do something with response error

    console.error(
      'Response Interceptor (Error):',
      error.response || error.message,
    );

    // Example: Handle 401 Unauthorized errors
    // if (error.response && error.response.status === 401) {
    //   // Redirect to login, refresh token, etc.
    //   console.log('Unauthorized request. Redirecting to login...');
    //   // You might want to navigate to a login screen or dispatch a logout action
    // }

    return Promise.reject(error);
  },
);

export default axiosInstance;
