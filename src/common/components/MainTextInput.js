import React from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native'
import { fontSizes, colors, windowHeight } from '../theme/theme'


export const MainTextInput = (props) => (
  <View style={[styles.container, props.style]}>
    <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    <TextInput
      style={[
        styles.textInput,
        props.left
          ? styles.borderLeftEmpty
          : styles.borderRightEmpty
      ]}
    />
  </View>
)


const styles = StyleSheet.create({
  container: {
    width: windowHeight * 0.45,
  },
  title: {
    fontSize: fontSizes[14],
    color: colors.greyB5,
    fontWeight: '600'
  },
  textInput: {
    marginTop: windowHeight * 0.01,
    height: windowHeight * 0.07,
    borderColor: colors.greyB5,
    borderTopWidth: windowHeight * 0.001,
    borderBottomWidth: windowHeight * 0.001,
    paddingLeft: windowHeight * 0.01,
    fontSize: fontSizes[14]
  },
  borderLeftEmpty: {
    borderRightWidth: windowHeight * 0.001,
    borderTopRightRadius: windowHeight * 0.01,
    borderBottomRightRadius: windowHeight * 0.01,
  },
  borderRightEmpty: {
    borderLeftWidth: windowHeight * 0.001,
    borderTopLeftRadius: windowHeight * 0.01,
    borderBottomLeftRadius: windowHeight * 0.01,
  }
})