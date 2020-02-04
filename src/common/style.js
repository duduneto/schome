import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  // COLORS
colorWhite:{
  color: '#fff'
},
colorBlack:{
  color: '#000'
},
// NAVBAR
navBar:{
  flex:0.1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff'
},
// BUTTON
  btn: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50
  },
  btnPrimary:{
    backgroundColor: '#7297db'
  },

// TEXT

textSmall:{
  fontFamily: 'Antipasto Pro',
  fontSize: 12
},
textMed:{
  fontFamily: 'Antipasto Pro',
  fontSize: 17
},
textLarge:{
  fontFamily: 'Antipasto Pro',
  fontSize: 22
},
textBold:{
  fontFamily: 'Antipasto Pro',
  fontWeight: 'bold'
},


  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ebebeb',
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginHorizontal: 16,
    width: 300,
    height: 50,
    marginBottom: 7
  }
})

export default Styles;