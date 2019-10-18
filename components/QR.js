import React from 'react';
import {
  Text,
  View,
  Linking,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from './Icon';
import * as Animatable from 'react-native-animatable';
import Camera from '../components/Camera';

const styles = StyleSheet.create({
  topArea: {
    height: 375,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Instructions: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -30,
  },
  SmallText: {
    color: '#CFCFCF',
    fontSize: 15,
    fontWeight: '700',
    paddingTop: 6,
    paddingBottom: 20,
  },
  BigText: {
    color: '#4A4A4A',
    fontSize: 18,
    fontWeight: '800',
  },
});

class QR extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Instructions}>
          <Text style={styles.BigText}>Place the QR code inside the area</Text>
          <Text style={styles.SmallText}>
            Scanning will start automatically
          </Text>
        </View>
        <View style={styles.topArea}>
          <Camera />
        </View>
      </View>
    );
  }
}

export default QR;
