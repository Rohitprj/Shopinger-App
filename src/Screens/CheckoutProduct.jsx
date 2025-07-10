// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   Dimensions,
//   TouchableOpacity,
//   ActivityIndicator, // For loading state
//   Alert, // For error messages
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import RazorpayCheckout from 'react-native-razorpay'; // Import Razorpay SDK

// import axiosInstance from '../utils/AxiosInstance'; // Your configured axios instance

// const {width} = Dimensions.get('window');

// // --- IMPORTANT: Define your image base URL here directly ---
// // This will be used if your API's cart items ever include image paths.
// const IMAGE_BASE_URL = 'https://shopinger.co.in'; // Verify this is your actual image base URL

// // Static Data for cart items (used as fallback if API returns no items or fails)
// const STATIC_CART_ITEMS_DATA = [
//   {
//     id: '1',
//     image: require('../../assets/wishlist/shirt.png'), // Local image asset
//     name: "Men's Tie-Dye T-Shirt",
//     brand: 'Nike Sportswear',
//     price: '1599', // Example price as string
//     quantity: 1,
//   },
//   {
//     id: '2',
//     image: require('../../assets/wishlist/jacket.png'), // Local image asset
//     name: "Men's Tie-Dye T-Shirt",
//     brand: 'Nike Sportswear',
//     price: '1499', // Example price as string
//     quantity: 1,
//   },
// ];

// // --- MOCK API FUNCTIONS (REPLACE WITH YOUR ACTUAL BACKEND CALLS) ---
// // In a real app, these would make API calls to your backend for security.
// const buyProduct = async (isTest = false) => {
//   // Simulate an API call to your backend to create a Razorpay Order
//   // Your backend should return an order object with an 'id', amount, currency, etc.
//   console.log('Calling backend to create Razorpay Order...');
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         razorpayOrder: {
//           id: 'order_abcdef12345678', // **Replace with a real order ID from your backend**
//           amount: 50000, // in paise, e.g., 500.00 INR
//           currency: 'INR',
//         },
//       });
//     }, 1500); // Simulate network delay
//   });
// };

// const VerifyOrderPayment = async (orderId, paymentId, signature) => {
//   // Simulate an API call to your backend to verify the payment
//   // Your backend MUST verify the signature for security reasons.
//   console.log('Calling backend to verify payment:', {
//     orderId,
//     paymentId,
//     signature,
//   });
//   return new Promise(resolve => {
//     setTimeout(() => {
//       // In a real app, your backend would return success/failure based on signature verification
//       resolve({success: true, message: 'Payment verified successfully!'});
//     }, 2000); // Simulate network delay
//   });
// };
// // --- END MOCK API FUNCTIONS ---

// const CheckoutCartItem = ({item}) => {
//   // Determine image source based on whether it's a local require or a remote URI
//   const imageSource =
//     typeof item.image === 'number'
//       ? item.image // For local assets (e.g., require('../../assets/...'))
//       : {
//           uri: item.image
//             ? `${IMAGE_BASE_URL}${item.image}`
//             : 'https://placehold.co/80x80/E0E0E0/555555?text=No+Image',
//         };
//   // For remote URLs (assuming item.image would be a path like '/uploads/...')

//   // Extract product details. If your API's 'items' array gets populated,
//   // it might have 'product.name', 'product.vendor.name', 'product.variants[0].price' etc.
//   // For now, we use the structure of STATIC_CART_ITEMS_DATA
//   const productName = item.name || 'Unknown Product';
//   const brandName = item.brand || 'Unknown Brand';
//   const price = item.price ? parseFloat(item.price).toFixed(2) : '0.00';
//   const quantity = item.quantity || 1;

//   return (
//     <View style={styles.cartItemCard}>
//       <Image source={imageSource} style={styles.cartItemImage} />
//       <View style={styles.cartItemDetails}>
//         <Text style={styles.cartItemName}>{productName}</Text>
//         <Text style={styles.cartItemBrand}>{brandName}</Text>
//         <Text style={styles.cartItemPrice}>₹{price}</Text>
//         <View style={styles.quantityControls}>
//           {/* Static quantity controls - no interaction logic */}
//           <View style={styles.quantityButton}>
//             <Text style={styles.quantityButtonText}>-</Text>
//           </View>
//           <Text style={styles.quantityText}>{quantity}</Text>
//           <View style={styles.quantityButton}>
//             <Text style={styles.quantityButtonText}>+</Text>
//           </View>
//         </View>
//       </View>
//       {/* Static delete icon - no interaction */}
//       <Image
//         source={{
//           uri: 'https://placehold.co/24x24/999999/FFFFFF?text=X',
//         }} // Placeholder delete icon
//         style={styles.deleteIcon}
//       />
//     </View>
//   );
// };

// const CheckoutPage = ({navigation}) => {
//   const [cartItemsToDisplay, setCartItemsToDisplay] = useState(
//     STATIC_CART_ITEMS_DATA,
//   );
//   const [cartSummary, setCartSummary] = useState({
//     subtotal: 0,
//     platformFee: 0,
//     gst: 0,
//     deliveryFee: 0,
//     totalAmount: 0,
//   });
//   const [loadingCart, setLoadingCart] = useState(true); // Loading state for cart data
//   const [isPaying, setIsPaying] = useState(false); // Loading state for payment process
//   const [error, setError] = useState(null);

//   // You will likely fetch currency and RazorpayKeyId from your backend/config API
//   const [currencyConfig, setCurrencyConfig] = useState({
//     applicationData: {
//       currency: 'INR', // Default currency, set by your backend
//       // **IMPORTANT: REPLACE WITH YOUR ACTUAL RAZORPAY TEST KEY ID**
//       // For production, this should be fetched securely from your backend, never hardcoded.
//       razorpayKeyId: 'rzp_live_ykAW0WN2mvhAjJ',
//       // razorpayKeyId: 'rzp_test_YOUR_RAZORPAY_KEY_ID',
//     },
//   });

//   const fetchCartData = async () => {
//     setLoadingCart(true);
//     setError(null);
//     try {
//       // Simplified API call - no authentication check here as requested
//       const response = await axiosInstance.get('/web/get-cart');

//       if (response.data) {
//         const apiCartData = response.data;

//         // Update summary with API data
//         setCartSummary({
//           subtotal: apiCartData.summary?.subtotal || 0,
//           platformFee: apiCartData.otherCharges?.plateformfee || 0,
//           gst: apiCartData.otherCharges?.gst || 0,
//           deliveryFee: apiCartData.otherCharges?.deliveryFee || 0,
//           totalAmount: apiCartData.totalAmountafterCharges || 0,
//         });

//         // If API returns items, use them; otherwise, keep static data
//         if (apiCartData.items && apiCartData.items.length > 0) {
//           // You might need to map API items to your CheckoutCartItem component's expected format
//           setCartItemsToDisplay(
//             apiCartData.items.map(item => ({
//               id: item._id, // Assuming _id from MongoDB
//               image: item.product?.productImage[0]?.filePath, // Adjust based on your API structure
//               name: item.product?.productName,
//               brand: item.product?.brand?.name || 'Generic', // Adjust based on your API structure
//               price: item.product?.price, // Assuming price directly
//               quantity: item.quantity,
//             })),
//           );
//         } else {
//           setCartItemsToDisplay(STATIC_CART_ITEMS_DATA); // Fallback to static if no items
//         }
//       } else {
//         setError('Failed to fetch cart data: No data in response.');
//         setCartItemsToDisplay(STATIC_CART_ITEMS_DATA); // Fallback to static on no response data
//       }
//     } catch (e) {
//       console.error('Error fetching cart data:', e);
//       let errorMessage = 'Could not load cart. Displaying static data.';
//       if (e.response) {
//         errorMessage =
//           e.response.data?.message || `Server Error: ${e.response.status}`;
//       } else if (e.request) {
//         errorMessage = 'Network Error: No response from server.';
//       } else {
//         errorMessage = `Error: ${e.message}`;
//       }
//       setError(errorMessage);
//       setCartItemsToDisplay(STATIC_CART_ITEMS_DATA); // Fallback to static on error
//     } finally {
//       setLoadingCart(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//     // In a real app, you might also fetch Razorpay config (key, currency) here
//     // from your backend.
//   }, []); // Fetch cart data on component mount

//   const handleBuyPress = async amount => {
//     // Basic validation for Razorpay Key
//     if (
//       !currencyConfig.applicationData.razorpayKeyId ||
//       currencyConfig.applicationData.razorpayKeyId ===
//         'rzp_test_YOUR_RAZORPAY_KEY_ID'
//     ) {
//       Alert.alert(
//         'Configuration Error',
//         'Please set your actual Razorpay Key ID in the code or fetch it from your backend.',
//       );
//       return;
//     }

//     setIsPaying(true); // Start payment loading indicator
//     try {
//       // Step 1: Call your backend to create a Razorpay Order
//       // The `buyProduct` function here is a mock; replace with your actual API call.
//       const res = await buyProduct(false);
//       const orderId = res?.razorpayOrder?.id;
//       const pricex = Number(amount * 100); // Amount in smallest currency unit (e.g., paise for INR)

//       if (!orderId) {
//         Alert.alert(
//           'Payment Error',
//           'Failed to create Razorpay order on backend. Please try again.',
//         );
//         setIsPaying(false);
//         return;
//       }

//       // Step 2: Open Razorpay Checkout with the order ID from your backend
//       var options = {
//         description: 'Shopinger Purchase', // Dynamic description if needed
//         image:
//           'https://media.istockphoto.com/id/486326115/photo/bull-and-bear.webp?b=1&s=170667a&w=0&k=20&c=HMb-bQbmU5M-RVnU6NoPydkGjh0FEigULJcpwwA3z7g=',
//         currency: `${currencyConfig?.applicationData?.currency}`, // Use backticks for template literals
//         key: `${currencyConfig?.applicationData?.razorpayKeyId}`, // Use backticks for template literals
//         amount: pricex,
//         name: 'Shopinger E-Commerce',
//         order_id: orderId, // Crucial: Use the orderId received from your backend
//         prefill: {
//           email: 'customer@example.com', // Replace with actual user email from state/props
//           contact: '9876543210', // Replace with actual user contact from state/props
//           name: 'John Doe', // Replace with actual user name from state/props
//         },
//         theme: {color: '#ff6600'}, // Customize theme color to match your app
//       };

//       RazorpayCheckout.open(options)
//         .then(async data => {
//           // Payment was successful (user completed the payment flow)
//           if (data.razorpay_payment_id !== undefined) {
//             console.log('Razorpay Success Data:', data);
//             let rzpOrderId = data?.razorpay_order_id;
//             let paymentId = data?.razorpay_payment_id;
//             let signature = data?.razorpay_signature;

//             // Step 3: IMPORTANT - Verify the payment signature on your backend
//             // The `VerifyOrderPayment` function here is a mock; replace with your actual API call.
//             const verificationResult = await VerifyOrderPayment(
//               rzpOrderId,
//               paymentId,
//               signature,
//             );

//             if (verificationResult.success) {
//               Alert.alert('Payment Successful!', verificationResult.message);
//               // Navigate to a success screen or update UI
//               navigation.navigate('OrderSuccessScreen', {paymentId: paymentId}); // Example navigation
//             } else {
//               Alert.alert(
//                 'Payment Verification Failed',
//                 'There was an issue verifying your payment. Please contact support.',
//               );
//             }
//           } else {
//             // This path is less common if 'then' block is entered, but good for robustness
//             Alert.alert(
//               'Payment Cancelled',
//               'Payment process was interrupted.',
//             );
//           }
//         })
//         .catch(error => {
//           // Payment failed or was cancelled by the user
//           console.error(`Razorpay Error: ${error.code} - ${error.description}`);
//           Alert.alert('Payment Failed', `Error: ${error.description}`);
//         })
//         .finally(() => {
//           setIsPaying(false); // End payment loading indicator
//         });
//     } catch (error) {
//       console.error('Error initiating Razorpay flow:', error);
//       Alert.alert(
//         'Payment Initialization Error',
//         'Could not initiate payment. Please try again.',
//       );
//       setIsPaying(false); // End payment loading indicator
//     }
//   };

//   if (loadingCart) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#ff6600" />
//           <Text style={{marginTop: 10}}>Loading cart...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   if (cartItemsToDisplay.length === 0 && !loadingCart && !error) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.emptyCartContainer}>
//           <Text style={styles.emptyCartText}>Your cart is empty!</Text>
//           <TouchableOpacity
//             style={styles.browseButton}
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.browseButtonText}>Continue Shopping</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={{
//               uri: 'https://placehold.co/24x24/000000/FFFFFF?text=%3C',
//             }} // Placeholder back arrow icon
//             style={styles.backArrowIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Checkout</Text>
//         <View style={{width: 24}} /> {/* Spacer to balance header */}
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}>
//         {/* Display error message if any */}
//         {error && (
//           <View style={styles.errorBanner}>
//             <Text style={styles.errorBannerText}>{error}</Text>
//           </View>
//         )}

//         {/* Cart Items List - now uses cartItemsToDisplay which is either API data or static fallback */}
//         {cartItemsToDisplay.map(item => (
//           <CheckoutCartItem key={item.id} item={item} />
//         ))}

//         {/* Delivery Address - static block */}
//         {/* <View style={styles.infoBlock}>
//           <View style={styles.infoBlockHeader}>
//             <Text style={styles.infoBlockTitle}>Delivery Address</Text>
//             <Image
//               source={{
//                 uri: 'https://placehold.co/15x15/999999/FFFFFF?text=%3E',
//               }} // Placeholder arrow icon
//               style={styles.infoBlockArrow}
//             />
//           </View>
//           <View style={styles.infoBlockContent}>
//             <Image
//               source={{
//                 uri: 'https://placehold.co/24x24/ff6600/FFFFFF?text=P',
//               }} // Placeholder delivery pin icon
//               style={styles.infoBlockIcon}
//             />
//             <Text style={styles.infoBlockText}>
//               Chhatak, Sunamgonj 12/8AB{'\n'}Sylhet
//             </Text>
//             <Image
//               source={{
//                 uri: 'https://placehold.co/20x20/4CAF50/FFFFFF?text=%E2%9C%93',
//               }} // Placeholder checked icon
//               style={styles.checkedIcon}
//             />
//           </View>
//         </View> */}

//         {/* Payment Method - static block */}
//         {/* <View style={styles.infoBlock}>
//           <View style={styles.infoBlockHeader}>
//             <Text style={styles.infoBlockTitle}>Payment Method</Text>
//             <Image
//               source={{
//                 uri: 'https://placehold.co/15x15/999999/FFFFFF?text=%3E',
//               }} // Placeholder arrow icon
//               style={styles.infoBlockArrow}
//             />
//           </View>
//           <View style={styles.infoBlockContent}>
//             <Image
//               source={{
//                 uri: 'https://placehold.co/24x24/ff6600/FFFFFF?text=V',
//               }} // Placeholder Visa icon
//               style={styles.infoBlockIcon}
//             />
//             <Text style={styles.infoBlockText}>
//               Visa Classic{'\n'}**** 7690
//             </Text>
//             <Image
//               source={{
//                 uri: 'https://placehold.co/20x20/4CAF50/FFFFFF?text=%E2%9C%93',
//               }} // Placeholder checked icon
//               style={styles.checkedIcon}
//             />
//           </View>
//         </View> */}

//         {/* Order Info - dynamically calculated values from API response */}
//         <View style={styles.orderInfoContainer}>
//           <Text style={styles.orderInfoTitle}>Order Info</Text>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Subtotal</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.subtotal.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Platform Fee</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.platformFee.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>GST</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.gst.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Delivery Fee</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.deliveryFee.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.totalRow}>
//             <Text style={styles.totalLabel}>Total Amount</Text>
//             <Text style={styles.totalValue}>
//               ₹{cartSummary.totalAmount.toFixed(2)}
//             </Text>
//           </View>
//         </View>

//         {/* Proceed to Payment Button */}
//         <TouchableOpacity
//           style={styles.proceedButton}
//           onPress={() => handleBuyPress(cartSummary.totalAmount)} // Call Razorpay function
//           disabled={isPaying || loadingCart}>
//           {isPaying ? (
//             <ActivityIndicator color="#fff" size="small" />
//           ) : (
//             <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
//           )}
//         </TouchableOpacity>

//         <View style={{height: 40}} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     padding: 20,
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   retryButton: {
//     backgroundColor: '#ff6600',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   emptyCartContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     padding: 20,
//   },
//   emptyCartText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 20,
//   },
//   browseButton: {
//     backgroundColor: '#ff6600',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//   },
//   browseButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   backArrowIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//   },
//   cartItemCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//     alignItems: 'center',
//   },
//   cartItemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     resizeMode: 'contain',
//     marginRight: 15,
//   },
//   cartItemDetails: {
//     flex: 1,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   cartItemBrand: {
//     fontSize: 13,
//     color: '#777',
//     marginBottom: 5,
//   },
//   cartItemPrice: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   quantityControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 20,
//     paddingVertical: 5,
//     paddingHorizontal: 5,
//     alignSelf: 'flex-start',
//   },
//   quantityButton: {
//     backgroundColor: '#fff',
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   quantityButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   quantityText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginHorizontal: 15,
//   },
//   deleteIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//     tintColor: '#999',
//     marginLeft: 10,
//   },
//   infoBlock: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   infoBlockHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   infoBlockTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   infoBlockArrow: {
//     width: 15,
//     height: 15,
//     resizeMode: 'contain',
//     tintColor: '#999',
//   },
//   infoBlockContent: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   infoBlockIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//     marginRight: 10,
//     tintColor: '#ff6600',
//   },
//   infoBlockText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//     lineHeight: 20,
//   },
//   checkedIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     tintColor: '#4CAF50',
//     marginLeft: 10,
//   },
//   orderInfoContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   orderInfoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   orderInfoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   orderInfoLabel: {
//     fontSize: 14,
//     color: '#555',
//   },
//   orderInfoValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     marginTop: 10,
//   },
//   totalLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   totalValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#ff6600',
//   },
//   proceedButton: {
//     backgroundColor: '#ff6600',
//     borderRadius: 10,
//     paddingVertical: 18,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   proceedButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorBanner: {
//     backgroundColor: '#ffe0e0',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ff6666',
//   },
//   errorBannerText: {
//     color: '#cc0000',
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// export default CheckoutPage;

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   Dimensions,
//   TouchableOpacity,
//   ActivityIndicator, // For loading state
//   Alert, // For error messages
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import RazorpayCheckout from 'react-native-razorpay'; // Import Razorpay SDK

// import axiosInstance from '../utils/AxiosInstance'; // Your configured axios instance
// // Import the mock API functions
// import {
//   createMockRazorpayOrder,
//   verifyMockRazorpayPayment,
// } from '../utils/mock';

// const {width} = Dimensions.get('window');

// // --- IMPORTANT: Define your image base URL here directly ---
// const IMAGE_BASE_URL = 'https://shopinger.co.in';

// // Static Data for cart items (used as fallback if API returns no items or fails)
// const STATIC_CART_ITEMS_DATA = [
//   {
//     id: '1',
//     image: require('../../assets/wishlist/shirt.png'), // Local image asset
//     name: "Men's Tie-Dye T-Shirt",
//     brand: 'Nike Sportswear',
//     price: '1599', // Example price as string
//     quantity: 1,
//   },
//   {
//     id: '2',
//     image: require('../../assets/wishlist/jacket.png'), // Local image asset
//     name: "Men's Tie-Dye T-Shirt",
//     brand: 'Nike Sportswear',
//     price: '1499', // Example price as string
//     quantity: 1,
//   },
// ];

// // --- CONFIGURATION FOR MOCK/REAL BACKEND ---
// // Set this to true to use the mock backend for Razorpay order creation/verification.
// // Set to false when you have a real backend running and configured in axiosInstance.
// const IS_MOCK_BACKEND_ENABLED = true; // <--- TOGGLE THIS!

// const CheckoutCartItem = ({item}) => {
//   const imageSource =
//     typeof item.image === 'number'
//       ? item.image
//       : {
//           uri: item.image
//             ? `${IMAGE_BASE_URL}${item.image}`
//             : 'https://placehold.co/80x80/E0E0E0/555555?text=No+Image',
//         };

//   const productName = item.name || 'Unknown Product';
//   const brandName = item.brand || 'Unknown Brand';
//   const price = item.price ? parseFloat(item.price).toFixed(2) : '0.00';
//   const quantity = item.quantity || 1;

//   return (
//     <View style={styles.cartItemCard}>
//       <Image source={imageSource} style={styles.cartItemImage} />
//       <View style={styles.cartItemDetails}>
//         <Text style={styles.cartItemName}>{productName}</Text>
//         <Text style={styles.cartItemBrand}>{brandName}</Text>
//         <Text style={styles.cartItemPrice}>₹{price}</Text>
//         <View style={styles.quantityControls}>
//           <View style={styles.quantityButton}>
//             <Text style={styles.quantityButtonText}>-</Text>
//           </View>
//           <Text style={styles.quantityText}>{quantity}</Text>
//           <View style={styles.quantityButton}>
//             <Text style={styles.quantityButtonText}>+</Text>
//           </View>
//         </View>
//       </View>
//       <Image
//         source={{
//           uri: 'https://placehold.co/24x24/999999/FFFFFF?text=X',
//         }}
//         style={styles.deleteIcon}
//       />
//     </View>
//   );
// };

// const CheckoutPage = ({navigation}) => {
//   const [cartItemsToDisplay, setCartItemsToDisplay] = useState(
//     STATIC_CART_ITEMS_DATA,
//   );
//   const [cartSummary, setCartSummary] = useState({
//     subtotal: 0,
//     platformFee: 0,
//     gst: 0,
//     deliveryFee: 0,
//     totalAmount: 0,
//   });
//   const [loadingCart, setLoadingCart] = useState(true);
//   const [isPaying, setIsPaying] = useState(false);
//   const [error, setError] = useState(null);

//   // Set your LIVE Razorpay Key ID here once you have it.
//   // For initial testing, you can use a test key (rzp_test_...)
//   const [currencyConfig, setCurrencyConfig] = useState({
//     applicationData: {
//       currency: 'INR',
//       razorpayKeyId: 'rzp_live_ykAW0WN2mvhAjJ', // YOUR ACTUAL LIVE KEY ID
//     },
//   });

//   const fetchCartData = async () => {
//     setLoadingCart(true);
//     setError(null);
//     try {
//       const response = await axiosInstance.get('/web/get-cart');

//       if (response.data) {
//         const apiCartData = response.data;

//         setCartSummary({
//           subtotal: apiCartData.summary?.subtotal || 0,
//           platformFee: apiCartData.otherCharges?.plateformfee || 0,
//           gst: apiCartData.otherCharges?.gst || 0,
//           deliveryFee: apiCartData.otherCharges?.deliveryFee || 0,
//           totalAmount: apiCartData.totalAmountafterCharges || 0,
//         });

//         if (apiCartData.items && apiCartData.items.length > 0) {
//           setCartItemsToDisplay(
//             apiCartData.items.map(item => ({
//               id: item._id,
//               image: item.product?.productImage[0]?.filePath,
//               name: item.product?.productName,
//               brand: item.product?.brand?.name || 'Generic',
//               price: item.product?.price,
//               quantity: item.quantity,
//             })),
//           );
//         } else {
//           setCartItemsToDisplay(STATIC_CART_ITEMS_DATA);
//         }
//       } else {
//         setError('Failed to fetch cart data: No data in response.');
//         setCartItemsToDisplay(STATIC_CART_ITEMS_DATA);
//       }
//     } catch (e) {
//       console.error('Error fetching cart data:', e);
//       let errorMessage = 'Could not load cart. Displaying static data.';
//       if (e.response) {
//         errorMessage =
//           e.response.data?.message || `Server Error: ${e.response.status}`;
//       } else if (e.request) {
//         errorMessage = 'Network Error: No response from server.';
//       } else {
//         errorMessage = `Error: ${e.message}`;
//       }
//       setError(errorMessage);
//       setCartItemsToDisplay(STATIC_CART_ITEMS_DATA);
//     } finally {
//       setLoadingCart(false);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, []);

//   const handleBuyPress = async amount => {
//     if (
//       !currencyConfig.applicationData.razorpayKeyId ||
//       currencyConfig.applicationData.razorpayKeyId.includes(
//         'YOUR_RAZORPAY_KEY_ID',
//       ) // Check for placeholder
//     ) {
//       Alert.alert(
//         'Configuration Error',
//         'Please set your actual Razorpay Key ID. For testing, use a test key (rzp_test_...).',
//       );
//       return;
//     }

//     setIsPaying(true);
//     try {
//       let res;
//       // Conditionally call mock or real backend based on the flag
//       if (IS_MOCK_BACKEND_ENABLED) {
//         res = await createMockRazorpayOrder(
//           Number(amount * 100), // Razorpay expects amount in paise
//           currencyConfig.applicationData.currency,
//         );
//       } else {
//         // This is where your real backend API call would go
//         res = await axiosInstance.post('/api/create-razorpay-order', {
//           amount: Number(amount), // Send raw amount, backend converts to paise
//           currency: currencyConfig.applicationData.currency || 'INR',
//         });
//       }

//       const orderId = res?.razorpayOrder?.id;
//       const pricex = Number(amount * 100);

//       if (!orderId) {
//         Alert.alert(
//           'Payment Error',
//           'Failed to obtain Razorpay order ID. Please try again.',
//         );
//         setIsPaying(false);
//         return;
//       }

//       var options = {
//         description: 'Shopinger Purchase',
//         image:
//           'https://media.istockphoto.com/id/486326115/photo/bull-and-bear.webp?b=1&s=170667a&w=0&k=20&c=HMb-bQbmU5M-RVnU6NoPydkGjh0FEigULJcpwwA3z7g=',
//         currency: currencyConfig?.applicationData?.currency,
//         key: currencyConfig?.applicationData?.razorpayKeyId,
//         amount: pricex,
//         name: 'Shopinger E-Commerce',
//         order_id: orderId, // This is the crucial part that must be a REAL Razorpay order ID
//         prefill: {
//           email: 'customer@example.com', // Replace with actual user email
//           contact: '9876543210', // Replace with actual user contact
//           name: 'John Doe', // Replace with actual user name
//         },
//         theme: {color: '#ff6600'},
//       };

//       RazorpayCheckout.open(options)
//         .then(async data => {
//           console.log('Razorpay Success Data:', data);
//           let rzpOrderId = data?.razorpay_order_id;
//           let paymentId = data?.razorpay_payment_id;
//           let signature = data?.razorpay_signature;

//           let verificationResult;
//           // Conditionally call mock or real backend for verification
//           if (IS_MOCK_BACKEND_ENABLED) {
//             verificationResult = await verifyMockRazorpayPayment(
//               rzpOrderId,
//               paymentId,
//               signature,
//             );
//           } else {
//             // This is where your real backend API call for verification would go
//             verificationResult = await axiosInstance.post(
//               '/api/verify-razorpay-payment',
//               {
//                 razorpay_order_id: rzpOrderId,
//                 razorpay_payment_id: paymentId,
//                 razorpay_signature: signature,
//               },
//             );
//           }

//           if (verificationResult.success) {
//             Alert.alert('Payment Successful!', verificationResult.message);
//             navigation.navigate('OrderSuccessScreen', {paymentId: paymentId});
//           } else {
//             Alert.alert(
//               'Payment Verification Failed',
//               'There was an issue verifying your payment. Please contact support.',
//             );
//           }
//         })
//         .catch(error => {
//           console.error(`Razorpay Error: ${error.code} - ${error.description}`);
//           Alert.alert('Payment Failed', `Error: ${error.description}`);
//         })
//         .finally(() => {
//           setIsPaying(false);
//         });
//     } catch (error) {
//       console.error('Error initiating Razorpay flow:', error);
//       Alert.alert(
//         'Payment Initialization Error',
//         'Could not initiate payment. Please try again.',
//       );
//       setIsPaying(false);
//     }
//   };

//   if (loadingCart) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#ff6600" />
//           <Text style={{marginTop: 10}}>Loading cart...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   if (cartItemsToDisplay.length === 0 && !loadingCart && !error) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.emptyCartContainer}>
//           <Text style={styles.emptyCartText}>Your cart is empty!</Text>
//           <TouchableOpacity
//             style={styles.browseButton}
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.browseButtonText}>Continue Shopping</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={{
//               uri: 'https://placehold.co/24x24/000000/FFFFFF?text=%3C',
//             }}
//             style={styles.backArrowIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Checkout</Text>
//         <View style={{width: 24}} />
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}>
//         {error && (
//           <View style={styles.errorBanner}>
//             <Text style={styles.errorBannerText}>{error}</Text>
//           </View>
//         )}

//         {cartItemsToDisplay.map(item => (
//           <CheckoutCartItem key={item.id} item={item} />
//         ))}

//         <View style={styles.orderInfoContainer}>
//           <Text style={styles.orderInfoTitle}>Order Info</Text>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Subtotal</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.subtotal.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Platform Fee</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.platformFee.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>GST</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.gst.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Delivery Fee</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.deliveryFee.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.totalRow}>
//             <Text style={styles.totalLabel}>Total Amount</Text>
//             <Text style={styles.totalValue}>
//               ₹{cartSummary.totalAmount.toFixed(2)}
//             </Text>
//           </View>
//         </View>

//         <TouchableOpacity
//           style={styles.proceedButton}
//           onPress={() => handleBuyPress(cartSummary.totalAmount)}
//           disabled={isPaying || loadingCart}>
//           {isPaying ? (
//             <ActivityIndicator color="#fff" size="small" />
//           ) : (
//             <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
//           )}
//         </TouchableOpacity>

//         <View style={{height: 40}} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     padding: 20,
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   retryButton: {
//     backgroundColor: '#ff6600',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   emptyCartContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     padding: 20,
//   },
//   emptyCartText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 20,
//   },
//   browseButton: {
//     backgroundColor: '#ff6600',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//   },
//   browseButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   backArrowIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//   },
//   cartItemCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//     alignItems: 'center',
//   },
//   cartItemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     resizeMode: 'contain',
//     marginRight: 15,
//   },
//   cartItemDetails: {
//     flex: 1,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   cartItemBrand: {
//     fontSize: 13,
//     color: '#777',
//     marginBottom: 5,
//   },
//   cartItemPrice: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   quantityControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 20,
//     paddingVertical: 5,
//     paddingHorizontal: 5,
//     alignSelf: 'flex-start',
//   },
//   quantityButton: {
//     backgroundColor: '#fff',
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   quantityButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   quantityText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginHorizontal: 15,
//   },
//   deleteIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//     tintColor: '#999',
//     marginLeft: 10,
//   },
//   infoBlock: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   infoBlockHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   infoBlockTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   infoBlockArrow: {
//     width: 15,
//     height: 15,
//     resizeMode: 'contain',
//     tintColor: '#999',
//   },
//   infoBlockContent: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   infoBlockIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//     marginRight: 10,
//     tintColor: '#ff6600',
//   },
//   infoBlockText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//     lineHeight: 20,
//   },
//   checkedIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     tintColor: '#4CAF50',
//     marginLeft: 10,
//   },
//   orderInfoContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   orderInfoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   orderInfoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   orderInfoLabel: {
//     fontSize: 14,
//     color: '#555',
//   },
//   orderInfoValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     marginTop: 10,
//   },
//   totalLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   totalValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#ff6600',
//   },
//   proceedButton: {
//     backgroundColor: '#ff6600',
//     borderRadius: 10,
//     paddingVertical: 18,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   proceedButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorBanner: {
//     backgroundColor: '#ffe0e0',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ff6666',
//   },
//   errorBannerText: {
//     color: '#cc0000',
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// export default CheckoutPage;

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   Dimensions,
//   TouchableOpacity,
//   ActivityIndicator, // For loading state
//   Alert, // For error messages
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import RazorpayCheckout from 'react-native-razorpay'; // Import Razorpay SDK

// import axiosInstance from '../utils/AxiosInstance'; // Your configured axios instance
// // Import the mock API functions
// import {
//   createMockRazorpayOrder,
//   verifyMockRazorpayPayment,
// } from '../utils/mock';

// const {width} = Dimensions.get('window');

// // --- IMPORTANT: Define your image base URL here directly ---
// const IMAGE_BASE_URL = 'https://shopinger.co.in';

// const STATIC_CART_ITEMS_DATA = [
//   {
//     id: '1',
//     image: require('../../assets/wishlist/shirt.png'), // Local image asset
//     name: "Men's Tie-Dye T-Shirt",
//     brand: 'Nike Sportswear',
//     price: '1599', // Example price as string
//     quantity: 1,
//   },
//   {
//     id: '2',
//     image: require('../../assets/wishlist/jacket.png'), // Local image asset
//     name: "Men's Tie-Dye T-Shirt",
//     brand: 'Nike Sportswear',
//     price: '1499', // Example price as string
//     quantity: 1,
//   },
// ];
// const IS_MOCK_BACKEND_ENABLED = true;

// const CheckoutCartItem = ({item}) => {
//   const imageSource =
//     typeof item.image === 'number'
//       ? item.image
//       : {
//           uri:
//             item.image && item.image.trim() !== ''
//               ? `${IMAGE_BASE_URL}${item.image}`
//               : 'https://placehold.co/80x80/E0E0E0/555555?text=No+Image',
//         };

//   const productName = item.name || 'Unknown Product';
//   const brandName = item.brand || 'Unknown Brand';
//   const price = item.price ? parseFloat(item.price).toFixed(2) : '0.00';
//   const quantity = item.quantity || 1;

//   return (
//     <View style={styles.cartItemCard}>
//       <Image source={imageSource} style={styles.cartItemImage} />
//       <View style={styles.cartItemDetails}>
//         <Text style={styles.cartItemName}>{productName}</Text>
//         <Text style={styles.cartItemBrand}>{brandName}</Text>
//         <Text style={styles.cartItemPrice}>₹{price}</Text>
//         <View style={styles.quantityControls}>
//           <View style={styles.quantityButton}>
//             <Text style={styles.quantityButtonText}>-</Text>
//           </View>
//           <Text style={styles.quantityText}>{quantity}</Text>
//           <View style={styles.quantityButton}>
//             <Text style={styles.quantityButtonText}>+</Text>
//           </View>
//         </View>
//       </View>
//       <Image
//         source={{
//           uri: 'https://placehold.co/24x24/999999/FFFFFF?text=X',
//         }}
//         style={styles.deleteIcon}
//       />
//     </View>
//   );
// };

// const CheckoutPage = ({navigation}) => {
//   const [cartItemsToDisplay, setCartItemsToDisplay] = useState([]);
//   const [cartSummary, setCartSummary] = useState({
//     subtotal: 0,
//     platformFee: 0,
//     gst: 0,
//     deliveryFee: 0,
//     totalAmount: 0,
//   });
//   const [loadingCart, setLoadingCart] = useState(true);
//   const [isPaying, setIsPaying] = useState(false);
//   const [error, setError] = useState(null);

//   const [currencyConfig, setCurrencyConfig] = useState({
//     applicationData: {
//       currency: 'INR',
//       razorpayKeyId: 'rzp_live_ykAW0WN2mvhAjJ', // YOUR ACTUAL LIVE KEY ID
//     },
//   });

//   const fetchCartData = async () => {
//     setLoadingCart(true);
//     setError(null); // Clear previous errors
//     console.log('Fetching cart data...');
//     try {
//       const response = await axiosInstance.get('/web/get-cart');
//       console.log('API Response Data:', JSON.stringify(response.data, null, 2));

//       if (response.data) {
//         const apiCartData = response.data;

//         setCartSummary({
//           subtotal: apiCartData.summary?.subtotal || 0,
//           platformFee: apiCartData.otherCharges?.plateformfee || 0,
//           gst: apiCartData.otherCharges?.gst || 0,
//           deliveryFee: apiCartData.otherCharges?.deliveryFee || 0,
//           totalAmount: apiCartData.totalAmountafterCharges || 0,
//         });
//         console.log(
//           'Cart Summary updated:',
//           JSON.stringify(cartSummary, null, 2),
//         );

//         if (apiCartData.items && apiCartData.items.length > 0) {
//           const mappedItems = apiCartData.items.map(item => ({
//             id: item.cartItemId || item.productId,
//             image:
//               item.images && item.images.length > 0 ? item.images[0] : null,
//             name: item.productName,
//             brand: 'N/A',
//             price: item.sellingPrice,
//             quantity: item.quantity,
//           }));
//           console.log(
//             'Mapped Cart Items for Display:',
//             JSON.stringify(mappedItems, null, 2),
//           );
//           setCartItemsToDisplay(mappedItems);
//         } else {
//           console.log('API returned no items. Setting static fallback data.');
//           setCartItemsToDisplay(STATIC_CART_ITEMS_DATA); // Fallback to static if API returns empty array
//         }
//       } else {
//         console.log('API response data is empty or null.');
//         setError('Failed to fetch cart data: No data in response.');
//         setCartItemsToDisplay(STATIC_CART_ITEMS_DATA); // Fallback to static on empty response
//       }
//     } catch (e) {
//       console.error('Error fetching cart data:', e);
//       let errorMessage = 'Could not load cart. Displaying static data.';
//       if (e.response) {
//         errorMessage =
//           e.response.data?.message || `Server Error: ${e.response.status}`;
//       } else if (e.request) {
//         errorMessage = 'Network Error: No response from server.';
//       } else {
//         errorMessage = `Error: ${e.message}`;
//       }
//       setError(errorMessage);
//       console.log('Setting static fallback data due to error.');
//       setCartItemsToDisplay(STATIC_CART_ITEMS_DATA); // Fallback to static on error
//     } finally {
//       setLoadingCart(false);
//       console.log('Finished fetching cart data.');
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, []);
//   const handleBuyPress = async amount => {
//     if (
//       !currencyConfig.applicationData.razorpayKeyId ||
//       currencyConfig.applicationData.razorpayKeyId.includes(
//         'YOUR_RAZORPAY_KEY_ID',
//       )
//     ) {
//       Alert.alert(
//         'Configuration Error',
//         'Please set your actual Razorpay Key ID. For testing, use a test key (rzp_test_...).',
//       );
//       return;
//     }

//     setIsPaying(true);
//     try {
//       let res;
//       // Conditionally call mock or real backend based on the flag
//       if (IS_MOCK_BACKEND_ENABLED) {
//         res = await createMockRazorpayOrder(
//           Number(amount * 100), // Razorpay expects amount in paise
//           currencyConfig.applicationData.currency,
//         );
//       } else {
//         // This is where your real backend API call would go
//         res = await axiosInstance.post('/api/create-razorpay-order', {
//           amount: Number(amount), // Send raw amount, backend converts to paise
//           currency: currencyConfig.applicationData.currency || 'INR',
//         });
//       }

//       const orderId = res?.razorpayOrder?.id;
//       const pricex = Number(amount * 100);

//       if (!orderId) {
//         Alert.alert(
//           'Payment Error',
//           'Failed to obtain Razorpay order ID. Please try again.',
//         );
//         setIsPaying(false);
//         return;
//       }

//       var options = {
//         description: 'Shopinger Purchase',
//         image:
//           'https://media.istockphoto.com/id/486326115/photo/bull-and-bear.webp?b=1&s=170667a&w=0&k=20&c=HMb-bQbmU5M-RVnU6NoPydkGjh0FEigULJcpwwA3z7g=',
//         currency: currencyConfig?.applicationData?.currency,
//         key: currencyConfig?.applicationData?.razorpayKeyId,
//         amount: pricex,
//         name: 'Shopinger E-Commerce',
//         order_id: orderId, // This is the crucial part that must be a REAL Razorpay order ID
//         prefill: {
//           email: 'customer@example.com', // Replace with actual user email
//           contact: '9876543210', // Replace with actual user contact
//           name: 'John Doe', // Replace with actual user name
//         },
//         theme: {color: '#ff6600'},
//       };

//       RazorpayCheckout.open(options)
//         .then(async data => {
//           console.log('Razorpay Success Data:', data);
//           let rzpOrderId = data?.razorpay_order_id;
//           let paymentId = data?.razorpay_payment_id;
//           let signature = data?.razorpay_signature;

//           let verificationResult;
//           // Conditionally call mock or real backend for verification
//           if (IS_MOCK_BACKEND_ENABLED) {
//             verificationResult = await verifyMockRazorpayPayment(
//               rzpOrderId,
//               paymentId,
//               signature,
//             );
//           } else {
//             // This is where your real backend API call for verification would go
//             verificationResult = await axiosInstance.post(
//               '/api/verify-razorpay-payment',
//               {
//                 razorpay_order_id: rzpOrderId,
//                 razorpay_payment_id: paymentId,
//                 razorpay_signature: signature,
//               },
//             );
//           }

//           if (verificationResult.success) {
//             Alert.alert('Payment Successful!', verificationResult.message);
//             navigation.navigate('OrderSuccessScreen', {paymentId: paymentId});
//           } else {
//             Alert.alert(
//               'Payment Verification Failed',
//               'There was an issue verifying your payment. Please contact support.',
//             );
//           }
//         })
//         .catch(error => {
//           console.error(`Razorpay Error: ${error.code} - ${error.description}`);
//           Alert.alert('Payment Failed', `Error: ${error.description}`);
//         })
//         .finally(() => {
//           setIsPaying(false);
//         });
//     } catch (error) {
//       console.error('Error initiating Razorpay flow:', error);
//       Alert.alert(
//         'Payment Initialization Error',
//         'Could not initiate payment. Please try again.',
//       );
//       setIsPaying(false);
//     }
//   };
//   // Render the empty cart message only if loading is false AND items array is actually empty
//   if (!loadingCart && cartItemsToDisplay.length === 0 && !error) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.emptyCartContainer}>
//           <Text style={styles.emptyCartText}>Your cart is empty!</Text>
//           <TouchableOpacity
//             style={styles.browseButton}
//             onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.browseButtonText}>Continue Shopping</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   // If loading, show indicator
//   if (loadingCart) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#ff6600" />
//           <Text style={{marginTop: 10}}>Loading cart...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             source={{
//               uri: 'https://placehold.co/24x24/000000/FFFFFF?text=%3C',
//             }}
//             style={styles.backArrowIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Checkout</Text>
//         <View style={{width: 24}} />
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}>
//         {error && (
//           <View style={styles.errorBanner}>
//             <Text style={styles.errorBannerText}>{error}</Text>
//           </View>
//         )}

//         {cartItemsToDisplay.map(item => (
//           <CheckoutCartItem key={item.id} item={item} />
//         ))}

//         <View style={styles.infoBlock}>
//           <TouchableOpacity
//             style={styles.infoBlockHeader}
//             onPress={() => navigation.navigate('Checkout')}>
//             <Text style={styles.infoBlockTitle}>Delivery Address</Text>
//             <Text style={styles.infoBlockTitle}>Edit</Text>
//           </TouchableOpacity>
//           <View style={styles.infoBlockContent}>
//             <Text style={styles.infoBlockText}>
//               Add your delivery address here{'\n'}Location 📍
//             </Text>
//           </View>
//         </View>

//         <View style={styles.orderInfoContainer}>
//           <Text style={styles.orderInfoTitle}>Order Info</Text>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Subtotal</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.subtotal.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Platform Fee</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.platformFee.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>GST</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.gst.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Delivery Fee</Text>
//             <Text style={styles.orderInfoValue}>
//               ₹{cartSummary.deliveryFee.toFixed(2)}
//             </Text>
//           </View>
//           <View style={styles.totalRow}>
//             <Text style={styles.totalLabel}>Total Amount</Text>
//             <Text style={styles.totalValue}>
//               ₹{cartSummary.totalAmount.toFixed(2)}
//             </Text>
//           </View>
//         </View>

//         <TouchableOpacity
//           style={styles.proceedButton}
//           onPress={() => handleBuyPress(cartSummary.totalAmount)}
//           disabled={isPaying || loadingCart}>
//           {isPaying ? (
//             <ActivityIndicator color="#fff" size="small" />
//           ) : (
//             <Text style={styles.proceedButtonText}>Proceed to Checkout</Text>
//           )}
//         </TouchableOpacity>

//         <View style={{height: 40}} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     padding: 20,
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   retryButton: {
//     backgroundColor: '#ff6600',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   retryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   emptyCartContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     padding: 20,
//   },
//   emptyCartText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 20,
//   },
//   browseButton: {
//     backgroundColor: '#ff6600',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//   },
//   browseButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   backArrowIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//   },
//   cartItemCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//     alignItems: 'center',
//   },
//   cartItemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     resizeMode: 'contain',
//     marginRight: 15,
//   },
//   cartItemDetails: {
//     flex: 1,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   cartItemBrand: {
//     fontSize: 13,
//     color: '#777',
//     marginBottom: 5,
//   },
//   cartItemPrice: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   quantityControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 20,
//     paddingVertical: 5,
//     paddingHorizontal: 5,
//     alignSelf: 'flex-start',
//   },
//   quantityButton: {
//     backgroundColor: '#fff',
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#eee',
//   },
//   quantityButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   quantityText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginHorizontal: 15,
//   },
//   deleteIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//     tintColor: '#999',
//     marginLeft: 10,
//   },
//   infoBlock: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   infoBlockHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   infoBlockTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   infoBlockArrow: {
//     width: 15,
//     height: 15,
//     resizeMode: 'contain',
//     tintColor: '#999',
//   },
//   infoBlockContent: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   infoBlockIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//     marginRight: 10,
//     tintColor: '#ff6600',
//   },
//   infoBlockText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//     lineHeight: 20,
//   },
//   checkedIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     tintColor: '#4CAF50',
//     marginLeft: 10,
//   },
//   orderInfoContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   orderInfoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   orderInfoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   orderInfoLabel: {
//     fontSize: 14,
//     color: '#555',
//   },
//   orderInfoValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     marginTop: 10,
//   },
//   totalLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   totalValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#ff6600',
//   },
//   proceedButton: {
//     backgroundColor: '#ff6600',
//     borderRadius: 10,
//     paddingVertical: 18,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   proceedButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   errorBanner: {
//     backgroundColor: '#ffe0e0',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ff6666',
//   },
//   errorBannerText: {
//     color: '#cc0000',
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// export default CheckoutPage;

import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator, // For loading state
  Alert, // For error messages
  Platform, // For platform-specific styles like Picker
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RazorpayCheckout from 'react-native-razorpay'; // Import Razorpay SDK

import axiosInstance from '../utils/AxiosInstance'; // Your configured axios instance
// Import the mock API functions (assuming you have them in '../utils/mock')
import {
  createMockRazorpayOrder,
  verifyMockMockRazorpayPayment, // Corrected typo here if it exists in your mock file
} from '../utils/mock';

const {width} = Dimensions.get('window');

// --- IMPORTANT: Define your image base URL here directly ---
const IMAGE_BASE_URL = 'https://shopinger.co.in';

// Set this to false for production to use real backend APIs
const IS_MOCK_BACKEND_ENABLED = false;

// Moved CheckoutCartItem definition inside the file or above CheckoutPage
const CheckoutCartItem = ({item, onQuantityChange, isLoading}) => {
  const imageSource =
    typeof item.image === 'number' // Check if it's a local require asset
      ? item.image
      : {
          uri:
            item.images &&
            item.images.length > 0 &&
            item.images[0].trim() !== ''
              ? `${IMAGE_BASE_URL}${item.images[0]}` // Use first image from images array
              : 'https://placehold.co/80x80/E0E0E0/555555?text=No+Image',
        };

  const productName = item.productName || 'Unknown Product';
  const brandName = item.brand || 'N/A'; // Brand might not be directly available in get-cart
  const price = item.sellingPrice
    ? parseFloat(item.sellingPrice).toFixed(2)
    : '0.00';
  const quantity = item.quantity || 1;

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(item.cartItemId, quantity - 1);
    } else {
      Alert.alert(
        'Remove Item',
        'Do you want to remove this item from your cart?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Remove',
            onPress: () => onQuantityChange(item.cartItemId, 0), // Send 0 to indicate removal
            style: 'destructive',
          },
        ],
      );
    }
  };

  const handleIncrement = () => {
    onQuantityChange(item.cartItemId, quantity + 1);
  };

  return (
    <View style={styles.cartItemCard}>
      <Image source={imageSource} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{productName}</Text>
        <Text style={styles.cartItemBrand}>{brandName}</Text>
        <Text style={styles.cartItemPrice}>₹{price}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrement}
            disabled={isLoading}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncrement}
            disabled={isLoading}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Delete button (optional, if you want a separate remove button) */}
      <TouchableOpacity
        onPress={() => onQuantityChange(item.cartItemId, 0)}
        disabled={isLoading}>
        <Image
          source={{
            uri: 'https://placehold.co/24x24/999999/FFFFFF?text=X',
          }}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const CheckoutPage = ({navigation}) => {
  const [cartItemsToDisplay, setCartItemsToDisplay] = useState([]);
  const [cartSummary, setCartSummary] = useState({
    subtotal: 0,
    platformFee: 0,
    gst: 0,
    deliveryFee: 0,
    totalAmount: 0,
  });
  const [deliveryAddress, setDeliveryAddress] = useState(null); // To store the fetched address
  const [loadingCart, setLoadingCart] = useState(true);
  const [loadingAddress, setLoadingAddress] = useState(true);
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState(null);

  const [currencyConfig] = useState({
    applicationData: {
      currency: 'INR',
      razorpayKeyId: 'rzp_live_ykAW0WN2mvhAjJ', // YOUR ACTUAL LIVE KEY ID
    },
  });

  const fetchCartData = useCallback(async () => {
    setLoadingCart(true);
    setError(null); // Clear previous errors
    console.log('Fetching cart data...');
    try {
      const response = await axiosInstance.get('/web/get-cart');
      console.log(
        'API Response Data for /web/get-cart:',
        JSON.stringify(response.data, null, 2),
      );

      if (response.data) {
        const apiCartData = response.data;

        setCartSummary({
          subtotal: apiCartData.summary?.subtotal || 0,
          platformFee: apiCartData.otherCharges?.plateformfee || 0,
          gst: apiCartData.otherCharges?.gst || 0,
          deliveryFee: apiCartData.otherCharges?.deliveryFee || 0,
          totalAmount: apiCartData.totalAmountafterCharges || 0,
        });

        if (apiCartData.items && apiCartData.items.length > 0) {
          const mappedItems = apiCartData.items.map(item => ({
            id: item.cartItemId, // Use cartItemId for key and updates
            productName: item.productName,
            productId: item.productId,
            cartItemId: item.cartItemId, // Pass cartItemId for quantity updates
            images: item.images, // Array of images
            sellingPrice: item.sellingPrice,
            quantity: item.quantity,
            brand: 'N/A', // Assuming 'brand' is not directly in get-cart response
          }));
          setCartItemsToDisplay(mappedItems);
        } else {
          setCartItemsToDisplay([]); // Set to empty array if no items
        }
      } else {
        setError('Failed to fetch cart data: No data in response.');
        setCartItemsToDisplay([]);
      }
    } catch (e) {
      console.error('Error fetching cart data:', e);
      let errorMessage =
        'Could not load cart items. Please check your network or try again.';
      if (e.response) {
        errorMessage =
          e.response.data?.message || `Server Error: ${e.response.status}`;
      } else if (e.request) {
        errorMessage =
          'Network Error: No response from server. Check your internet connection.';
      } else {
        errorMessage = `Error: ${e.message}`;
      }
      setError(errorMessage);
      setCartItemsToDisplay([]); // Still set to empty on error, but the UI will handle it differently now
    } finally {
      setLoadingCart(false);
      console.log('Finished fetching cart data.');
    }
  }, []);

  const fetchAddressData = useCallback(async () => {
    setLoadingAddress(true);
    setError(null);
    console.log('Fetching address data...');
    try {
      const response = await axiosInstance.get('/web/get-address');
      console.log(
        'API Response Data for /web/get-address:',
        JSON.stringify(response.data, null, 2),
      );

      if (
        response.data &&
        response.data.addresses &&
        response.data.addresses.length > 0
      ) {
        // Assuming you want to display the first address in the list
        setDeliveryAddress(response.data.addresses[0]);
      } else {
        setDeliveryAddress(null); // No address found
      }
    } catch (e) {
      console.error('Error fetching address data:', e);
      let errorMessage =
        'Could not load delivery address. Please check your network or add an address.';
      if (e.response) {
        errorMessage =
          e.response.data?.message || `Server Error: ${e.response.status}`;
      } else if (e.request) {
        errorMessage = 'Network Error: No response from server for address.';
      } else {
        errorMessage = `Error: ${e.message}`;
      }
      setError(errorMessage);
      setDeliveryAddress(null);
    } finally {
      setLoadingAddress(false);
      console.log('Finished fetching address data.');
    }
  }, []);

  // Effect to fetch initial cart and address data
  useEffect(() => {
    fetchCartData();
    fetchAddressData();
  }, [fetchCartData, fetchAddressData]);

  const handleQuantityUpdate = async (cartItemId, newQuantity) => {
    // Only proceed if newQuantity is a valid number and not negative
    if (typeof newQuantity !== 'number' || newQuantity < 0) {
      console.warn('Invalid quantity provided:', newQuantity);
      return;
    }

    setLoadingCart(true); // Show loading while updating quantity
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append('quantity', newQuantity.toString());

      const response = await axiosInstance.put(
        `/web/quantity-update/${cartItemId}`,
        formData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      console.log('Quantity Update Response:', response.data);

      if (response.data && response.data.success) {
        // After successful quantity update, re-fetch the cart data to get updated totals
        await fetchCartData();
      } else {
        Alert.alert(
          'Update Failed',
          response.data?.message || 'Failed to update quantity.',
        );
      }
    } catch (e) {
      console.error('Error updating quantity:', e);
      let errorMessage = 'Failed to update item quantity.';
      if (e.response) {
        errorMessage =
          e.response.data?.message || `Server Error: ${e.response.status}`;
      } else if (e.request) {
        errorMessage =
          'Network Error: No response from server for quantity update.';
      } else {
        errorMessage = `Error: ${e.message}`;
      }
      Alert.alert('Error', errorMessage);
    } finally {
      setLoadingCart(false);
    }
  };

  const handleBuyPress = async amount => {
    navigation.navigate('ShoppingBag');
    if (
      !currencyConfig.applicationData.razorpayKeyId ||
      currencyConfig.applicationData.razorpayKeyId.includes(
        'YOUR_RAZORPAY_KEY_ID',
      )
    ) {
      Alert.alert(
        'Configuration Error',
        'Please set your actual Razorpay Key ID. For testing, use a test key (rzp_test_...).',
      );
      return;
    }

    if (cartItemsToDisplay.length === 0) {
      Alert.alert(
        'Cart Empty',
        'Your cart is empty. Please add items before proceeding to checkout.',
      );
      return;
    }
    if (!deliveryAddress) {
      Alert.alert(
        'Address Required',
        'Please set a delivery address before proceeding to checkout.',
      );
      return;
    }

    setIsPaying(true);
    try {
      let res;
      if (IS_MOCK_BACKEND_ENABLED) {
        res = await createMockRazorpayOrder(
          Number(amount * 100),
          currencyConfig.applicationData.currency,
        );
      } else {
        res = await axiosInstance.post('/web/create-razorpay-order', {
          amount: Number(amount),
          currency: currencyConfig.applicationData.currency || 'INR',
        });
        res = res.data; // Assuming axios response wraps actual data in .data
      }

      const orderId = res?.orderId;
      const pricex = Number(amount * 100);

      if (!orderId) {
        Alert.alert(
          'Payment Error',
          'Failed to obtain Razorpay order ID from backend. Please try again.',
        );
        setIsPaying(false);
        return;
      }

      var options = {
        description: 'Shopinger Purchase',
        image:
          'https://media.istockphoto.com/id/486326115/photo/bull-and-bear.webp?b=1&s=170667a&w=0&k=20&c=HMb-bQbmU5-RVnU6NoPydkGjh0FEigULJcpwwA3z7g=',
        currency: currencyConfig?.applicationData?.currency,
        key: currencyConfig?.applicationData?.razorpayKeyId,
        amount: pricex,
        name: 'Shopinger E-Commerce',
        order_id: orderId,
        prefill: {
          email: 'customer@example.com', // TODO: Replace with actual user email
          contact: '9876543210', // TODO: Replace with actual user contact
          name: 'John Doe', // TODO: Replace with actual user name
        },
        theme: {color: '#ff6600'},
      };

      RazorpayCheckout.open(options)
        .then(async data => {
          console.log('Razorpay Success Data:', data);
          let rzpOrderId = data?.razorpay_order_id;
          let paymentId = data?.razorpay_payment_id;
          let signature = data?.razorpay_signature;

          let verificationResult;
          if (IS_MOCK_BACKEND_ENABLED) {
            verificationResult = await verifyMockRazorpayPayment(
              rzpOrderId,
              paymentId,
              signature,
            );
          } else {
            verificationResult = await axiosInstance.post(
              '/web/verify-razorpay-payment',
              {
                razorpay_order_id: rzpOrderId,
                razorpay_payment_id: paymentId,
                razorpay_signature: signature,
              },
            );
            verificationResult = verificationResult.data;
          }

          if (verificationResult.success) {
            Alert.alert('Payment Successful!', verificationResult.message);
            navigation.navigate('OrderSuccessScreen', {paymentId: paymentId});
          } else {
            Alert.alert(
              'Payment Verification Failed',
              verificationResult.message ||
                'There was an issue verifying your payment. Please contact support.',
            );
          }
        })
        .catch(error => {
          console.error(`Razorpay Error: ${error.code} - ${error.description}`);
          Alert.alert('Payment Failed', `Error: ${error.description}`);
        })
        .finally(() => {
          setIsPaying(false);
        });
    } catch (error) {
      console.error('Error initiating Razorpay flow:', error);
      Alert.alert(
        'Payment Initialization Error',
        'Could not initiate payment. Please try again.',
      );
      setIsPaying(false);
    }
  };

  // Render loading state for initial fetches
  if (loadingCart || loadingAddress) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ff6600" />
          <Text style={{marginTop: 10}}>Loading cart and address...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // --- Main rendering logic starts here ---
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://placehold.co/24x24/000000/FFFFFF?text=%3C',
            }}
            style={styles.backArrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{width: 24}} />
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        {error && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorBannerText}>{error}</Text>
          </View>
        )}

        {/* Conditionally render cart items or a message if empty */}
        {cartItemsToDisplay.length > 0 ? (
          cartItemsToDisplay.map(item => (
            <CheckoutCartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityUpdate}
              isLoading={isPaying || loadingCart} // Pass loading state to disable buttons
            />
          ))
        ) : (
          <View style={styles.noItemsInCartContainer}>
            <Text style={styles.noItemsInCartText}>No items in your cart.</Text>
            <TouchableOpacity
              style={styles.browseButton}
              onPress={() => navigation.navigate('ProductAllData')}>
              <Text style={styles.browseButtonText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.infoBlock}>
          <TouchableOpacity
            style={styles.infoBlockHeader}
            onPress={() => navigation.navigate('Checkout')}>
            {' '}
            {/* Navigate to an address form */}
            <Text style={styles.infoBlockTitle}>Delivery Address</Text>
            <Text style={styles.infoBlockTitle}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.infoBlockContent}>
            <Image
              source={{
                uri: 'https://placehold.co/24x24/ff6600/FFFFFF?text=L', // Placeholder for location pin
              }}
              style={styles.infoBlockIcon}
            />
            {deliveryAddress ? (
              <Text style={styles.infoBlockText}>
                {deliveryAddress.houseNo}, {deliveryAddress.street},{'\n'}
                {deliveryAddress.city}, {deliveryAddress.district},{' '}
                {deliveryAddress.pincode},{'\n'}
                {deliveryAddress.country}
                {deliveryAddress.landmark
                  ? `\nLandmark: ${deliveryAddress.landmark}`
                  : ''}
                {deliveryAddress.mobile
                  ? `\nMobile: ${deliveryAddress.mobile}`
                  : ''}
              </Text>
            ) : (
              <Text style={styles.infoBlockText}>
                No delivery address found. Please add one.
              </Text>
            )}
          </View>
        </View>

        <View style={styles.orderInfoContainer}>
          <Text style={styles.orderInfoTitle}>Order Info</Text>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Subtotal</Text>
            <Text style={styles.orderInfoValue}>
              ₹{cartSummary.subtotal.toFixed(2)}
            </Text>
          </View>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Platform Fee</Text>
            <Text style={styles.orderInfoValue}>
              ₹{cartSummary.platformFee.toFixed(2)}
            </Text>
          </View>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>GST</Text>
            <Text style={styles.orderInfoValue}>
              ₹{cartSummary.gst.toFixed(2)}
            </Text>
          </View>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Delivery Fee</Text>
            <Text style={styles.orderInfoValue}>
              ₹{cartSummary.deliveryFee.toFixed(2)}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>
              ₹{cartSummary.totalAmount.toFixed(2)}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => handleBuyPress(cartSummary.totalAmount)}
          disabled={
            isPaying ||
            loadingCart ||
            loadingAddress ||
            cartItemsToDisplay.length === 0 ||
            !deliveryAddress
          }>
          {isPaying ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.proceedButtonText}>Proceed to Checkout</Text>
          )}
        </TouchableOpacity>

        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1, // This was causing the full screen takeover
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 20,
  },
  // New style for "No items in cart" message within ScrollView
  noItemsInCartContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    marginBottom: 20, // Add some space below it
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  noItemsInCartText: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  browseButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backArrowIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  cartItemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'contain',
    marginRight: 15,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cartItemBrand: {
    fontSize: 13,
    color: '#777',
    marginBottom: 5,
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'flex-start',
  },
  quantityButton: {
    backgroundColor: '#fff',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 15,
  },
  deleteIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#999',
    marginLeft: 10,
  },
  infoBlock: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  infoBlockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoBlockTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoBlockArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#999',
  },
  infoBlockContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoBlockIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '#ff6600',
  },
  infoBlockText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  checkedIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#4CAF50',
    marginLeft: 10,
  },
  orderInfoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  orderInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderInfoLabel: {
    fontSize: 14,
    color: '#555',
  },
  orderInfoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  proceedButton: {
    backgroundColor: '#ff6600',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 10,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorBanner: {
    backgroundColor: '#ffe0e0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ff6666',
  },
  errorBannerText: {
    color: '#cc0000',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default CheckoutPage;
