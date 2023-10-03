import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export function useNavigateToDeepLink() {
  const navigation: any = useNavigation();
  const handleDynamicLink = (link: any) => {
    if (!link?.url) {
      return;
    }
    let temp = link.url.split('page=');
    if (temp[1] == 'two') {
      navigation.navigate('ScreenB');
    } else if (temp[1] == 'one') {
      navigation.navigate('ScreenA');
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        handleDynamicLink(link);
      });
  }, []);
  return null;
}
