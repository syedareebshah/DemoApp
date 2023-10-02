import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const ScreenA = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenName}>Screen A</Text>
    </View>
  );
};

export default ScreenA;
