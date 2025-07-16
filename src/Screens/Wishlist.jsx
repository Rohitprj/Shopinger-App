// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   FlatList, // Import FlatList
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const {width} = Dimensions.get('window');

// // Sample Product Data (replace with your actual data source)
// const PRODUCTS_DATA = [
//   {
//     id: '1',
//     image: require('../../assets/wishlist/jacket.png'), // Replace with your actual image path
//     title: 'Black Winter...',
//     description: "Autumn And Winter Casual Men's Solid Color Jacket",
//     price: '₹2,500',
//     rating: '4.5',
//     reviews: '2,092',
//   },
//   {
//     id: '2',
//     image: require('../../assets/wishlist/shirt.png'), // Replace with your actual image path
//     title: 'Mens Story',
//     description: 'Mens Story Casual Printed Shirt',
//     price: '₹999',
//     rating: '4.7',
//     reviews: '2,344',
//   },
//   {
//     id: '3',
//     image: require('../../assets/wishlist/bodycon.png'), // Replace with your actual image path
//     title: 'Black Dress',
//     description: 'Solid Plain Round Neck for Women, Black Dress',
//     price: '₹2,000',
//     rating: '4.6',
//     reviews: '3,245',
//   },
//   {
//     id: '4',
//     image: require('../../assets/wishlist/suit.png'),
//     title: 'Faux Brocade...',
//     description: 'LEHENGA CHOLI Readymade',
//     price: '₹1,900',
//     rating: '4.3',
//     reviews: '1,897',
//   },
//   {
//     id: '5',
//     image: require('../../assets/wishlist/skirt.png'),
//     title: 'Flare Dress',
//     description: 'Beautiful Pink & Dark Orange',
//     price: '₹1,880',
//     rating: '4.4',
//     reviews: '2,500',
//   },
//   {
//     id: '6',
//     image: require('../../assets/wishlist/shorts.png'),
//     title: 'denim drees',
//     description: 'Womens Denim Blue Dress Look',
//     price: '₹2,599',
//     rating: '4.5',
//     reviews: '2,534',
//   },
//   {
//     id: '7',
//     image: require('../../assets/wishlist/jordan.png'),
//     title: 'Jordan Stay',
//     description: 'New Design Jordan 10 for',
//     price: '₹8,000',
//     rating: '4.8',
//     reviews: '16,23,456',
//   },
//   {
//     id: '8',
//     image: require('../../assets/wishlist/mobile.png'),
//     title: 'Realme 7',
//     description: 'Realme 7 Pro (Mirror Blue, 8GB |',
//     price: '₹16,999',
//     rating: '4.2',
//     reviews: '2,345,987',
//   },
//   {
//     id: '9',
//     image: require('../../assets/wishlist/bodycon.png'),
//     title: 'Sony PS4',
//     description: 'Sony PlayStation 4 1TB Slim',
//     price: '₹31,900',
//     rating: '4.9',
//     reviews: '9,235,566',
//   },
//   {
//     id: '10',
//     image: require('../../assets/wishlist/jacket.png'),
//     title: 'Black Jacket 12...',
//     description: 'This mens and womens casual',
//     price: '₹2,500',
//     rating: '4.7',
//     reviews: '3,23,500',
//   },
//   {
//     id: '11',
//     image: require('../../assets/wishlist/jordan.png'),
//     title: 'D7200 Digital C...',
//     description: 'D7200E Digital Camera',
//     price: '₹20,000',
//     rating: '4.8',
//     reviews: '97,458',
//   },
//   {
//     id: '12',
//     image: require('../../assets/wishlist/bodycon.png'),
//     title: "men's & boys s...",
//     description: 'George Walker Derbys Brown',
//     price: '₹555',
//     rating: '4.3',
//     reviews: '1,43,879',
//   },
//   // Add more products as needed
// ];

// const ProductCard = ({item}) => (
//   <View style={styles.productCard}>
//     <Image source={item.image} style={styles.productImage} />
//     <Text style={styles.productTitle}>{item.title}</Text>
//     <Text style={styles.productDescription}>{item.description}</Text>
//     <Text style={styles.productPrice}>{item.price}</Text>
//     <View style={styles.ratingContainer}>
//       <Image
//         // source={require('./assets/star_icon.png')} // Make sure you have this icon
//         style={styles.starIcon}
//       />
//       <Text style={styles.ratingText}>{item.rating}</Text>
//       <Text style={styles.reviewCount}>({item.reviews})</Text>
//     </View>
//   </View>
// );

// const App = () => {
//   // You might want to rename this component, e.g., ProductsPage
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         {/* <TouchableOpacity>
//           <Image
//             // source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
//             style={styles.backArrowIcon}
//           />
//         </TouchableOpacity> */}
//         <Image
//           source={require('../../assets/images/logo.png')} // Replace with your logo path
//           style={styles.logo}
//         />
//         <View style={styles.headerRight}>
//           <TouchableOpacity style={styles.headerAvatarContainer}>
//             {/* <Text style={styles.headerAvatarText}>d</Text> */}
//             <Image
//               source={require('../../assets/images/Profile.png')} // Replace with your logo path
//               style={styles.logo}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Bar */}
//       {/* <View style={styles.searchContainer}>
//         <Image
//           // source={require('./assets/search_icon.png')} // Replace with your search icon
//           style={styles.searchIcon}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search any product..."
//           placeholderTextColor="#888"
//         />
//         <Image
//           // source={require('./assets/mic_icon.png')} // Replace with your mic icon
//           style={styles.micIcon}
//         />
//       </View> */}

//       {/* Items Count and Filters */}
//       {/* <View style={styles.filterBar}>
//         <Text style={styles.itemsCount}>5,2082+ Items</Text>
//         <View style={styles.filterActions}>
//           <TouchableOpacity style={styles.filterButton}>
//             <Image
//               // source={require('./assets/sort_icon.png')} // Replace with your sort icon
//               style={styles.filterIcon}
//             />
//             <Text style={styles.filterText}>Sort ↑↓</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.filterButton}>
//             <Image
//               // source={require('./assets/filter_icon.png')} // Replace with your filter icon
//               style={styles.filterIcon}
//             />
//             <Text style={styles.filterText}>Filter</Text>
//           </TouchableOpacity>
//         </View>
//       </View> */}

//       {/* Product Grid using FlatList */}
//       <FlatList
//         data={PRODUCTS_DATA}
//         renderItem={({item}) => <ProductCard item={item} />}
//         keyExtractor={item => item.id}
//         numColumns={2} // Display 2 columns
//         columnWrapperStyle={styles.row} // Style for rows
//         contentContainerStyle={styles.flatListContent}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#fff',
//   },
//   backArrowIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//   },
//   logo: {
//     width: 100,
//     height: 30,
//     resizeMode: 'contain',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerIconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   headerIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//   },
//   headerAvatarContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerAvatarText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginHorizontal: 15,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//     marginBottom: 10,
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: '#333',
//   },
//   micIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     marginLeft: 10,
//   },
//   filterBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     marginBottom: 15,
//   },
//   itemsCount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   filterActions: {
//     flexDirection: 'row',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginLeft: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   filterIcon: {
//     width: 15,
//     height: 15,
//     resizeMode: 'contain',
//     marginRight: 5,
//     tintColor: '#555',
//   },
//   filterText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   flatListContent: {
//     paddingHorizontal: 15, // Padding for the FlatList content
//     paddingBottom: 20, // Add some bottom padding to make space for the banner and potentially bottom tabs
//   },
//   row: {
//     justifyContent: 'space-between',
//     marginBottom: 15, // Margin between rows
//   },
//   productCard: {
//     width: (width - 45) / 2, // Calculate width for 2 columns with spacing
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 120,
//     resizeMode: 'contain',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   productDescription: {
//     fontSize: 11,
//     color: '#777',
//     marginBottom: 8,
//     minHeight: 30, // To ensure consistent height for description and prevent layout shifts
//   },
//   productPrice: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#ff6600',
//     marginBottom: 5,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   starIcon: {
//     width: 12,
//     height: 12,
//     resizeMode: 'contain',
//     marginRight: 3,
//   },
//   ratingText: {
//     fontSize: 12,
//     color: '#777',
//     marginRight: 5,
//   },
//   reviewCount: {
//     fontSize: 11,
//     color: '#999',
//   },
//   bottomPromoBanner: {
//     width: width - 30, // Match the width of the FlatList content area
//     height: 150, // Adjust height as per your image
//     resizeMode: 'contain',
//     borderRadius: 10,
//     marginTop: 20, // Space above the banner
//     marginBottom: 20, // Space below the banner before the end of the scroll view
//     alignSelf: 'center', // Center the banner
//   },
// });

// export default App; // Or your new component name like ProductsScreen

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   FlatList, // Import FlatList
//   ActivityIndicator, // Import ActivityIndicator for loading state
//   Alert, // Import Alert for error handling
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import axiosInstance from '../utils/AxiosInstance';
// // Adjust this path to your axiosInstance

// const {width} = Dimensions.get('window');

// const ProductCard = ({item}) => (
//   <View style={styles.productCard}>
//     <Image
//       source={{uri: item.image}} // Assuming item.image is a URL from the API
//       style={styles.productImage}
//     />
//     <Text style={styles.productTitle}>{item.title}</Text>
//     <Text style={styles.productDescription}>{item.description}</Text>
//     <Text style={styles.productPrice}>{item.price}</Text>
//     <View style={styles.ratingContainer}>
//       <Image
//         // source={require('../../assets/star_icon.png')} // Make sure you have this icon
//         style={styles.starIcon}
//       />
//       <Text style={styles.ratingText}>{item.rating}</Text>
//       <Text style={styles.reviewCount}>({item.reviews})</Text>
//     </View>
//   </View>
// );

// const WishlistScreen = () => {
//   const [wishlistData, setWishlistData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         setLoading(true);
//         const response = await axiosInstance.get('/web/get-wishlist');

//         console.log('Wishlist Data', JSON.stringify(response, null, 2));
//         // Assuming the API response has a 'data' field containing the array of wishlist items
//         setWishlistData(response.data.data); // Adjust according to your actual API response structure
//       } catch (err) {
//         setError(err);
//         console.error('Failed to fetch wishlist:', err);
//         Alert.alert(
//           'Error',
//           'Failed to load wishlist. Please try again later.',
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWishlist();
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   if (loading) {
//     return (
//       <SafeAreaView style={[styles.safeArea, styles.loadingContainer]}>
//         <ActivityIndicator size="large" color="#ff6600" />
//         <Text>Loading Wishlist...</Text>
//       </SafeAreaView>
//     );
//   }

//   if (error) {
//     return (
//       <SafeAreaView style={[styles.safeArea, styles.errorContainer]}>
//         <Text style={styles.errorText}>Error: {error.message}</Text>
//         <TouchableOpacity
//           style={styles.retryButton}
//           onPress={() => fetchWishlist()}>
//           <Text style={styles.retryButtonText}>Retry</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         {/* <TouchableOpacity>
//           <Image
//             // source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
//             style={styles.backArrowIcon}
//           />
//         </TouchableOpacity> */}
//         <Image
//           source={require('../../assets/images/logo.png')} // Replace with your logo path
//           style={styles.logo}
//         />
//         <View style={styles.headerRight}>
//           <TouchableOpacity style={styles.headerAvatarContainer}>
//             {/* <Text style={styles.headerAvatarText}>d</Text> */}
//             <Image
//               source={require('../../assets/images/Profile.png')} // Replace with your logo path
//               style={styles.logo}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Search Bar */}
//       {/* <View style={styles.searchContainer}>
//         <Image
//           // source={require('./assets/search_icon.png')} // Replace with your search icon
//           style={styles.searchIcon}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search any product..."
//           placeholderTextColor="#888"
//         />
//         <Image
//           // source={require('./assets/mic_icon.png')} // Replace with your mic icon
//           style={styles.micIcon}
//         />
//       </View> */}

//       {/* Items Count and Filters */}
//       {/* <View style={styles.filterBar}>
//         <Text style={styles.itemsCount}>5,2082+ Items</Text>
//         <View style={styles.filterActions}>
//           <TouchableOpacity style={styles.filterButton}>
//             <Image
//               // source={require('./assets/sort_icon.png')} // Replace with your sort icon
//               style={styles.filterIcon}
//             />
//             <Text style={styles.filterText}>Sort ↑↓</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.filterButton}>
//             <Image
//               // source={require('./assets/filter_icon.png')} // Replace with your filter icon
//               style={styles.filterIcon}
//             />
//             <Text style={styles.filterText}>Filter</Text>
//           </TouchableOpacity>
//         </View>
//       </View> */}

//       {/* Product Grid using FlatList */}
//       {wishlistData.length > 0 ? (
//         <FlatList
//           data={wishlistData}
//           renderItem={({item}) => <ProductCard item={item} />}
//           keyExtractor={item => item.id.toString()} // Ensure key is a string and unique
//           numColumns={2} // Display 2 columns
//           columnWrapperStyle={styles.row} // Style for rows
//           contentContainerStyle={styles.flatListContent}
//           showsVerticalScrollIndicator={false}
//         />
//       ) : (
//         <View style={styles.emptyWishlistContainer}>
//           <Text style={styles.emptyWishlistText}>Your wishlist is empty.</Text>
//           <Text style={styles.emptyWishlistSubText}>
//             Add some products you love!
//           </Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   retryButton: {
//     backgroundColor: '#ff6600',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#fff',
//   },
//   backArrowIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//   },
//   logo: {
//     width: 100,
//     height: 30,
//     resizeMode: 'contain',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerIconContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   headerIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//   },
//   headerAvatarContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#f0f0f0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerAvatarText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginHorizontal: 15,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//     marginBottom: 10,
//   },
//   searchIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: '#333',
//   },
//   micIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     marginLeft: 10,
//   },
//   filterBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     marginBottom: 15,
//   },
//   itemsCount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   filterActions: {
//     flexDirection: 'row',
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginLeft: 10,
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   filterIcon: {
//     width: 15,
//     height: 15,
//     resizeMode: 'contain',
//     marginRight: 5,
//     tintColor: '#555',
//   },
//   filterText: {
//     fontSize: 14,
//     color: '#555',
//   },
//   flatListContent: {
//     paddingHorizontal: 15, // Padding for the FlatList content
//     paddingBottom: 20, // Add some bottom padding to make space for the banner and potentially bottom tabs
//   },
//   row: {
//     justifyContent: 'space-between',
//     marginBottom: 15, // Margin between rows
//   },
//   productCard: {
//     width: (width - 45) / 2, // Calculate width for 2 columns with spacing
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 120,
//     resizeMode: 'contain',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   productTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   productDescription: {
//     fontSize: 11,
//     color: '#777',
//     marginBottom: 8,
//     minHeight: 30, // To ensure consistent height for description and prevent layout shifts
//   },
//   productPrice: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#ff6600',
//     marginBottom: 5,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   starIcon: {
//     width: 12,
//     height: 12,
//     resizeMode: 'contain',
//     marginRight: 3,
//   },
//   ratingText: {
//     fontSize: 12,
//     color: '#777',
//     marginRight: 5,
//   },
//   reviewCount: {
//     fontSize: 11,
//     color: '#999',
//   },
//   bottomPromoBanner: {
//     width: width - 30, // Match the width of the FlatList content area
//     height: 150, // Adjust height as per your image
//     resizeMode: 'contain',
//     borderRadius: 10,
//     marginTop: 20, // Space above the banner
//     marginBottom: 20, // Space below the banner before the end of the scroll view
//     alignSelf: 'center', // Center the banner
//   },
//   emptyWishlistContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emptyWishlistText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 10,
//   },
//   emptyWishlistSubText: {
//     fontSize: 14,
//     color: '#888',
//     textAlign: 'center',
//   },
// });

// export default WishlistScreen;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList, // Import FlatList
  ActivityIndicator, // Import ActivityIndicator for loading state
  Alert, // Import Alert for error handling
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axiosInstance from '../utils/AxiosInstance';
// Adjust this path to your axiosInstance

const {width} = Dimensions.get('window');

// Base URL for images
const IMAGE_BASE_URL = 'https://shopinger.co.in';

const ProductCard = ({item}) => {
  // Extracting data from the item object based on the API structure
  const imageUrl =
    item.variants &&
    item.variants.length > 0 &&
    item.variants[0].images.length > 0
      ? `${IMAGE_BASE_URL}${item.variants[0].images[0]}`
      : 'https://via.placeholder.com/120'; // Placeholder if no image is available

  const price =
    item.variants && item.variants.length > 0
      ? `₹${item.variants[0].price}`
      : 'N/A';

  const categoryText = `${item.mainCategory.name} • ${item.subCategory.name}`;
  const stockStatus =
    item.variants && item.variants.length > 0 && item.variants[0].stock > 0
      ? 'In Stock'
      : 'Out of Stock';

  const rating = '4.5'; // Static as per the original component, or remove
  const reviews = '2,092'; // Static as per the original component, or remove

  return (
    <View style={styles.productCard}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.productImage} />
      </View>
      <Text style={styles.productTitle} numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text style={styles.productCategory}>{categoryText}</Text>
      <View style={styles.priceStockContainer}>
        <Text style={styles.productPrice}>{price}</Text>
        <Text
          style={[
            styles.stockStatus,
            {color: stockStatus === 'In Stock' ? 'green' : 'red'},
          ]}>
          {stockStatus}
        </Text>
      </View>
    </View>
  );
};

const WishlistScreen = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/web/get-wishlist');
        // The actual product data is inside response.data.data
        setWishlistData(response.data.data);
      } catch (err) {
        setError(err);
        console.error('Failed to fetch wishlist:', err);
        Alert.alert(
          'Error',
          'Failed to load wishlist. Please try again later.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#ff6600" />
        <Text>Loading Wishlist...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.safeArea, styles.errorContainer]}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => fetchWishlist()}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <Image
            // source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
            style={styles.backArrowIcon}
          />
        </TouchableOpacity> */}
        <Image
          source={require('../../assets/images/logo.png')} // Replace with your logo path
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerAvatarContainer}>
            {/* <Text style={styles.headerAvatarText}>d</Text> */}
            <Image
              source={require('../../assets/images/Profile.png')} // Replace with your logo path
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      {/* <View style={styles.searchContainer}>
        <Image
          // source={require('./assets/search_icon.png')} // Replace with your search icon
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search any product..."
          placeholderTextColor="#888"
        />
        <Image
          // source={require('./assets/mic_icon.png')} // Replace with your mic icon
          style={styles.micIcon}
        />
      </View> */}

      {/* Items Count and Filters */}
      {/* <View style={styles.filterBar}>
        <Text style={styles.itemsCount}>5,2082+ Items</Text>
        <View style={styles.filterActions}>
          <TouchableOpacity style={styles.filterButton}>
            <Image
              // source={require('./assets/sort_icon.png')} // Replace with your sort icon
              style={styles.filterIcon}
            />
            <Text style={styles.filterText}>Sort ↑↓</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Image
              // source={require('./assets/filter_icon.png')} // Replace with your filter icon
              style={styles.filterIcon}
            />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Product Grid using FlatList */}
      {wishlistData.length > 0 ? (
        <FlatList
          data={wishlistData}
          renderItem={({item}) => <ProductCard item={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyWishlistContainer}>
          <Text style={styles.emptyWishlistText}>Your wishlist is empty.</Text>
          <Text style={styles.emptyWishlistSubText}>
            Add some products you love!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  backArrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  headerIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headerAvatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  micIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  itemsCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  filterActions: {
    flexDirection: 'row',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  filterIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor: '#555',
  },
  filterText: {
    fontSize: 14,
    color: '#555',
  },
  flatListContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productCard: {
    width: (width - 45) / 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden', // Ensures image and heart icon stay within bounds
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'red', // You can change the color of the heart
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    minHeight: 36, // Ensure consistent height for titles across cards
  },
  productCategory: {
    fontSize: 11,
    color: '#777',
    marginBottom: 8,
  },
  priceStockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  stockStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    color: '#777',
    marginRight: 5,
  },
  reviewCount: {
    fontSize: 11,
    color: '#999',
  },
  emptyWishlistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyWishlistText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  emptyWishlistSubText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default WishlistScreen;
