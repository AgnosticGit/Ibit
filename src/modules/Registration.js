import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  colors,
  windowHeight,
  windowWidth,
  fontSizes,
} from '../common/theme/theme'
import { images } from '../common/theme/images'
import { MainTextInput } from '../common/components/MainTextInput'
import { MainButton } from '../common/components/MainButton'


export const Registration = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Image source={images.logo} style={styles.logoImage} />
          <Text style={styles.title}>Registration</Text>
        </View>
        <View style={styles.form}>
          <View>
            <MainTextInput
              titleStyle={styles.inputTitles}
              title={'Username'}
              left
            />
            <MainTextInput
              titleStyle={styles.inputTitles}
              title={'Password'}
              style={styles.password}
              left
            />
            <MainTextInput
              titleStyle={styles.inputTitles}
              title={'Confirm password'}
              style={styles.password}
              left
            />
          </View>
          <MainButton title={'REGISTRATION'} left />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    justifyContent: 'center',
  },
  logoContainer: {
    marginLeft: windowHeight * 0.06,
  },
  logoImage: {
    resizeMode: 'contain',
    width: windowHeight * 0.1,
    height: windowHeight * 0.1,
  },
  title: {
    fontSize: fontSizes[20]
  },
  form: {
    marginLeft: -1,
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.025,
    width: windowHeight * 0.5,
    height: windowHeight * 0.6,
    paddingVertical: windowHeight * 0.05,
    backgroundColor: colors.white,
    borderTopRightRadius: windowHeight * 0.01,
    borderBottomRightRadius: windowHeight * 0.01,
  },
  inputsContainer: {
    alignSelf: 'flex-end',
  },
  password: {
    marginTop: windowHeight * 0.02,
  },
  forgotPassword: {
    marginTop: windowHeight * 0.02,
    color: colors.greyB5,
    fontWeight: 'bold'
  },
  inputTitles: {
    marginLeft: windowHeight * 0.02,
  }
})