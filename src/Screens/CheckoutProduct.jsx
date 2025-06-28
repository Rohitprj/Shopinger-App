// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput, // Not used directly for display, but for increment/decrement if needed
//   Image,
//   ScrollView,
//   Dimensions,
//   Alert,
//   FlatList, // For rendering cart items
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const { width } = Dimensions.get('window');

// // Sample data for cart items
// const CART_ITEMS_DATA = [
//   {
//     id: '1',
//     image: require('../../assets/wishlist/shirt.png'), // Replace with your image
//     name: 'Men\'s Tie-Dye T-Shirt',
//     brand: 'Nike Sportswear',
//     price: 45.00,
//     tax: 4.00,
//     quantity: 1,
//   },
//   {
//     id: '2',
//     // image: require('./assets/men_tie_dye_tshirt_red.png'), // Replace with your image
//     name: 'Men\'s Tie-Dye T-Shirt',
//     brand: 'Nike Sportswear',
//     price: 45.00,
//     tax: 4.00,
//     quantity: 1,
//   },
// ];

// const CheckoutCartItem = ({ item, onQuantityChange, onRemoveItem }) => {
//   return (
//     <View style={styles.cartItemCard}>
//       <Image source={item.image} style={styles.cartItemImage} />
//       <View style={styles.cartItemDetails}>
//         <Text style={styles.cartItemName}>{item.name}</Text>
//         <Text style={styles.cartItemBrand}>{item.brand}</Text>
//         <Text style={styles.cartItemPrice}>
//           ${item.price.toFixed(2)} (-${item.tax.toFixed(2)} Tax)
//         </Text>
//         <View style={styles.quantityControls}>
//           <TouchableOpacity
//             style={styles.quantityButton}
//             onPress={() => onQuantityChange(item.id, item.quantity - 1)}
//           >
//             <Text style={styles.quantityButtonText}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{item.quantity}</Text>
//           <TouchableOpacity
//             style={styles.quantityButton}
//             onPress={() => onQuantityChange(item.id, item.quantity + 1)}
//           >
//             <Text style={styles.quantityButtonText}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <TouchableOpacity onPress={() => onRemoveItem(item.id)}>
//         <Image
//         //   source={require('./assets/delete_icon.png')} // Replace with your delete icon
//           style={styles.deleteIcon}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CheckoutPage = ({ navigation }) => {
//   const [cartItems, setCartItems] = useState(CART_ITEMS_DATA);

//   const handleQuantityChange = (itemId, newQuantity) => {
//     if (newQuantity < 1) {
//       handleRemoveItem(itemId);
//       return;
//     }
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const handleRemoveItem = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//     Alert.alert('Item Removed', 'The item has been removed from your cart.');
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   };

//   const shippingCost = 10; // Fixed shipping cost for now

//   const calculateTotal = () => {
//     return calculateSubtotal() + shippingCost;
//   };

//   const handleProceedToPayment = () => {
//     if (cartItems.length === 0) {
//       Alert.alert('Cart is Empty', 'Please add items to your cart before proceeding to payment.');
//       return;
//     }
//     Alert.alert('Proceeding to Payment', 'Initiating payment process...');
//     // In a real app, navigate to payment screen or initiate payment gateway
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             // source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
//             style={styles.backArrowIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Checkout</Text>
//         <View style={{ width: 24 }} /> {/* Spacer to balance header */}
//       </View>

//       <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Cart Items List */}
//         <FlatList
//           data={cartItems}
//           renderItem={({ item }) => (
//             <CheckoutCartItem
//               item={item}
//               onQuantityChange={handleQuantityChange}
//               onRemoveItem={handleRemoveItem}
//             />
//           )}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//           scrollEnabled={false} // Make FlatList scroll with parent ScrollView
//           ListEmptyComponent={<Text style={styles.emptyCartText}>Your cart is empty.</Text>}
//         />

//         {/* Delivery Address */}
//         <TouchableOpacity style={styles.infoBlock}>
//           <View style={styles.infoBlockHeader}>
//             <Text style={styles.infoBlockTitle}>Delivery Address</Text>
//             <Image
//             //   source={require('./assets/arrow_right_small.png')} // Replace with your arrow icon
//               style={styles.infoBlockArrow}
//             />
//           </View>
//           <View style={styles.infoBlockContent}>
//             <Image
//             //   source={require('./assets/delivery_pin_icon.png')} // Replace with your delivery pin icon
//               style={styles.infoBlockIcon}
//             />
//             <Text style={styles.infoBlockText}>
//               Chhatak, Sunamgonj 12/8AB{'\n'}Sylhet
//             </Text>
//             <Image
//             //   source={require('./assets/checked_icon.png')} // Replace with your checked icon
//               style={styles.checkedIcon}
//             />
//           </View>
//         </TouchableOpacity>

//         {/* Payment Method */}
//         <TouchableOpacity style={styles.infoBlock}>
//           <View style={styles.infoBlockHeader}>
//             <Text style={styles.infoBlockTitle}>Payment Method</Text>
//             <Image
//             //   source={require('./assets/arrow_right_small.png')} // Replace with your arrow icon
//               style={styles.infoBlockArrow}
//             />
//           </View>
//           <View style={styles.infoBlockContent}>
//             <Image
//             //   source={require('./assets/visa_icon.png')} // Replace with your Visa icon
//               style={styles.infoBlockIcon}
//             />
//             <Text style={styles.infoBlockText}>
//               Visa Classic{'\n'}**** 7690
//             </Text>
//             <Image
//             //   source={require('./assets/checked_icon.png')} // Replace with your checked icon
//               style={styles.checkedIcon}
//             />
//           </View>
//         </TouchableOpacity>

//         {/* Order Info */}
//         <View style={styles.orderInfoContainer}>
//           <Text style={styles.orderInfoTitle}>Order Info</Text>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Subtotal</Text>
//             <Text style={styles.orderInfoValue}>${calculateSubtotal().toFixed(2)}</Text>
//           </View>
//           <View style={styles.orderInfoRow}>
//             <Text style={styles.orderInfoLabel}>Shipping cost</Text>
//             <Text style={styles.orderInfoValue}>${shippingCost.toFixed(2)}</Text>
//           </View>
//           <View style={styles.totalRow}>
//             <Text style={styles.totalLabel}>Total</Text>
//             <Text style={styles.totalValue}>${calculateTotal().toFixed(2)}</Text>
//           </View>
//         </View>

//         {/* Proceed to Payment Button */}
//         <TouchableOpacity style={styles.proceedButton} onPress={handleProceedToPayment}>
//           <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
//         </TouchableOpacity>

//         {/* Extra space at the bottom to ensure content scrolls above potential bottom tabs */}
//         <View style={{ height: 40 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
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
//     shadowOffset: { width: 0, height: 1 },
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
//     alignSelf: 'flex-start', // Keeps controls to the left
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
//     shadowOffset: { width: 0, height: 1 },
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
//     tintColor: '#ff6600', // Example tint for delivery pin/visa
//   },
//   infoBlockText: {
//     flex: 1, // Allows text to wrap
//     fontSize: 14,
//     color: '#555',
//     lineHeight: 20,
//   },
//   checkedIcon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     tintColor: '#4CAF50', // Green for checked
//     marginLeft: 10,
//   },
//   orderInfoContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
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
//   emptyCartText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#777',
//     marginTop: 50,
//   },
// });

// export default CheckoutPage;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Static Data for cart items (no need for useState as it's static)
const STATIC_CART_ITEMS_DATA = [
  {
    id: '1',
    image: require('../../assets/wishlist/shirt.png'), // Replace with your image
    name: 'Men\'s Tie-Dye T-Shirt',
    brand: 'Nike Sportswear',
    price: '$45 (-$4.00 Tax)', // Display as string
    quantity: '1', // Display as string
  },
  {
    id: '2',
    image: require('../../assets/wishlist/jacket.png'), // Replace with your image
    name: 'Men\'s Tie-Dye T-Shirt',
    brand: 'Nike Sportswear',
    price: '$45 (-$4.00 Tax)', // Display as string
    quantity: '1', // Display as string
  },
];

const StaticCheckoutCartItem = ({ item }) => {
  return (
    <View style={styles.cartItemCard}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemBrand}>{item.brand}</Text>
        <Text style={styles.cartItemPrice}>
          {item.price}
        </Text>
        <View style={styles.quantityControls}>
          {/* Static quantity controls - no interaction */}
          <View style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </View>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <View style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </View>
        </View>
      </View>
      {/* Static delete icon - no interaction */}
      <Image
        // source={require('./assets/delete_icon.png')} // Replace with your delete icon
        style={styles.deleteIcon}
      />
    </View>
  );
};

const StaticCheckoutPage = () => { // Renamed to reflect static nature
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header - static */}
      <View style={styles.header}>
        <Image
        //   source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
          style={styles.backArrowIcon}
        />
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} /> {/* Spacer to balance header */}
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Cart Items List - static rendering */}
        {STATIC_CART_ITEMS_DATA.map(item => (
          <StaticCheckoutCartItem key={item.id} item={item} />
        ))}

        {/* Delivery Address - static block */}
        <View style={styles.infoBlock}>
          <View style={styles.infoBlockHeader}>
            <Text style={styles.infoBlockTitle}>Delivery Address</Text>
            <Image
            //   source={require('./assets/arrow_right_small.png')} // Replace with your arrow icon
              style={styles.infoBlockArrow}
            />
          </View>
          <View style={styles.infoBlockContent}>
            <Image
            //   source={require('./assets/delivery_pin_icon.png')} // Replace with your delivery pin icon
              style={styles.infoBlockIcon}
            />
            <Text style={styles.infoBlockText}>
              Chhatak, Sunamgonj 12/8AB{'\n'}Sylhet
            </Text>
            <Image
            //   source={require('./assets/checked_icon.png')} // Replace with your checked icon
              style={styles.checkedIcon}
            />
          </View>
        </View>

        {/* Payment Method - static block */}
        <View style={styles.infoBlock}>
          <View style={styles.infoBlockHeader}>
            <Text style={styles.infoBlockTitle}>Payment Method</Text>
            <Image
            //   source={require('./assets/arrow_right_small.png')} // Replace with your arrow icon
              style={styles.infoBlockArrow}
            />
          </View>
          <View style={styles.infoBlockContent}>
            <Image
            //   source={require('./assets/visa_icon.png')} // Replace with your Visa icon
              style={styles.infoBlockIcon}
            />
            <Text style={styles.infoBlockText}>
              Visa Classic{'\n'}**** 7690
            </Text>
            <Image
            //   source={require('./assets/checked_icon.png')} // Replace with your checked icon
              style={styles.checkedIcon}
            />
          </View>
        </View>

        {/* Order Info - static values */}
        <View style={styles.orderInfoContainer}>
          <Text style={styles.orderInfoTitle}>Order Info</Text>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Subtotal</Text>
            <Text style={styles.orderInfoValue}>$110</Text>
          </View>
          <View style={styles.orderInfoRow}>
            <Text style={styles.orderInfoLabel}>Shipping cost</Text>
            <Text style={styles.orderInfoValue}>$10</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$120</Text>
          </View>
        </View>

        {/* Proceed to Payment Button - static, no press handler */}
        <View style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
        </View>

        {/* Extra space at the bottom */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
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
    shadowOffset: { width: 0, height: 1 },
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
    shadowOffset: { width: 0, height: 1 },
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
    shadowOffset: { width: 0, height: 1 },
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
});

export default StaticCheckoutPage;