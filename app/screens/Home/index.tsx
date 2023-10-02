import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.screenName}>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenA')}>
        <Text style={styles.buttonTxt}>Go to A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenB')}>
        <Text style={styles.buttonTxt}>Go to B</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
