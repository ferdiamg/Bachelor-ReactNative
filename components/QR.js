import React from 'react';
import {Text, View, Linking, StyleSheet, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from './Icon';
import * as Animatable from 'react-native-animatable';

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
  container: {},
  camera: {
    height: 220,
    width: 220,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scanBar: {
    width: 300,
    height: 2,
    backgroundColor: '#0076FF',
  },
  shadow: {
    shadowColor: '#0076FF',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 50,
  },
});

class QR extends React.Component {
  onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    alert(e.data);
  };

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: Dimensions.get('window').width * 0.15,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  }

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
                <View style={styles.shadow}>
                  <Animatable.View
                    style={styles.scanBar}
                    direction="alternate-reverse"
                    iterationCount="infinite"
                    duration={1700}
                    easing="linear"
                    animation={this.makeSlideOutTranslation(
                      'translateY',
                      Dimensions.get('window').width * 0.6,
                    )}
                  />
                </View>
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
