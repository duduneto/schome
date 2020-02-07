import React from 'react';

import { View, ScrollView, Text, Image, Dimensions, TextInput, TouchableOpacity, } from 'react-native';

import {Sc02, Sc03} from './'

import { createDrawerNavigator } from 'react-navigation';

export default function Cp00() {

  const Drawer = createDrawerNavigator();


  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Sc02} />
      <Drawer.Screen name="Article" component={Sc03} />
    </Drawer.Navigator>
    <Text>HEELLOW POST</Text>
    </>

    /* */

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  //_______________________________

  return <SCREEN />;


}
