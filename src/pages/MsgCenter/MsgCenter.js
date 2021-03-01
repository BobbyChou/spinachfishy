import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MsgCenter = () => {
  return (
    <View style={styles.container}>
      <Text>{'MsgCenter page'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MsgCenter
