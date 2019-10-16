import React from 'react';
import {Text, View, Linking, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from './Icon';

const styles = StyleSheet.create({
  topArea: {
    height: 375,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Instructions: {
    paddingBottom: 40,
    display: 'flex',
    alignItems: 'center',
    marginTop: -60,
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
  container: {},
  camera: {
    height: 220,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

class QR extends React.Component {
  onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    alert(e.data);
  };

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
          <QRCodeScanner
            onRead={this.onSuccess}
            showMarker
            cameraStyle={styles.camera}
            customMarker={
              <View style={styles.container}>
                <Icon fill="#0076FF" name="QrMarker" height="280" width="280" />
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

export default QR;
