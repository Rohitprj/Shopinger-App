// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Checkout() {
//   return (
//     <View>
//       <Text>Checkout</Text>
//     </View>
//   )
// }


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  Alert, // For basic validation feedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker'; // For the State dropdown

const { width } = Dimensions.get('window');

const CheckoutScreen = ({ navigation }) => {
  // State for Personal Details
  const [email, setEmail] = useState('aashilta@gmail.com');
  const [password, setPassword] = useState('**********');

  // State for Address Details
  const [pincode, setPincode] = useState('110059');
  const [address, setAddress] = useState('House no. 81, Hastsal Village');
  const [city, setCity] = useState('New Delhi');
  const [selectedState, setSelectedState] = useState('NCR of Delhi');
  const [country, setCountry] = useState('India');

  // State for Bank Account Details
  const [bankAccountNumber, setBankAccountNumber] = useState('204356XXXXXX');
  const [accountHolderName, setAccountHolderName] = useState('Devashish Nayak');
  const [ifscCode, setIfscCode] = useState('SBIN00428');

  const handleSave = () => {
    // Basic validation
    if (!email || !password || !pincode || !address || !city || !selectedState || !country ||
        !bankAccountNumber || !accountHolderName || !ifscCode) {
      Alert.alert('Missing Information', 'Please fill in all details before saving.');
      return;
    }

    // In a real application, you would send this data to a backend API
    // For now, just show an alert
    Alert.alert('Details Saved', 'Your checkout details have been saved successfully!');
    // Optionally navigate back or to the next step
    // navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            // source={require('./assets/back_arrow.png')} // Replace with your back arrow icon
            style={styles.backArrowIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} /> {/* Spacer to balance header */}
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* User Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/images/group_Profile.png')} // Replace with your avatar image
            // style={styles.avatarImage}
          />
          {/* <Image
            // source={require('./assets/verified_icon.png')} // Replace with your verified icon
            style={styles.verifiedIcon}
          /> */}
        </View>

        {/* Personal Details Section */}
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>

        {/* Address Details Section */}
        <Text style={styles.sectionTitle}>Address Details</Text>
        <Text style={styles.label}>Pincode</Text>
        <TextInput
          style={styles.textInput}
          value={pincode}
          onChangeText={setPincode}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.textInput}
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.textInput}
          value={city}
          onChangeText={setCity}
        />
        <Text style={styles.label}>State</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedState}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedState(itemValue)
            }
            style={styles.picker}
            dropdownIconColor="#000" // For Android dropdown icon color
          >
            <Picker.Item label="NCR of Delhi" value="NCR of Delhi" />
            <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
            <Picker.Item label="Maharashtra" value="Maharashtra" />
            {/* Add more states as needed */}
          </Picker>
          <Image
            // source={require('./assets/dropdown_arrow.png')} // Custom dropdown arrow if default is not good
            style={styles.dropdownArrow}
          />
        </View>

        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.textInput}
          value={country}
          onChangeText={setCountry}
        />

        {/* Bank Account Details Section */}
        <Text style={styles.sectionTitle}>Bank Account Details</Text>
        <Text style={styles.label}>Bank Account Number</Text>
        <TextInput
          style={styles.textInput}
          value={bankAccountNumber}
          onChangeText={setBankAccountNumber}
          keyboardType="numeric"
          secureTextEntry // Mask some digits as in screenshot
        />
        <Text style={styles.label}>Account Holder's Name</Text>
        <TextInput
          style={styles.textInput}
          value={accountHolderName}
          onChangeText={setAccountHolderName}
        />
        <Text style={styles.label}>IFSC Code</Text>
        <TextInput
          style={styles.textInput}
          value={ifscCode}
          onChangeText={setIfscCode}
          autoCapitalize="characters" // IFSC codes are usually uppercase
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={()=>navigation.navigate('CheckoutProduct')}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        {/* Extra space at the bottom to ensure last fields are not cut off by default */}
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
    flexGrow: 1, // Allows content to grow and scroll
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ff6600', // Border around avatar
  },
  verifiedIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14, // Makes it circular
    backgroundColor: '#fff', // White background for the checkmark icon
    padding: 3, // Padding to ensure checkmark is within white circle
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    marginTop: 15, // Space between input fields
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  changePasswordText: {
    color: '#ff6600',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 20, // Space before next section title
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'center', // Center content vertically
    height: 50, // Fixed height for consistency
  },
  picker: {
    color: '#333',
    height: 50, // Important for iOS to control picker height
    width: '100%',
  },
  dropdownArrow: {
    position: 'absolute',
    right: 15,
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#555',
  },
  saveButton: {
    backgroundColor: '#ff6600',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;