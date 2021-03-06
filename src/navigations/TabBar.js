import React, { useState, memo } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'
import {
  windowWidth,
  windowHeight,
  colors,
  fontSizes
} from '../common/theme/theme'
import { images } from '../common/theme/images'


export const TabBar = memo(({ scrollRef }) => {
  const [isActive, setIsActive] = useState(true)

  function onPress(type) {
    const { current } = scrollRef

    if (type === 'Login') {
      current.scrollTo({ x: 0 })
      setIsActive(true)
    }
    if (type === 'Registration') {
      current.scrollToEnd()
      setIsActive(false)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress.bind(this, 'Login')}
        style={styles.button}
      >
        <Image source={images.user} style={styles.images} />
        <Text style={styles.titles}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress.bind(this, 'Registration')}
        style={styles.button}
      >
        <Image source={images.plus} style={styles.images} />
        <Text style={styles.titles}>Registration</Text>
      </TouchableOpacity>
    </View >
  )
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: windowWidth,
    height: windowHeight * 0.08,
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: windowWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    resizeMode: 'contain',
    width: windowHeight * 0.035,
    height: windowHeight * 0.035,
  },
  titles: {
    fontSize: fontSizes[12]
  },
})