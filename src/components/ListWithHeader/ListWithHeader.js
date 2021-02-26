import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

const ListWithHeader = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userAvartar} source={'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=906509900,1829660552&fm=26&gp=0.jpg'} />
      <TouchableOpacity style={styles.messageContainer} activeOpacity={1} onPress={() => { console.log('%cListWithHeader.js line:9 111', 'color: #007acc;', 111); }}>
        <View style={styles.messageContent}>
          <View style={styles.messageTop}>
            <Text>{'🐟'}</Text>
            <Text style={styles.messageTime}>{'9:45'}</Text>
          </View>
          <View style={styles.messageBottom}>
            <View style={styles.messageDetail}>
              <Text style={styles.messageDetailFont} numberOfLines={1}>{'睡了差不多12个小时'}</Text>
            </View>
            <View style={styles.messageCount}>
              <Text style={{ fontSize: 12, color: '#fff', fontWeight: '500' }}>{'1'}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

ListWithHeader.prototypes = {}
ListWithHeader.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 65,
    paddingHorizontal: 15,
    // paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userAvartar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: 'lightskyblue',
    marginRight: 15
  },
  messageContainer: {
    flex: 1,
    height: 65,
    paddingTop: 10,
    borderBottomColor: 'rgba(0, 0, 0, .1);',
    borderBottomWidth: 1,
  },
  messageContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 45
  },
  messageTop: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  messageBottom: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
  },
  messageDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageDetailFont: {
    flex: 1,
    fontSize: 12,
    color: '#999',
  },
  messageCount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 18,
    backgroundColor: '#E95F62'
  }
})

export default ListWithHeader
