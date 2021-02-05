
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

const App = (props) => {

  const [selectedTabItem, setSelectedTab] = useState('tb_msg')

  const tabNavigatorItems = (selectedTab, title, icon, selectedIcon, imageStyle, mark, viewContent) => {
    return (
      <TabNavigator.Item
        selected={selectedTabItem === selectedTab}
        title={title}
        renderIcon={() => <Image style={styles.myImage} source={icon} />}
        renderSelectedIcon={() => <Image style={[styles.myImage, { tintColor: imageStyle }]} source={selectedIcon} />}
        badgeText={mark}
        onPress={() => { setSelectedTab(selectedTab) }}>
        <View style={{ flex: 1 }}><Text>{viewContent}</Text></View>
      </TabNavigator.Item>
    )
  }

  return (
    <View style={styles.container}>
      <TabNavigator>
        {tabNavigatorItems('tb_msg', "消息", null, null, '#ffe09a', "", "消息页面内容")}
        {tabNavigatorItems('tb_contacts', "联系人", null, null, '#65bb74', "", "联系人页面内容")}
        {tabNavigatorItems('tb_watch', "看点", null, null, '#6ebef3', "", "看点页面内容")}
        {tabNavigatorItems('tb_dynamic', "动态", null, null, '#622193', "", "动态页面内容")}
      </TabNavigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  myImage: {
    width: 22,
    height: 22,
  }
});

export default App
