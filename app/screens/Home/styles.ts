import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
    width: '50%',
    marginBottom: 5,
  },
  buttonTxt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
  },
  screenName: {
    fontSize: 25,
    fontWeight: '800',
    color: 'black',
  },
});
