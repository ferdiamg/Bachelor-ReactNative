import React from 'react';
import {BleManager} from 'react-native-ble-plx';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Image,
} from 'react-native';

import Icon from './Icon';

const styles = StyleSheet.create({
  MainContainer: {},
  SubmitButtonStyle: {
    paddingHorizontal: 35,
    paddingVertical: 17,
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
  BigText: {
    color: '#4A4A4A',
    fontSize: 32,
    fontWeight: '700',
    paddingBottom: 40,
    paddingTop: 20,
  },
  LowerText: {
    color: '#CFCFCF',
    fontSize: 15,
    fontWeight: '700',
    marginTop: -25,
    textAlign: 'center',
  },
  InfoText: {
    color: '#CFCFCF',
    fontSize: 15,
    fontWeight: '700',
    marginTop: -25,
    textAlign: 'center',
    paddingHorizontal: 45,
    lineHeight: 27,
    paddingBottom: 35,
  },
  ViewContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 185,
    paddingTop: 130,
  },
  profileImgContainer: {
    height: 185,
    width: 185,
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 50,
  },
  profileImg: {
    marginLeft: -8,
    height: 185,
    width: 185,
    borderRadius: 100,
  },
  Shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 17,
  },
});
class Ble extends React.Component {
  constructor() {
    super();
    this.manager = new BleManager();
    this.state = {
      status: '',
      currentDevice: '',
      devices: '',
    };
  }

  componentDidMount() {
    console.log('Component did mount!');
    const subscription = this.manager.onStateChange(state => {
      console.log(state);
      if (state === 'PoweredOn') {
        subscription.remove();
        this.setState({
          status: 'PoweredOn',
        });
      }
    }, true);
  }

  scan = () => () => {
    console.log('Button pressed!');
    this.setState({
      devices: '',
      currentDevice: '',
    });
    this.manager.startDeviceScan(null, null, (error, device) => {
      console.log('Scannnnning....');
      if (error) {
        console.log(error);
        return;
      }
      console.log('Device found: ' + device.name);

      // this.setState(prevState => ({
      //   devices: prevState.devices + ' | ' + device.name,
      // }));
      if (device.name === 'AMG iBeacon') {
        this.manager.stopDeviceScan();
        this.setState({
          currentDevice: device.name,
        });
      }
    });
  };

  render() {
    const {devices, status, currentDevice} = this.state;
    if (!(this.state.currentDevice === 'AMG iBeacon')) {
      return (
        <View>
          <View style={styles.ViewContainer}>
            <Icon fill="#E7E7E7" name="Wifi" width="140" height="140" />
            <Text style={styles.LowerText}>
              No Beacons found.{'\n'}Please enable Bluetooth!
            </Text>
          </View>
          <View style={styles.MainContainer}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={this.scan()}>
              <Text style={styles.TextStyle}> Scan for Beacons </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.ViewContainer}>
            <View style={styles.Shadow}>
              <TouchableHighlight
                style={[
                  styles.profileImgContainer,
                  {borderColor: '#0076FF', borderWidth: 7},
                ]}>
                <Image
                  source={require('../images/dino.png')}
                  style={styles.profileImg}
                />
              </TouchableHighlight>
            </View>
            <Text style={styles.BigText}>T-Rex</Text>
            <Text style={styles.InfoText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores dolores dolores et ea rebum. Stet clita kasd gubergren, no
              sea Lorem ipsum dolor sit amet.
            </Text>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={this.scan()}>
              <Text style={styles.TextStyle}> Scan for Beacons </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

export default Ble;
