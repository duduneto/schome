import React, { useState } from 'react';

import { ImageBackground, View, TouchableOpacity, Text } from 'react-native';

import { useStyles, UseLoader, useChangeRd, useReducer } from './useModules'

export default function Sc00(props) {
  const callChangeRd = useChangeRd();
  const { rdAuthUser } = useReducer();

  const [values, setValues] = useState({});
  const changeState = (name, value) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  }

  const loadLoader = () => {
    changeState('loader', true);
    setTimeout(() => {
      changeState('loader', false);
      callChangeRd({ reducerName: 'rdAuthUser', reducerValue: true })
    }, 1000)
  }

  let _backgroundImage = require('../images/signin-background.jpeg')
  return (
    <>
      {
        rdAuthUser 
        ? props.actions.jump('home')
        : <ImageBackground
          style={{
            flex: 1,
            overflow: 'hidden'
          }}
          source={_backgroundImage}
        >
          <View style={{ flex: 1 }}>
            <View style={{
              flex: 1, flexDirection: 'column',
              justifyContent: 'center', marginTop: 7, marginBottom: 7,
              alignItems: 'center'
            }} >
              {
                values.loader
                  ? <UseLoader />
                  : <TouchableOpacity
                    style={[useStyles.btn, useStyles.btnPrimary]}
                    onPress={() => {
                      loadLoader()
                    }}
                  >
                    <Text style={[useStyles.textMed, useStyles.textBold, useStyles.colorWhite]}>LOGIN</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>

        </ImageBackground>
      }
    </>
  )
}