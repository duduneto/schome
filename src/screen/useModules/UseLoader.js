// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// import Internal Components
import { useStyles } from './';

// ------------------------------
// #endregion

const UseLoader = (props) => (
  // #region [useMorfos]
  // ------------------------------

  <View style={[{...props.style}]}>
    <ActivityIndicator size="large" color="#222" />
  </View>

  // ------------------------------
  // #endregion
);

export default UseLoader;
