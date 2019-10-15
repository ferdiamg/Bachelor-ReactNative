import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ble from './components/Ble.js';
import QR from './components/QR.js';
import Icon from './components/Icon';

const styles = StyleSheet.create({
  Logo: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 43 : 10,
    zIndex: 1,
    display: 'flex',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 11.14,
    elevation: 17,
  },
  ViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabBar: {
    paddingTop: Platform.OS === 'ios' ? 40 : 16,
  },
});
class BLEScreen extends React.Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <Ble />
      </View>
    );
  }
}
class QRScreen extends React.Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <QR />
      </View>
    );
  }
}

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Ble: BLEScreen,
      Qr: QRScreen,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let svgName;
          if (routeName === 'Ble') {
            svgName = 'Ble';
          } else if (routeName === 'Qr') {
            svgName = 'Qr';
          }
          return (
            <View style={styles.TabBar}>
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
    <View style={styles.Logo}>
      <Icon name="Logo2" width="80" height="80" />
    </View>
    <AppContainer />
  </View>
);
