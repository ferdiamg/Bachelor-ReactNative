# Bachelor-ReactNative
### My bachelor thesis project (Bluetooth Low Energy with iBeacons, QR Scanner) implemented in Facebook's React Native for iOS and Android

## Dependencies
* react-native-gesture-handler: 1.4.1
* react-native-ionicons: 4.6.1
* react-native-reanimated: 1.3.0
* react-native-screens: 1.0.0-alpha.23
* react-native-svg: 9.11.1
* react-native-svg-icon: 0.8.1
* react-navigation: 4.0.10
* react-navigation-stack: 1.9.4
* react-navigation-tabs: 2.5.6
* react-native-animatable: 

## Getting started
To install all needed node_modules and dependencies:
1. `npm install`
2. `cd ios && pod install && cd ..`
3. `react-native run-ios --simulator="iPhone 11"` or `react-native run-ios --device` or `react-native run-android`

## Important/Troubleshooting:
* To build a debug version: react-native run-ios --simulator="iPhone 11" (iPhone X has been removed)
* To build a offline standalone version: react-native run-ios --configuration=release --device
* code signing needed in XCode

* since iOS 13 iOS needs AlwaysUsageBluetooth in info.plist when using BLE
* same in Android

* For Android:
Create local.properties file under /android/ and add SDK path:
sdk.dir = /Users/ferdiarmagan/Library/Android/sdk
