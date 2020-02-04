/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';
import store from './store';
import { Sc01_Signin, Sc02, Cp01_NavBar } from './src/screen';

const App: () => React$Node = () => {
  useEffect(() => {

  }, [])
  return (
    <>
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router>
            <Scene key="root" hideNavBar={true}>
              <Scene key="signin" component={Sc01_Signin} actions={Actions} />
              <Scene key="home" component={Sc02} actions={Actions} />
            </Scene>
          </Router>
        </View>
      </Provider>
    </>
  );
};


export default App;
