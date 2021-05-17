import React, {useEffect, useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';

// Styles
import {styles} from './styles';

// Component
import MoviePreview from '../../components/MoviePreview';

// Get data from API
import {getData} from '../../Api/ApiFile';

// Navigation
import {navigate} from '../../navigation/RootNavigation';

const MoviesScreen = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    getDataFromApi();
  }, []);
  const getDataFromApi = async () => {
    await getData(
      res => {
        //success
        const dataResponse = res.data;
        if (dataResponse !== undefined && dataResponse.results.length > 0) {
          setMoviesData(dataResponse.results);
        }
      },
      err => {
        //error
        console.log(err);
      },
    );
  };
  const onPress = item => {
    navigate('MovieDetailscreen', {item});
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {moviesData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => onPress(item)}>
            <MoviePreview
              key={index}
              title={item.title}
              voteAVR={item.vote_average}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoviesScreen;
