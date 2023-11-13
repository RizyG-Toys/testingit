// Footer.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <ImageBackground
      source={require('./img/Rectangle.png')} // Replace with the actual path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="home" size={24} color="#FC9D45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="search" size={24} color="#FC9D45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="notifications" size={24} color="#FC9D45" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings" size={24} color="#FC9D45" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    position:"absolute",
    bottom:0
    
  },
  button: {
    color: '#FC9D45',
    padding: 10,
    borderRadius: 10,
  },
});

export default Footer;
