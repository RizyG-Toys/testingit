import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import universitiesData from './universitiesData.json';
import Footer from './Footer';

const Drawer = createDrawerNavigator();


const UniversityDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const universityName = route.params.universityName;
  const university = universitiesData.find((uni) => uni.universityName === universityName);

  // Create state variables for each button's content visibility
  const [aboutUniversityVisible, setAboutUniversityVisible] = useState(false);
  const [admissionRequirementsVisible, setAdmissionRequirementsVisible] = useState(false);
  const [applicationDeadlineVisible, setApplicationDeadlineVisible] = useState(false);
  const [scholarshipInfoVisible, setScholarshipInfoVisible] = useState(false);
  const [feesVisible, setFeesVisible] = useState(false);
  const [rankingsVisible, setRankingsVisible] = useState(false);

  const ButtonWithIcon = ({ icon1, icon2, text, isVisible, toggleVisibility }) => {
    return (
      <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          marginRight: 20,
          marginLeft: 20,
          textAlign: 'center',
          width: 374,
          height: 50,
          fontSize: 16,
        }}
        onPress={toggleVisibility}
      >
        <View style={styles.iconContainer}>
          <View style={styles.icon1Container}>
            <Icon name={icon1} size={20} color="#FDA758" />
          </View>
          <Text style={{ color: '#573353', fontWeight: 'bold', marginLeft: 10, flex: 1 }}>{text}</Text>
          <View style={styles.icon2Container}>
            <Icon name={isVisible ? 'arrow-up' : 'arrow-down'} size={20} color="#FDA758" />
          </View>
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  return (
    
    <ScrollView style={{
      backgroundColor: '#FFD8BB',
      flex: 1,
      
    }}>
      
      
      
    
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.melb}>University Courses</Text>
          <Text style={styles.course}>Check out both undergraduate and postgraduate courses.</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonBelowText}
            onPress={() => {
              // Handle button click
            }}
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./img/testimage.png')} style={styles.image} />
        </View>

        
        
      </View>

      <ButtonWithIcon
        icon1="university"
        text={`About University:`}
        isVisible={aboutUniversityVisible}
        toggleVisibility={() => setAboutUniversityVisible(!aboutUniversityVisible)}
      />
      {aboutUniversityVisible && (
        <Text style={{ paddingVertical: 17, marginLeft: 20, marginRight: 20, alignItems: 'center', fontSize: 16 }}>{university.aboutUniversity}</Text>
      )}

      <ButtonWithIcon
        icon1="graduation-cap"
        text={`Admission Requirements:`}
        isVisible={admissionRequirementsVisible}
        toggleVisibility={() => setAdmissionRequirementsVisible(!admissionRequirementsVisible)}
      />
      {admissionRequirementsVisible && (
        <Text style={{ paddingVertical: 17, marginLeft: 20, marginRight: 20, fontSize: 16 }}>{university.admissionRequirements}</Text>
      )}

      <ButtonWithIcon
        icon1="calendar"
        text={`Application Deadline:`}
        isVisible={applicationDeadlineVisible}
        toggleVisibility={() => setApplicationDeadlineVisible(!applicationDeadlineVisible)}
      />
      {applicationDeadlineVisible && (
        <Text style={{ paddingVertical: 17, marginLeft: 20, marginRight: 20, fontSize: 16 }}>{university.deadline}</Text>
      )}

      <ButtonWithIcon
        icon1="dollar"
        text={`Scholarship Info:`}
        isVisible={scholarshipInfoVisible}
        toggleVisibility={() => setScholarshipInfoVisible(!scholarshipInfoVisible)}
      />
      {scholarshipInfoVisible && (
        <Text style={{ paddingVertical: 17, marginLeft: 20, marginRight: 20, fontSize: 16 }}>{university.scholarship}</Text>
      )}

      <ButtonWithIcon
        icon1="money"
        text={`Fees:`}
        isVisible={feesVisible}
        toggleVisibility={() => setFeesVisible(!feesVisible)}
      />
      {feesVisible && (
        <Text style={{ paddingVertical: 17, marginLeft: 20, marginRight: 20, fontSize: 16 }}>{university.fees}</Text>
      )}

      <ButtonWithIcon
        icon1="trophy"
        text={`Rankings:`}
        isVisible={rankingsVisible}
        toggleVisibility={() => setRankingsVisible(!rankingsVisible)}
      />
      {rankingsVisible && (
        <Text style={{ paddingVertical: 17, marginLeft: 20, marginRight: 20, fontSize: 16 }}>{university.rankings}</Text>
      )}

      <View><Footer /></View>
    </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 90,
    backgroundColor: 'white',
    width: 370,
    height: 150,
    marginLeft: 22,
    marginBottom: 35,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonBelowText: {
    backgroundColor: '#FDA758',
    padding: 10,
    borderRadius: 10,
    marginTop: 80,
    width: 110,
    height: 40,
    marginLeft: -180,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    color: '#573353',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  imageContainer: {
    marginRight: 15, // Adjust the margin to move the image to the far right
  },
  image: {
    width: 153,
    height: 153,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1, // Takes remaining space in the container
    marginLeft: 20, // Adjust the margin to move the text to the far left
    marginTop: -50,
    fontSize: 34,
    fontWeight: 'bold',
    width: 250,
    
  },

  melb: {
    flex: 1, // Takes remaining space in the container
    marginLeft: 5, // Adjust the margin to move the text to the far left
    marginTop: 70,
    fontSize: 20,
    width: 200,
    color: '#573353',
    fontWeight: 'bold',
    letterSpacing: 1,
    
    
  },

  course: {
    marginBottom: 70,
    width: 220,
    marginLeft: 5,
    color: '#573353',
    fontSize: 12,
    letterSpacing: 1,
  },

  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    width: 374,
    height: 150,
    
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Pushes icon1 and icon2 to the far left and far right, respectively
    alignItems: 'center',
  },
  icon1Container: {
    marginRight: 10, // Add spacing between icon1 and text
  },
  icon2Container: {
    marginLeft: 10, // Add spacing between icon2 and text
  },
});

export default UniversityDetailScreen;
