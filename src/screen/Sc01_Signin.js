import React, { useState } from 'react';

import { ImageBackground, View, TouchableOpacity, Text, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useStyles, UseLoader, useChangeRd, useReducer } from './useModules';

const { width: screenWidth } = Dimensions.get('window');

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
            source={{ uri: 'https://source.unsplash.com/collection/landscape12/1300x800' }}
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
                    :
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} >
                      <View style={{ flexDirection: 'row', width: screenWidth - 60, backgroundColor: '#fff', borderRadius: 10, borderWidth: 0, borderColor: '#e1e6ed', height: 55, marginVertical: 15 }}>
                        <TouchableOpacity onPress={() => console.log('Pesquisando ...')} >
                          <View style={{ bottom: 0, left: 5, top: 0,margin: 10, justifyContent: 'center' }}>
                            <Icon name="user" size={30} color='#736f94' />
                          </View>
                        </TouchableOpacity>
                        <TextInput
                          style={{ width: screenWidth - 100, marginLeft: 50 }}
                          placeholder={'Search'}
                        />
                      </View>
                      <View style={{ flexDirection: 'row', width: screenWidth - 60, backgroundColor: '#fff', borderRadius: 10, borderWidth: 0, borderColor: '#e1e6ed', height: 55, marginVertical: 15 }}>
                        <TouchableOpacity onPress={() => console.log('Pesquisando ...')} >
                          <View style={{ bottom: 0, left: 5, top: 2,margin: 10, justifyContent: 'center' }}>
                            <Icon name="key" size={30} color='#736f94' />
                          </View>
                        </TouchableOpacity>
                        <TextInput
                          style={{ width: screenWidth - 100, marginLeft: 42 }}
                          placeholder={'Search'}
                        />
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                        <TouchableOpacity
                          style={[useStyles.btn, useStyles.btnPrimary, {borderRadius: 5, backgroundColor: '#736f94'}]}
                          onPress={() => {
                            loadLoader()
                          }}
                        >
                          <Text style={[useStyles.textMed, useStyles.textBold, useStyles.colorWhite]}>LOGIN</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                }
              </View>
            </View>

          </ImageBackground>
      }
    </>
  )
}