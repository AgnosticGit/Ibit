import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
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
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  
  function onForgotPassword(){
    alert('Password recovery is in development')
  }

  function onPress() {  
    if (username && password) {
      alert('Authorized')
    } else {
      alert('Validation Error')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={images.logo} style={styles.logoImage} />
        <Text style={styles.title}>Login To Continue...</Text>
        <View style={styles.form}>
          <View>
            <MainTextInput
              onChangeText={setUsername}
              title={'Username'}
            />
            <MainTextInput
              onChangeText={setPassword}
              secureTextEntry
              title={'Password'}
              style={styles.password}
            />
            <TouchableOpacity onPress={onForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <MainButton onPress={onPress} title={'LOGIN'} />
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