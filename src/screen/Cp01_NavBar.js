import React from 'react';

import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStyles } from './useModules'

const { width: screenWidth } = Dimensions.get('window');

export default function Cp00() {
  const logo = require('../images/logo.png')
  return (

      <View style={[useStyles.navBar, { backgroundColor: 'rgba(63,208,41,0)', height: 50, position: 'absolute', zIndex: 1, width: screenWidth}]}>
        <TouchableOpacity
          onPress={() => {
            console.log('Voltando Tela')
          }}
        >
          <TouchableOpacity style={{left: 35, top: 20}} >
            <Icon name="bars" size={30} color="#e1e6ed" />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={[useStyles.textMed, useStyles.textBold, useStyles.colorBlack]}></Text>
        {/* <Text style={[useStyles.textMed, useStyles.textBold, useStyles.colorBlack, { width: 50 }]}>Profile</Text> */}
        <View>
        <Image
            style={{ height:60, width: 60, borderRadius: 35, top: 20, right: 20, borderWidth: 3, borderColor: '#fff' }}
            source={require('../images/profile.jpg')} />
        </View>
        
      </View>
  )

};