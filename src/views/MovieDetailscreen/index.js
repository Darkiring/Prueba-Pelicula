import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// Contants
import {URLIMAGE} from '../../utils/contants';

// Styles
import {styles} from './styles';

const MovieDetailscreen = props => {
  const [movieData] = useState(props.route.params.item);
  return (
    <View style={styles.container}>
      <Image
        style={styles.posterImage}
        source={{
          uri: URLIMAGE + movieData.poster_path,
        }}
      />
      <Text style={styles.title}>{movieData.title}</Text>
      <Text style={styles.voteAvrg}>{movieData.vote_average}/10</Text>
      <ScrollView>
        <Text style={styles.overview}>{movieData.overview}</Text>
      </ScrollView>
    </View>
  );
};

export default MovieDetailscreen;
