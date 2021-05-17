import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import MoviesScreen from '../../views/MoviesScreen';
import MovieDetailscreen from '../..//views/MovieDetailscreen';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
      <Stack.Screen name="MovieDetailscreen" component={MovieDetailscreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
