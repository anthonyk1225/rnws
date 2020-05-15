import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScaledSheet } from 'react-native-size-matters';
import actions from './redux/actions';
import { Colors, Flex } from './styles';
import i18n from './constants/languages';
import * as RootNavigation from './navigation/rootNavigation';

const { entryActions } = actions;
const Stack = createStackNavigator();

const {
  container,
} = ScaledSheet.create({
  container: {
    flex: 1,
    ...Flex.colCenterCenter,
    backgroundColor: Colors.white,
  }
});

const Entry = ({ initws, isAuthenticated }) => {
  const [connected, setConnected] = useState(false);
  const prevIsAuthenticatedRef = useRef();

  useEffect(() => {
    prevIsAuthenticatedRef.current = isAuthenticated;
  })

  const prevIsAuthenticated = prevIsAuthenticatedRef.current;

  useEffect(() => {
    const connected = prevIsAuthenticated === false && isAuthenticated === true;
    const disconnected = prevIsAuthenticated === true && isAuthenticated === false;
    if (connected) {
      console.log("CONNECTED");
      setConnected(true);
    } else if (disconnected) {
      console.log("DISCONNECTED");
      // const currentScreen = RootNavigation.currentScreen();
      setConnected(false);
    }
  });

  const onConnectPress = () => {
    initws();
  }

  const stackScreen = () => (
    <View style={container}>
      <Button
        title="Connect"
        onPress={onConnectPress}
      />
      <Text>Currently {connected ? "connected" : "not connected"}</Text>
    </View>
  )

  return (
    <Stack.Navigator>
        <>
          <Stack.Screen
            name="Home"
            component={stackScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: Colors.headerBackgroundColor,
                shadowColor: 'transparent',
              },
              headerTintColor: Colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </>
    </Stack.Navigator>
  );
}

Entry.propTypes = {}

const mapStateToProps = ({
  entryReducer: {
    isAuthenticated,
  },
}) => ({
  isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  const combinedActions = {
    ...entryActions,
  };
  return bindActionCreators(combinedActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
