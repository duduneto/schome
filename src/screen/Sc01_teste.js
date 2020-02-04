import React, { useState } from 'react';
import { ScrollView, View, FlatList, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { useStyles, useReducer, useChangeRd } from './useModules'
import { useSelector, useDispatch } from 'react-redux';

const changeRd = (info) => {
  return { type: 'ADD_TESTE', ...info }
}


export default function TesteList() {

  const {listBands} = useReducer();

  const [values, setValues] = useState({});
  const handleTextChange = (value, name) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  }
  // const teste = useSelector(state => state.list)
  const dispatch = useDispatch();
  let scrollView;
  const callChangeRd = useChangeRd();
  const addData = (info) => {
    dispatch(changeRd(info));
  }
  console.log(useStyles)
  return (
    <>
      <ScrollView
        style={[useStyles.container]}
        ref={ref => scrollView = ref}
        onContentSizeChange={(contentWidth, contentHeight) => {
          scrollView.scrollToEnd({ animated: true });
        }}
        keyboardShouldPersistTaps={"always"}
      >
      {console.log(listBands)}
        {
          listBands && listBands.map((item, index) => (
            <TouchableOpacity style={[useStyles.item]} key={index}>
              <Text style={[useStyles.title]}>{item.title}</Text>
            </TouchableOpacity>
          ))
        }
        <View style={{
          flex: 0.2, flexDirection: 'column',
          justifyContent: 'center', marginTop: 7, marginBottom: 7,
          alignItems: 'center'
        }} >
          <TextInput
            style={[useStyles.input]}
            onChangeText={(text) => {
              handleTextChange(text, 'new_input')
            }}
          />
          <TouchableOpacity
            style={[useStyles.btn]}
            onPress={() => {
              console.log(values)
              addData({reducerName: 'listBands', reducerValue: {title: values.new_input}, behavior: 'include-array'});
            }}
          >
            <Text>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

// const styles = StyleSheet.create({
//   btn: {
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 1 },
//     elevation: 4,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 200,
//     height: 50
//   },
//   container: {
//     flex: 1,
//     marginTop: 10,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//   input: {
//     borderWidth: 2,
//     borderRadius: 8,
//     borderColor: '#ebebeb',
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//     marginHorizontal: 16,
//     width: 300,
//     height: 50,
//     marginBottom: 7
//   }
// });