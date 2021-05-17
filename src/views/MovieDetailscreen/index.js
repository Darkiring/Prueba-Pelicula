import React from 'react';
import {View, Image} from 'react-native';

// Contants
import {URL} from '../../utils/contants';

// Styles
import {styles} from './styles';

const MovieDetailscreen = ({item}) => {
  return (
    <View styles={styles.container}>
      <Image
        style={styles.posterImage}
        source={{
          uri: URL + item.poster_path,
        }}
      />
    </View>
  );
};

export default MovieDetailscreen;
