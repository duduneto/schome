/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';

import { Provider } from 'react-redux';
import { Public } from './src/config/routeGroup';
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';
import store from './store';
import { Sc01_Signin, Sc02, Cp01_NavBar, Sc03 } from './src/screen';

import { createDrawerNavigator, DrawerItems } from 'react-navigation'

const App: () => React$Node = () => {
  
  const CustomDrawerComponent = (props) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Image src={{ uri: 'https://source.unsplash.com/collection/profile/1300x800' }} style={{height: 120, width: 120, borderRadius: 60}} />
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    )
  }

  const AppDrawerNavigation = createDrawerNavigator({
    Home: Sc02,
    Teste: Sc03
  }, {
    contentComponent:  CustomDrawerComponent,
  })

  return (
    <>
      <Provider store={store}>
        <Public />
        {/* <View style={{flex: 1}}>
        <AppDrawerNavigation />
          <Router>
            <Scene key="root" hideNavBar={true}>
              <Scene key="signin" component={Sc01_Signin} actions={Actions} />
              <Scene key="home" component={Sc02} actions={Actions} />
            </Scene>
          </Router>
        </View> */}
      </Provider>
    </>
  );
};


export default App;
