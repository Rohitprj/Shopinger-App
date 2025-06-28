// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const { width } = Dimensions.get('window');

// // Static data to represent the items in the bag
// const STATIC_BAG_ITEMS = [
//   {
//     id: '1',
//     // image: require('./assets/bag_item_1.png'), // Replace with actual image path
//     name: 'Men\'s Tie-Dye T-Shirt',
//     brand: 'Nike Sportswear',
//     price: '$45',
//     tax: '(-$4.00 Tax)',
//     quantity: '1',
//   },
//   {
//     id: '2',
//     // image: require('./assets/bag_item_2.png'), // Replace with actual image path
//     name: 'Men\'s Tie-Dye T-Shirt',
//     brand: 'Nike Sportswear',
//     price: '$45',
//     tax: '(-$4.00 Tax)',
//     quantity: '1',
//   },
// ];

// const StaticShoppingBagItem = ({ item }) => (
//   <View style={styles.bagItemCard}>
//     <Image source={item.image} style={styles.bagItemImage} />
//     <View style={styles.bagItemDetails}>
//       <Text style={styles.bagItemName}>{item.name}</Text>
//       <Text style={styles.bagItemBrand}>{item.brand}</Text>
//       <Text style={styles.bagItemPrice}>{item.price} {item.tax}</Text>
//       <View style={styles.quantityControls}>
//         <View style={styles.quantityButton}>
//           <Text style={styles.quantityButtonText}>-</Text>
//         </View>
//         <Text style={styles.quantityText}>{item.quantity}</Text>
//         <View style={styles.quantityButton}>
//           <Text style={styles.quantityButtonText}>+</Text>
//         </View>
//       </View>
//     </View>
//     <Image
//     //   source={require('./assets/delete_icon.png')} // Replace with your delete icon
//       style={styles.deleteIcon}
//     />
//   </View>
// );

// const StaticShoppingBagScreen = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Image
//         //   source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
//           style={styles.backArrowIcon}
//         />
//         <Text style={styles.headerTitle}>Shopping Bag</Text>
//         <View style={{ width: 24 }} /> {/* Spacer to balance header */}
//       </View>

//       <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Accessmde Section */}
//         <Text style={styles.sectionTitle}>Accessmde</Text>
//         <Text style={styles.sizeText}>Size</Text>

//         {/* Static Bag Items */}
//         {STATIC_BAG_ITEMS.map((item) => (
//           <StaticShoppingBagItem key={item.id} item={item} />
//         ))}

//         {/* Static List Items (from the bottom part of the image) */}
//         <View style={styles.staticListItem}>
//           <Text style={styles.staticListItemText}>Hindsco Thlcasl</Text>
//           <Text style={styles.staticListItemSubText}>$3000 i0 (W)</Text>
//           <Text style={styles.staticListItemPrice}>$0.00</Text>
//           <Text style={styles.staticListItemOldPrice}>$10.000</Text>
//         </View>
//         <View style={styles.staticListItem}>
//           <Text style={styles.staticListItemText}>Niwa H-Oopt H</Text>
//           <Text style={styles.staticListItemSubText}>$3000 (W)</Text>
//           <Text style={styles.staticListItemPrice}>$0.00</Text>
//           <Text style={styles.staticListItemOldPrice}>$10.000</Text>
//         </View>
//         <View style={styles.staticListItem}>
//           <Text style={styles.staticListItemText}>Ycononrcat Bss</Text>
//           <Text style={styles.staticListItemSubText}>$300 (W)</Text>
//           <Text style={styles.staticListItemPrice}>$0.00</Text>
//           <Text style={styles.staticListItemOldPrice}>$10.000</Text>
//         </View>
//         <View style={styles.staticListItem}>
//           <Text style={styles.staticListItemText}>Trmt Hhd 0.00</Text>
//           <Text style={styles.staticListItemSubText}>$300 (W)</Text>
//           <Text style={styles.staticListItemPrice}>$0.00</Text>
//           <Text style={styles.staticListItemOldPrice}>$10.000</Text>
//         </View>
//         <View style={styles.staticListItem}>
//           <Text style={styles.staticListItemText}>Done Movemtiha TssR</Text>
//           <Text style={styles.staticListItemSubText}>$300 (W)</Text>
//           <Text style={styles.staticListItemPrice}>$0.00</Text>
//           <Text style={styles.staticListItemOldPrice}>$10.000</Text>
//         </View>
//         <View style={styles.staticListItem}>
//           <Text style={styles.staticListItemText}>Dotioa Ientas</Text>
//           <Text style={styles.staticListItemSubText}>$300 (W)</Text>
//           <Text style={styles.staticListItemPrice}>$0.00</Text>
//           <Text style={styles.staticListItemOldPrice}>$10.000</Text>
//         </View>
//         <View style={styles.staticListItem}>
//           <Text style={styles.staticListItemText}>Quoatia Ientas</Text>
//           <Text style={styles.staticListItemSubText}>$300 (W)</Text>
//           <Text style={styles.staticListItemPrice}>$0.00</Text>
//           <Text style={styles.staticListItemOldPrice}>$10.000</Text>
//         </View>

//         {/* Extra space at the bottom */}
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
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     marginTop: 5,
//   },
//   sizeText: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 20,
//   },
//   bagItemCard: {
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
//   bagItemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     resizeMode: 'contain',
//     marginRight: 15,
//   },
//   bagItemDetails: {
//     flex: 1,
//   },
//   bagItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   bagItemBrand: {
//     fontSize: 13,
//     color: '#777',
//     marginBottom: 5,
//   },
//   bagItemPrice: {
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
//   staticListItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   staticListItemText: {
//     flex: 2,
//     fontSize: 15,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   staticListItemSubText: {
//     flex: 1.5,
//     fontSize: 12,
//     color: '#777',
//     textAlign: 'right',
//     marginRight: 10,
//   },
//   staticListItemPrice: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#333',
//     width: 60, // Fixed width to align prices
//     textAlign: 'right',
//   },
//   staticListItemOldPrice: {
//     fontSize: 12,
//     color: '#999',
//     textDecorationLine: 'line-through',
//     width: 60, // Fixed width to align prices
//     textAlign: 'right',
//   },
// });

// export default StaticShoppingBagScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const StaticShoppingBagPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Image
        //   source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
          style={styles.backArrowIcon}
        />
        <Text style={styles.headerTitle}>Shopping Bag</Text>
        <View style={{ width: 24 }} /> {/* Spacer to balance header */}
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Product Item Card */}
        <View style={styles.productCard}>
          <Image
            source={require('../../assets/wishlist/suit.png')} // Replace with actual product image
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Women's Casual Wear</Text>
            <Text style={styles.productDescription}>Checked Single-Breasted Blazer</Text>
            <View style={styles.dropdownContainer}>
              <View style={styles.dropdown}>
                <Text style={styles.dropdownLabel}>Size</Text>
                <Text style={styles.dropdownValue}>42</Text>
                <Image
                //   source={require('./assets/dropdown_arrow_small.png')} // Replace with your small dropdown arrow icon
                  style={styles.dropdownArrow}
                />
              </View>
              <View style={styles.dropdown}>
                <Text style={styles.dropdownLabel}>Qty</Text>
                <Text style={styles.dropdownValue}>1</Text>
                <Image
                //   source={require('./assets/dropdown_arrow_small.png')} // Replace with your small dropdown arrow icon
                  style={styles.dropdownArrow}
                />
              </View>
            </View>
            <Text style={styles.deliveryText}>
              Delivery by <Text style={styles.deliveryDate}>10 May 2XXX</Text>
            </Text>
          </View>
        </View>

        {/* Apply Coupons Section */}
        <View style={styles.couponsSection}>
          <Image
            // source={require('./assets/coupon_icon.png')} // Replace with your coupon icon
            style={styles.couponIcon}
          />
          <Text style={styles.couponsText}>Apply Coupons</Text>
          <Text style={styles.selectCouponsText}>Select</Text>
        </View>

        {/* Order Payment Details */}
        <View style={styles.orderPaymentDetails}>
          <Text style={styles.sectionTitle}>Order Payment Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Order Amounts</Text>
            <Text style={styles.detailValue}>₹ 7,000.00</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Convenience</Text>
            <Text style={styles.knowMoreText}>Know More</Text>
            <Text style={styles.applyCouponText}>Apply Coupon</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Delivery Fee</Text>
            <Text style={styles.deliveryFeeText}>Free</Text>
          </View>
        </View>

        {/* Order Total */}
        <View style={styles.orderTotalSection}>
          <Text style={styles.orderTotalLabel}>Order Total</Text>
          <Text style={styles.orderTotalValue}>₹ 7,000.00</Text>
          <View style={styles.emiRow}>
            <Text style={styles.emiAvailableText}>EMI Available</Text>
            <Text style={styles.detailsText}>Details</Text>
          </View>
        </View>

        {/* Bottom Fixed Area (Simulated) */}
        <View style={styles.bottomFixedArea}>
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmount}>₹ 7,000.00</Text>
            <Text style={styles.viewDetailsText}>View Details</Text>
          </View>
          <TouchableOpacity style={styles.proceedButton} onPress={()=> navigation.navigate('Payment')}>
            <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>

        {/* Extra space at the bottom to ensure content scrolls above potential bottom tabs */}
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
  productCard: {
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
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    fontSize: 13,
    color: '#777',
    marginBottom: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  dropdownLabel: {
    fontSize: 13,
    color: '#555',
    marginRight: 5,
  },
  dropdownValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  dropdownArrow: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: '#555',
  },
  deliveryText: {
    fontSize: 13,
    color: '#777',
  },
  deliveryDate: {
    fontWeight: 'bold',
    color: '#333',
  },
  couponsSection: {
    flexDirection: 'row',
    alignItems: 'center',
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
  couponIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#ff6600',
    marginRight: 10,
  },
  couponsText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectCouponsText: {
    fontSize: 14,
    color: '#ff6600',
    fontWeight: 'bold',
  },
  orderPaymentDetails: {
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailLabel: {
    flex: 1,
    fontSize: 14,
    color: '#555',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  knowMoreText: {
    fontSize: 12,
    color: '#ff6600',
    marginRight: 10,
  },
  applyCouponText: {
    fontSize: 14,
    color: '#ff6600',
    fontWeight: 'bold',
  },
  deliveryFeeText: {
    fontSize: 14,
    color: '#4CAF50', // Green for 'Free'
    fontWeight: 'bold',
  },
  orderTotalSection: {
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
  orderTotalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  orderTotalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 10,
  },
  emiRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emiAvailableText: {
    fontSize: 14,
    color: '#555',
    marginRight: 5,
  },
  detailsText: {
    fontSize: 14,
    color: '#ff6600',
    fontWeight: 'bold',
  },
  bottomFixedArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute', // Make it stick to the bottom
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  totalAmountContainer: {
    alignItems: 'flex-start',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  viewDetailsText: {
    fontSize: 12,
    color: '#ff6600',
    fontWeight: 'bold',
  },
  proceedButton: {
    backgroundColor: '#ff6600',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StaticShoppingBagPage;