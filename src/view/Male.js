import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Male = () => {
  return (
    <View style={styles.container}>
      <Text>{'male page'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Male
