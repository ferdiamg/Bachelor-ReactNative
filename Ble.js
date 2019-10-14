import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Icon from './components/Icon';

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 200,
  },
  SubmitButtonStyle: {
    paddingHorizontal: 35,
    paddingVertical: 18,
    backgroundColor: '#0076FF',
    borderRadius: 40,
    borderWidth: 0,
    borderColor: '#fff',
  },
  TextStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

class Ble extends React.Component {
  ButtonClickCheckFunction = () => () => {
    Alert.alert('Scanning..');
  };

  render() {
    return (
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Icon fill="#E7E7E7" name="Wifi" width="140" height="140" />
        <Text
          style={{
            color: '#CFCFCF',
            fontSize: 15,
            fontWeight: '700',
            marginTop: -25,
          }}>
          Currently no Beacons found.
        </Text>
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={this.ButtonClickCheckFunction()}>
            <Text style={styles.TextStyle}> Scan for Beacons </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Ble;
