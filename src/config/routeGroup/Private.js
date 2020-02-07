import React from 'react';

import { View, ScrollView, Text, Image, Dimensions, SafeAreaView, TouchableOpacity, } from 'react-native';

import { Sc02, Sc03 } from '../../screen'

import { useChangeRd } from '../../screen/useModules';

import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import { Router, Scene, Actions, Modal } from 'react-native-router-flux';

export default function Cp00(compProps) {

  const callChangeRd = useChangeRd();

  const CustomDrawerComponent = (props) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', height: 150, marginVertical: 40 }} >
          {/* <View style={{backgroundColor: '#000', width: 50, height: 50}}></View> */}
          <Image
            style={{ height: 120, width: 120, borderRadius: 60, top: 20, right: 15, borderWidth: 3, borderColor: '#a8a3d1' }}
            source={require('../../images/profile.jpg')} />

        </View>
        {/* <View style={{height: 150,width: 200 ,backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}> */}
        {/* </View> */}
        <View style={{flex: 1,flexDirection: 'column', justifyContent: 'space-between' }}>
          <ScrollView>
            {console.log(props)}
            <DrawerItems {...props} />
          </ScrollView>
          <TouchableOpacity style={{backgroundColor: '#e6e6e6', height: 50, flexDirection: 'column', justifyContent: 'center', paddingLeft: 18}} 
          onPress={() => {console.log(Actions); callChangeRd({reducerName: 'rdAuthUser', reducerValue: false}); Actions.jump('signin') }}>
            <Text style={{color: '#736f94', fontFamily: 'Antipasto Pro', fontSize: 17}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const AppDrawerNavigation = createDrawerNavigator({
    Home: Sc02,
    Teste: Sc03
  }, {
    
      contentComponent: CustomDrawerComponent,
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: '#736f94',
        activeLabelStyle: { marginVertical: 20 },

        inactiveTintColor: '#736f94'
      }
    })

  console.log(compProps)
  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <AppDrawerNavigation />

    /* */

    // ------------------------------
    // #endregion
  );

  return <SCREEN />;


}
