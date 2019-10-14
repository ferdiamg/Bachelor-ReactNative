import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ble from './Ble.js';
import QR from './QR.js';
import Icon from './components/Icon';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeScreen,
      Settings: SettingsScreen,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let svgName;
          if (routeName === 'Home') {
            svgName = 'Ble';
          } else if (routeName === 'Settings') {
            svgName = 'Qr';
          }
          return (
            <View style={{paddingTop: 40}}>
              <Icon name={svgName} fill={tintColor} />
            </View>
          );
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

export default () => (
  <View style={{flex: 1}}>
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        bottom: 40,
        left: 165,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.1,
        shadowRadius: 11.14,
        elevation: 17,
      }}>
      <Icon name="Logo2" width="80" height="80" />
    </View>
    <AppContainer />
  </View>
);
