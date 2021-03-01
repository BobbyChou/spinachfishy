import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types';

const ScrollHeaderPage = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerFont}>{props.title}</Text>
      </View>
      <ScrollView>
        {props.children}
      </ScrollView>
    </View>
  )
}

ScrollHeaderPage.prototypes = {}
ScrollHeaderPage.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 44,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerFont: {
    fontSize: 18,
  }
})

export default ScrollHeaderPage
