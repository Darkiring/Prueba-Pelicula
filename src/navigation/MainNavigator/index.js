import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import MoviesScreen from '../../views/MoviesScreen';
import MovieDetailscreen from '../..//views/MovieDetailscreen';

const MainNavigator = () => {
  const getTitle = () => {
    let utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    return `Peliculas ${utc}`;
  };
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={{title: getTitle()}}
      />
      <Stack.Screen name="MovieDetailscreen" component={MovieDetailscreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
