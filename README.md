# Bachelor-ReactNative
My bachelor thesis project (Bluetooth Low Energy with iBeacons, QR Scanner) implemented in Facebook's React Native for iOS and Android

Dependencies:
react-native-svg
react-native-svg-icon

Important/troubleshooting:
react-native run-ios --simulator="iPhone 11" (iPhone X has been removed)
- code signing needed in XCode

yarn add 
cd ios, pod install

Since iOS 13 iOS needs AlwaysUsageBluetooth in info.plist when using BLE
Same in Android

For Android:
Create local.properties file under /android/ and add SDK path:
sdk.dir = /Users/ferdiarmagan/Library/Android/sdk