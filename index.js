/**
 * @format
 */

import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native';
import React, { useState } from 'react'
import App from './App';
import { name as appName } from './app.json';
import { defaultTab } from './AppMainTab.json';
import TabNavigator from 'react-native-tab-navigator'


const MainAppRouter = () => {
  const [selectedTabItem, setSelectedItem] = useState(defaultTab)
  tabNavigatorItems = (selectedTab, title, icon, selectedIcon, mark, viewContent) => {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === selectedTab}
        title={title}
        renderIcon={() => <Image style={styles.myImage} source={icon} />}
        renderSelectedIcon={() => <Image style={styles.myImage} source={selectedIcon} />}
        badgeText={mark}
        onPress={() => this.setState({ selectedTab: selectedTab })}>
        <View style={{ flex: 1 }}><Text>{viewContent}</Text></View>
      </TabNavigator.Item>
    )
  }

  return (
    <View style={styles.container}>
      <TabNavigator>
        {this.tabNavigatorItems('***1', "消息", require('./src/img/icon_male.png'), require('./src/img/icon_male_selected.png'), "1", "消息页面内容")}
        {this.tabNavigatorItems('***2', "联系人", require('./src/img/icon_female.png'), require('./src/img/icon_female_selected.png'), "", "联系人页面内容")}
        {this.tabNavigatorItems('***3', "看点", require('./src/img/icon_record.png'), require('./src/img/icon_record_selected.png'), "", "看点页面内容")}
        {this.tabNavigatorItems('***4', "动态", require('./src/img/icon_pic.png'), require('./src/img/icon_pic_selected.png'), "", "动态页面内容")}
      </TabNavigator>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent(appName, () => MainAppRouter);
