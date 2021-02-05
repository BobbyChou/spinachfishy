import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Picture = () => {
  return (
    <View style={styles.container}>
      <Text>{'Picture page'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Picture
