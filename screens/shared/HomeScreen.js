import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import { Ionicons } from '@expo/vector-icons';

const categories = ['Music', 'Artist', 'Food', 'Shaadi', 'Concert', 'Party'];
const mockEvents = [
  { id: '1', title: 'Event 1', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Event 2', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Event 3', image: 'https://via.placeholder.com/150' },
];

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const renderCategoryCards = (category) => (
    <View key={category} style={styles.categorySection}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <FlatList
        horizontal
        data={mockEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Ionicons
            name="menu"
            size={24}
            onPress={() => console.log('Menu pressed')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          style={styles.categories}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => console.log(`Selected ${category}`)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Event Sections */}
        {categories.map((category) => renderCategoryCards(category))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    height: 40,
  },
  categories: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  categoryItem: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  categorySection: {
    marginVertical: 15,
    marginHorizontal: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;
