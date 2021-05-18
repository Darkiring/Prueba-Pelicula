import React from 'react';
import {View, Text} from 'react-native';

// Styles
import {styles} from './styles';

const MoviePreview = ({title, voteAVR}) => {
  const titleAbbreviated = titleAb => {
    let matches = titleAb.match(/\b(\w)/g);
    return matches.join('').toUpperCase();
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleRounded}>
        <Text styles={styles.textTitleUppe}>{titleAbbreviated(title)}</Text>
      </View>
      <View style={styles.containerSecond}>
        <Text>{title}</Text>
        <Text style={styles.textVote}>{voteAVR}/10</Text>
      </View>
    </View>
  );
};

export default MoviePreview;
