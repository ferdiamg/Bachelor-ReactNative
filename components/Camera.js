import {withNavigationFocus} from 'react-navigation';
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
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

class Camera extends React.Component {
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

  renderCamera() {
    const isFocused = this.props.navigation.isFocused();
    if (!isFocused) {
      return null;
    } else if (isFocused) {
      return (
        <QRCodeScanner
          reactivate={true}
          reactivateTimeout={2000}
          onRead={this.onSuccess}
          showMarker
          cameraStyle={styles.camera}
          cameraProps={{ratio: '1:1'}}
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
      );
    }
  }

  render() {
    return <View>{this.renderCamera()}</View>;
  }
}

export default withNavigationFocus(Camera);
