import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import SplashScreen from 'react-native-splash-screen';
import {useNavigateToDeepLink} from '../hooks/deeplinking';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  useNavigateToDeepLink();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
