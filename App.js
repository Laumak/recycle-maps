import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapView from './src/views/MapView';
import LocationView from './src/views/LocationView';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen name="Map" component={MapView} />
      <Stack.Screen
        name="Location"
        component={LocationView}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
