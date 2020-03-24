import { Dimensions } from 'react-native'


export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const colors = {
  mainYellow: '#fec100',
  white: 'white',
  greyD8: '#d8d8d8',
  greyC8: '#cec8aa',
  greyB5: '#b5b5b5'
}

export const fontSizes = {
  12: windowHeight * 0.018,
  14: windowHeight * 0.02,
  20: windowHeight * 0.03
}