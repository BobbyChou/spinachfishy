import { Platform, NativeModules } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
const { StatusBarManager } = NativeModules;

const StatusBar = StatusBarManager.HEIGHT;
const iphoneXBototm = isIphoneX() ? 24 : 0
export {
  StatusBar,
  iphoneXBototm
}
