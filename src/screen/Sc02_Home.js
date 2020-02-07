import React from 'react';

import { View, ScrollView, Text, Image, Dimensions, TextInput, TouchableOpacity, } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Cp01_NavBar } from './';
import { Actions } from 'react-native-router-flux';
import { useStyles } from './useModules';

const { width: screenWidth } = Dimensions.get('window');

export default function Cp00(compProps) {
  console.log(compProps)
  const SCREEN = () => (
    // #region [component]
    // ------------------------------

    <>
      <_STYLE>
        <BLOCK01 />
        <BLOCK02 />
        <BLOCK03 />
        <BLOCK04 />
      </_STYLE>
    </>

    /* */

    // ------------------------------
    // #endregion
  );

  // set COMPONENTS
  //_______________________________

  const _STYLE = props => {
    // #region [NOsetLogic]
    // ------------------------------

    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <ScrollView
        style={[useStyles.container, { marginTop: 0, backgroundColor: '#e4dfeb' }]}
      >
        <Cp01_NavBar props={compProps} />
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          {props.children}
        </View>
      </ScrollView>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________

  const BLOCK01 = props => {
    // #region [NOsetLogic]
    // ------------------------------
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------

      <View style={{ flex: 1, position: 'relative' }}>
        <Image
          style={{ height: 250, width: screenWidth + 60, position: 'relative', alignSelf: 'flex-end', left: 30 }}
          source={{ uri: 'https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }} />
          <LinearGradient colors={['#fff', '#0000']} style={{width: screenWidth, height: 90, position: 'absolute', top: 0, left: 30}} />
          <LinearGradient colors={['#0000', '#e4dfeb']} style={{width: screenWidth, height: 50, position: 'absolute', top: 200, left: 30}} />
        {/* <View style={{backgroundColor: '#000', width: screenWidth, height: 90, position: 'absolute', top: 0, left: 30}} ></View> */}
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________


  const BLOCK02 = props => {
    // #region [NOsetLogic]
    // ------------------------------
    // ------------------------------
    // #endregion

    return (
      // #region [component]
      // ------------------------------
      <View style={{ flex: 1, position: 'relative', bottom: 23.5 }}>
        <View style={{ flexDirection: 'row', width: screenWidth - 28, backgroundColor: '#fff', borderRadius: 10, borderWidth: 0, borderColor: '#e1e6ed', height: 45 }}>
          <TouchableOpacity onPress={() => console.log('Pesquisando ...')} >
            <View style={{ bottom: 2, margin: 10, justifyContent: 'center' }}>
              <Icon name="search" size={30} color='#736f94' />
            </View>
          </TouchableOpacity>
          <TextInput
            style={{ width: screenWidth - 100, marginLeft: 50 }}
            placeholder={'Search'}
          />
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };

  //_______________________________


  const BLOCK03 = props => {
    // #region [NOsetLogic]
    // ------------------------------
    // ------------------------------
    // #endregion
    _renderItem = ({ item, index }) => {
      return (
        <View style={{ flex: 1, backgroundColor: '#0000', padding: 15, paddingLeft: 0, paddingRight: 0, paddingTop: 10}}>
          <TouchableOpacity 
          style={{ flex: 1, width: 150, height: 200, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', shadowColor: '#000', elevation: 8, left: 15 }} 
          onPress={() => {
            Actions.jump('post')
          }}
          >
            <Image
              style={{ height: 150, width: 150, position: 'relative', alignSelf: 'center' }}
              source={{ uri: item.imageUrl ? item.imageUrl : 'https://source.unsplash.com/collection/landscape' + index + 2 + 1 }} />
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <View style={{ top: 12.5, left: 12.5 }}><Icon name="heart" size={25} color="#ff455e" /></View>
              <View style={{ top: 12.5 }}><Icon name="star" size={25} color="#ffc745" /></View>
              <View style={{ top: 12.5, right: 12.5 }}><Icon name="share-alt" size={25} color="#5f6182" /></View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      // #region [component]
      // ------------------------------
      <View style={{ flex: 1, position: 'relative', paddingLeft: 50 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, paddingRight: 40 }}>
          <Text style={useStyles.textMed} >Popular Pics</Text>
          <TouchableOpacity>
            <Text style={[useStyles.textMed, { color: '#736f94' }]}>See More</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, right: 30 }}>
          <Carousel
            ref={(c) => { _carousel = c; }}
            data={[
              { title: '', imageUrl: 'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' }, 
              { title: '', imageUrl: 'https://images.unsplash.com/photo-1477064996809-dae46985eee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, 
              { title: '', imageUrl: 'https://images.unsplash.com/photo-1466769275244-c996f42704ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=734&q=80' }, 
              { title: '', imageUrl: 'https://images.unsplash.com/photo-1511151083847-62cedb3a5ea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, 
              { title: '', imageUrl: 'https://images.unsplash.com/photo-1505340843-6554dea802df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }, 
              { title: '', imageUrl: 'https://images.unsplash.com/photo-1566903218203-3524b6e427c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1050&q=80' }]}
            renderItem={_renderItem}
            sliderWidth={screenWidth}
            itemWidth={170}
            activeSlideAlignment={'start'}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
          />
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };
  //_______________________________


  const BLOCK04 = props => {
    // #region [NOsetLogic]
    // ------------------------------
    // ------------------------------
    // #endregion
    _renderItem = ({ item, index }) => {
      return (
        <View style={{ flex: 1, backgroundColor: '#0000', padding: 15, paddingLeft: 10, paddingRight: 0 }}>
          <View style={{ flex: 1, width: 100, height: 100, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', paddingTop: 8, shadowColor: '#000', elevation: 8 }} >
            <Image
              style={{ height: 55, width: 55, position: 'relative', alignSelf: 'center', borderRadius: 40 }}
              source={{ uri: item.imageUrl ? item.imageUrl : 'https://source.unsplash.com/collection/profiles' + index + 1 + 1 }} />
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text>{item.title}</Text>
              <Text style={{ color: '#bbb', fontSize: 10 }}>{item.sub}</Text>
            </View>
          </View>
        </View>
      );
    }

    return (
      // #region [component]
      // ------------------------------
      <View style={{ flex: 1, position: 'relative', marginTop: 10, marginBottom: 30, paddingLeft: 60 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, paddingRight: 40 }}>
          <Text style={useStyles.textMed} >Popular Profiles</Text>
          <TouchableOpacity>
            <Text style={[useStyles.textMed, { color: '#736f94' }]}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, right: 30 }}>
          <Carousel
            ref={(c) => { _carousel = c; }}
            data={[
              { title: 'Lina', sub: 'USA', imageUrl: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' }, 
              { title: 'May', sub: 'France', imageUrl: 'https://images.unsplash.com/photo-1505456233983-a92f0044f721?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }, 
              { title: 'Peter', sub: 'Italy',imageUrl: 'https://images.unsplash.com/photo-1505455221201-c5249c8d9599?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }, 
              { title: 'Jessica', sub: 'Brazil',imageUrl: 'https://images.unsplash.com/photo-1520719627573-5e2c1a6610f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' }, 
              { title: 'Paloma', sub: 'Mexico', imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }, 
              { title: 'Yuon', sub: 'China', imageUrl: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }]}
            renderItem={_renderItem}
            sliderWidth={screenWidth}
            itemWidth={120}
            activeSlideAlignment={'start'}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
          />
        </View>
      </View>

      // ------------------------------
      // #endregion
    );
  };
  //_______________________________

  return <SCREEN />;


}
