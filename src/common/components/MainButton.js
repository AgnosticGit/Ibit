import React, { memo } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'
import { fontSizes, colors, windowHeight } from '../theme/theme'


export const MainButton = memo((props) => (
  <TouchableOpacity
    style={[
      styles.container,
      props.style,
      props.left
        ? styles.borderLeftEmpty
        : styles.borderRightEmpty]}
    onPress={props.onPress}
  >
    <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
  </TouchableOpacity>
))

const styles = StyleSheet.create({
  container: {
    width: windowHeight * 0.45,
    height: windowHeight * 0.07,
    backgroundColor: colors.mainYellow,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: fontSizes[14],
    fontWeight: '600'
  },
  borderLeftEmpty: {
    borderTopRightRadius: windowHeight * 0.01,
    borderBottomRightRadius: windowHeight * 0.01,
  },
  borderRightEmpty: {
    borderTopLeftRadius: windowHeight * 0.01,
    borderBottomLeftRadius: windowHeight * 0.01,
  }
})