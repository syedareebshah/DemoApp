import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const ScreenB = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenName}>Screen B</Text>
    </View>
  );
};

export default ScreenB;
