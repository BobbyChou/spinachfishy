import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Female = () => {
  return (
    <View style={styles.container}>
      <Text>{'Female page'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Female
