import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScrollHeaderPage from '../components/ScrollHeaderPage/ScrollHeaderPage'
import ListWithHeader from '../components/ListWithHeader/ListWithHeader'

const Male = () => {
  return (
    <View style={styles.container}>
      <ScrollHeaderPage title="消息列表">
        <ListWithHeader />
      </ScrollHeaderPage>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Male
