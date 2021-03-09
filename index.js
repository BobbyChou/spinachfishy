import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react'
import { name as appName } from './app.json';
import { StatusBar, iphoneXBototm } from './src/utils/screen'
import 'react-native-gesture-handler';

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true;


const MainAppRouter = () => {
  return <View style={styles.container}>
    <Text>123</Text>
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar,
    paddingBottom: iphoneXBototm
  },
  myImage: {
    width: 22,
    height: 22,
  }
})

AppRegistry.registerComponent(appName, () => MainAppRouter);
