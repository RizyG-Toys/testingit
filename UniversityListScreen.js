// UniversityListScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import universitiesData from './universitiesData.json';

const UniversityListScreen = () => {
  const navigation = useNavigation();

  const handleUniversityPress = (universityName) => {
    navigation.navigate('Details', { universityName });
  };

  return (
    <View style={{
      backgroundColor: '#FFD8BB',
      flex: 1,
    }}>
      
      

      
      <Text style={{ paddingTop: 83, paddingBottom: 20, marginLeft: 20, marginRight: 20, fontSize: 16 }}>Choose a University:</Text>
      {universitiesData ? (
        universitiesData.map((university, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleUniversityPress(university.universityName)}
          >
            <Text style={{marginLeft: 20,}}>{university.universityName}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

export default UniversityListScreen;
