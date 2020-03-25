import React, {
  useState,
  useEffect,
  memo
} from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native'
import {
  fontSizes,
  colors,
  windowHeight
} from '../theme/theme'


export const MainTextInput = memo((props) => {
  const [editable, setEditable] = useState(false)

  //Костыль нужен для того чтобы на некоторых устройствах Xiaomi не вылетало приложении при написании E-mail'а
  useEffect(() => {
    setTimeout(() => {
      setEditable(true)
    }, 100)
  })

  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
      <TextInput
        onChangeText={props.onChangeText}
        editable={editable}
        secureTextEntry={props.secureTextEntry}
        style={[
          styles.textInput,
          props.left
            ? styles.borderLeftEmpty
            : styles.borderRightEmpty
        ]}
      />
    </View>
  )
})



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