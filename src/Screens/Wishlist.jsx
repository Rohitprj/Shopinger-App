import React from 'react';
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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Sample Product Data (replace with your actual data source)
const PRODUCTS_DATA = [
  {
    id: '1',
    image: require('../../assets/wishlist/jacket.png'), // Replace with your actual image path
    title: 'Black Winter...',
    description: "Autumn And Winter Casual Men's Solid Color Jacket",
    price: '₹2,500',
    rating: '4.5',
    reviews: '2,092',
  },
  {
    id: '2',
    image: require('../../assets/wishlist/shirt.png'), // Replace with your actual image path
    title: 'Mens Story',
    description: 'Mens Story Casual Printed Shirt',
    price: '₹999',
    rating: '4.7',
    reviews: '2,344',
  },
  {
    id: '3',
    image: require('../../assets/wishlist/bodycon.png'), // Replace with your actual image path
    title: 'Black Dress',
    description: 'Solid Plain Round Neck for Women, Black Dress',
    price: '₹2,000',
    rating: '4.6',
    reviews: '3,245',
  },
  {
    id: '4',
    image: require('../../assets/wishlist/suit.png'), 
    title: 'Faux Brocade...',
    description: 'LEHENGA CHOLI Readymade',
    price: '₹1,900',
    rating: '4.3',
    reviews: '1,897',
  },
  {
    id: '5',
    image: require('../../assets/wishlist/skirt.png'), 
    title: 'Flare Dress',
    description: 'Beautiful Pink & Dark Orange',
    price: '₹1,880',
    rating: '4.4',
    reviews: '2,500',
  },
  {
    id: '6',
    image: require('../../assets/wishlist/shorts.png'), 
    title: 'denim drees',
    description: 'Womens Denim Blue Dress Look',
    price: '₹2,599',
    rating: '4.5',
    reviews: '2,534',
  },
  {
    id: '7',
    image: require('../../assets/wishlist/jordan.png'), 
    title: 'Jordan Stay',
    description: 'New Design Jordan 10 for',
    price: '₹8,000',
    rating: '4.8',
    reviews: '16,23,456',
  },
  {
    id: '8',
    image: require('../../assets/wishlist/mobile.png'), 
    title: 'Realme 7',
    description: 'Realme 7 Pro (Mirror Blue, 8GB |',
    price: '₹16,999',
    rating: '4.2',
    reviews: '2,345,987',
  },
  {
    id: '9',
    image: require('../../assets/wishlist/bodycon.png'), 
    title: 'Sony PS4',
    description: 'Sony PlayStation 4 1TB Slim',
    price: '₹31,900',
    rating: '4.9',
    reviews: '9,235,566',
  },
  {
    id: '10',
    image: require('../../assets/wishlist/jacket.png'), 
    title: 'Black Jacket 12...',
    description: 'This mens and womens casual',
    price: '₹2,500',
    rating: '4.7',
    reviews: '3,23,500',
  },
  {
    id: '11',
    image: require('../../assets/wishlist/jordan.png'), 
    title: 'D7200 Digital C...',
    description: 'D7200E Digital Camera',
    price: '₹20,000',
    rating: '4.8',
    reviews: '97,458',
  },
  {
    id: '12',
    image: require('../../assets/wishlist/bodycon.png'), 
    title: "men's & boys s...",
    description: 'George Walker Derbys Brown',
    price: '₹555',
    rating: '4.3',
    reviews: '1,43,879',
  },
  // Add more products as needed
];

const ProductCard = ({ item }) => (
  <View style={styles.productCard}>
    <Image
      source={item.image}
      style={styles.productImage}
    />
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productDescription}>{item.description}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
    <View style={styles.ratingContainer}>
      <Image
        // source={require('./assets/star_icon.png')} // Make sure you have this icon
        style={styles.starIcon}
      />
      <Text style={styles.ratingText}>{item.rating}</Text>
      <Text style={styles.reviewCount}>({item.reviews})</Text>
    </View>
  </View>
);


const App = () => { // You might want to rename this component, e.g., ProductsPage
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
          {/* <TouchableOpacity style={styles.headerIconContainer}>
            <Image
              // source={require('./assets/bell_icon.png')} // Replace with your bell icon
              style={styles.headerIcon}
            />
          </TouchableOpacity> */}
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
      <View style={styles.searchContainer}>
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
      </View>

      {/* Items Count and Filters */}
      <View style={styles.filterBar}>
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
      </View>

      {/* Product Grid using FlatList */}
      <FlatList
        data={PRODUCTS_DATA}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 columns
        columnWrapperStyle={styles.row} // Style for rows
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => ( // Add the bottom banner as a footer
          <Image
            // source={require('./assets/promo_bottom_banner.png')} // Replace with your bottom promo banner
            style={styles.bottomPromoBanner}
          />
        )}
      />

      {/* Bottom tabs will be rendered by your existing App.js */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingHorizontal: 15, // Padding for the FlatList content
    paddingBottom: 20, // Add some bottom padding to make space for the banner and potentially bottom tabs
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15, // Margin between rows
  },
  productCard: {
    width: (width - 45) / 2, // Calculate width for 2 columns with spacing
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 11,
    color: '#777',
    marginBottom: 8,
    minHeight: 30, // To ensure consistent height for description and prevent layout shifts
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 5,
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
  bottomPromoBanner: {
    width: width - 30, // Match the width of the FlatList content area
    height: 150, // Adjust height as per your image
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 20, // Space above the banner
    marginBottom: 20, // Space below the banner before the end of the scroll view
    alignSelf: 'center', // Center the banner
  },
});

export default App; // Or your new component name like ProductsScreen