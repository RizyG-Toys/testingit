import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UniversityListScreen from './UniversityListScreen';
import UniversityDetailScreen from './UniversityDetailScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          
          <Drawer.Navigator
      initialRouteName="Uni List"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange', // Set the background color here
          
         
        },
        headerTintColor: 'black', // Set the text color
        headerTransparent: true,
        
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        

      }}
    >
      <Drawer.Screen name="Uni List" component={UniversityListScreen} />
      <Drawer.Screen name="Details" component={UniversityDetailScreen} />
    </Drawer.Navigator>
        </View>
      
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD8BB',
    paddingTop: 40,
    
    
  },
  footerContainer: { backgroundColor: '#333333' },
});
export default App;
