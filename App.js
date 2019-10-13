import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ble from './Ble.js';
import QR from './QR.js';
import BLEactive from './images/ble_active.svg';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Text>Bluetooth Low Energy</Text> */}
        <Ble />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <QR />
      </View>
    );
  }
}

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeScreen,
      Settings: SettingsScreen,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `wifi`;
          } else if (routeName === 'Settings') {
            iconName = `qr-scanner`;
          }
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        showLabel: false,
        activeTintColor: '#009AFF',
        inactiveTintColor: '#CFCFCF',
      },
    },
  ),
);
