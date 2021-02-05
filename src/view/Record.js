import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Record = () => {
  return (
    <View style={styles.container}>
      <Text>{'Record page'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Record
