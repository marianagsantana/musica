import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PlantingFormScreen from './screens/PlantingFormScreen';
import PlantFormScreen from './screens/PlantFormScreen';
import MusicListScreen from './screens/MusicListScreen';
import PlayListsListScreen from './screens/PlayListsListScreen';
import HarvestPlanScreen from './screens/HarvestPlanScreen';
import PlantingPlanScreen from './screens/PlantingPlanScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlantingForm" component={PlantingFormScreen} />
        <Stack.Screen name="PlantForm" component={PlantFormScreen} />
        <Stack.Screen name="MusicList" component={MusicListScreen} />
        <Stack.Screen name="PlayListsList" component={PlayListsListScreen} />
        <Stack.Screen name="HarvestPlan" component={HarvestPlanScreen} />
        <Stack.Screen name="PlantingPlan" component={PlantingPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Routes;
