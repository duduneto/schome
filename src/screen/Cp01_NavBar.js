import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStyles } from './useModules';

import { DrawerActions } from 'react-navigation-drawer';

const { width: screenWidth } = Dimensions.get('window')

export default function Cp00(compProps) {
  console.log(compProps)
  const logo = require('../images/logo.png')
  return (
      <View style={[useStyles.navBar, { backgroundColor: 'rgba(63,208,41,0)', height: 50, position: 'absolute', zIndex: 1, width: screenWidth}]}>
        
          <TouchableOpacity style={{left: 20, top: 17}} onPress={() => {
            compProps.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }} >
            <Icon name="bars" size={30} color='#a8a3d1' />
          </TouchableOpacity>
        <Text style={[useStyles.textMed, useStyles.textBold, useStyles.colorBlack]}></Text>
        <View>
        <Image
            style={{ height:60, width: 60, borderRadius: 35, top: 20, right: 15, borderWidth: 3, borderColor: '#a8a3d1' }}
            source={require('../images/profile.jpg')} />
        </View>
        
      </View>
  )

};