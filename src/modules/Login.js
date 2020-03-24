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


export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={images.logo} style={styles.logoImage} />
        <Text style={styles.title}>Login To Continue...</Text>
        <View style={styles.form}>
          <View>
            <MainTextInput title={'Username'} />
            <MainTextInput
              title={'Password'}
              style={styles.password}
            />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <MainButton title={'LOGIN'} />
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
  logoImage: {
    resizeMode: 'contain',
    width: windowHeight * 0.1,
    height: windowHeight * 0.1,
  },
  title: {
    fontSize: fontSizes[20]
  },
  content: {
    alignSelf: 'flex-end'
  },
  form: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.025,
    width: windowHeight * 0.5,
    height: windowHeight * 0.6,
    paddingVertical: windowHeight * 0.05,
    backgroundColor: colors.white,
    borderTopLeftRadius: windowHeight * 0.01,
    borderBottomLeftRadius: windowHeight * 0.01,
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
})