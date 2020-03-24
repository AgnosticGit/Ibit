import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image
} from 'react-native'
import {
  colors,
  windowHeight,
  windowWidth
} from './common/theme/theme'
import { images } from './common/theme/images'
import { Login } from '../src/modules/Login'
import { Registration } from './modules/Registration'
import { TabBar } from './navigations/TabBar'


export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.background1} />
      <View style={styles.background2} />
      <View style={styles.designRectangle} />
      <View style={styles.designTriangle} />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Login />
      <Registration />
      </ScrollView>
    <TabBar />
    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background1: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight * 0.5,
    backgroundColor: colors.mainYellow,
  },
  background2: {
    position: 'absolute',
    marginTop: windowHeight * 0.5,
    width: windowWidth,
    height: windowHeight * 0.5,
    backgroundColor: colors.white,
  },
  designRectangle: {
    position: 'absolute',
    marginTop: windowHeight * 0.35,
    width: windowWidth,
    height: windowHeight * 0.12,
    backgroundColor: colors.greyD8,
    borderWidth: windowHeight * 0.002,
    borderColor: colors.greyC8,
  },
  designTriangle: {
    marginTop: windowHeight * 0.5,
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: windowWidth * 0.3,
    borderTopWidth: windowHeight * 0.2,
    borderLeftColor: 'transparent',
    borderTopColor: colors.mainYellow
  }

})