import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ScaledSheet } from 'react-native-size-matters';
import { Provider } from 'react-redux';
import Entry from './Entry';
import store from './redux/store';
import { Colors } from './styles';
import { navigationRef } from './navigation/rootNavigation';

const {
  container,
} = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  }
});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    const _loadResourcesAndDataAsync = async () => {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    const _lockScreenOrientation = async () => {
      try {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      } catch (error) {
        console.log('[[ error at _lockScreenOrientation ]]', error);
      }
    }

    _loadResourcesAndDataAsync();
    _lockScreenOrientation();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={container}>
          <NavigationContainer ref={navigationRef}>
            <Entry />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}
