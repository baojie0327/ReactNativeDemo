import {NativeModules} from 'react-native'
export default {
    'systemName':NativeModules.DeviceInfos.systemName,
    'systemVersion':NativeModules.DeviceInfos.systemVersion,
    'defaultLanguage':NativeModules.DeviceInfos.defaultLanguage,
    'appVersion':NativeModules.DeviceInfos.appVersion,

}