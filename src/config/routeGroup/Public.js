import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import Private from './Private'
import { Sc01_Signin, Sc04 } from '../../screen'
import {useChangeRd} from '../../screen/useModules'
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';



const Public = (props) => {
  
  return (
    <View style={{ flex: 1 }}>
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="signin" component={Sc01_Signin} actions={Actions} />
          <Scene key="home" component={Private} actions={Actions} />
          <Scene key="post" component={Sc04} actions={Actions} />
        </Scene>
      </Router>
    </View>
  )
}
export default Public