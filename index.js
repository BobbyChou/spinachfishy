import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react'
import { name as appName } from './app.json';
import { defaultTab } from './AppMainTab.json';
import TabNavigator from 'react-native-tab-navigator'
import { StatusBar, iphoneXBototm } from './src/utils/screen'

import Male from './src/view/Male'
import Female from './src/view/Female'
import Record from './src/view/Record'
import Picture from './src/view/Picture'

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true;

const MainAppRouter = () => {

  const [selectedTabItem, setSelectedItem] = useState(defaultTab)

  tabNavigatorItems = (selectedTab, title, icon, selectedIcon, viewContent) => {
    return (
      <TabNavigator.Item
        selected={selectedTabItem === selectedTab}
        title={title}
        renderIcon={() => <Image style={styles.myImage} source={icon} />}
        renderSelectedIcon={() => <Image style={styles.myImage} source={selectedIcon} />}
        onPress={() => setSelectedItem(selectedTab)}
      >
        {viewContent}
      </TabNavigator.Item>
    )
  }

  return (
    <View style={styles.container}>
      <TabNavigator>
        {this.tabNavigatorItems('***1', "消息", require('./src/img/icon_male.png'), require('./src/img/icon_male_selected.png'), <Male />)}
        {this.tabNavigatorItems('***2', "联系人", require('./src/img/icon_female.png'), require('./src/img/icon_female_selected.png'), <Female />)}
        {this.tabNavigatorItems('***3', "看点", require('./src/img/icon_record.png'), require('./src/img/icon_record_selected.png'), <Record />)}
        {this.tabNavigatorItems('***4', "动态", require('./src/img/icon_pic.png'), require('./src/img/icon_pic_selected.png'), <Picture />)}
      </TabNavigator>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar,
    paddingBottom: iphoneXBototm
  },
  myImage: {
    width: 22,
    height: 22,
  }
})

AppRegistry.registerComponent(appName, () => MainAppRouter);
