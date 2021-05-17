import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    margin: 18,
    borderWidth: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  titleRounded: {
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  containerSecond: {
    flexDirection: 'column',
  },
  textVote: {
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
});
