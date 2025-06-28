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
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const AddReviewScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [rating, setRating] = useState(0); // State to store selected star rating

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmitReview = () => {
    if (!name || !experience || rating === 0) {
      Alert.alert('Missing Information', 'Please fill in your name, describe your experience, and select a star rating.');
      return;
    }
    // Here you would typically send the review data to your backend
    Alert.alert('Review Submitted', `Thank you for your ${rating}-star review, ${name}!`);
    // Reset form or navigate back
    setName('');
    setExperience('');
    setRating(0);
    navigation.goBack(); // Navigate back after submission
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
        <Text style={styles.headerTitle}>Add Review</Text>
        <View style={{ width: 24 }} /> {/* Spacer to balance header */}
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        {/* Experience Input */}
        <Text style={styles.label}>How was your experience ?</Text>
        <TextInput
          style={styles.textAreaInput}
          placeholder="Describe your experience?"
          placeholderTextColor="#999"
          multiline
          numberOfLines={6} // Approx lines visible
          value={experience}
          onChangeText={setExperience}
          textAlignVertical="top" // Important for multiline Android
        />

        {/* Star Rating */}
        <Text style={styles.label}>Star</Text>
        <View style={styles.starRatingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
              {/* <Image
                // source={
                //   star <= rating
                //     ? require('./assets/star_icon_filled.png') // Filled star icon
                //     : require('./assets/star_icon_outline.png') // Outline star icon
                // }
                style={styles.starIcon}
              /> */}
              <Text>⭐</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button (not in screenshot, but essential for functionality) */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReview}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
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
    flexGrow: 1, // Allows content to grow and scroll if needed
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 20, // Space above each section
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000', // Small shadow for depth
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  textAreaInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#eee',
    minHeight: 120, // Increased height for multiline input
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  starRatingContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30, // Space below stars
  },
  starIcon: {
    width: 35, // Larger stars
    height: 35,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '#ffc107', // Gold color for stars
  },
  submitButton: {
    backgroundColor: '#ff6600',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30, // Space above button
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddReviewScreen;