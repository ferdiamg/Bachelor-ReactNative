import React from 'react';
import {Text, View} from 'react-native';

class QR extends React.Component {
  render() {
    return (
      <View style={{display: "flex", alignItems: "center", marginTop: -400}}>
        <Text style={{color: '#4A4A4A', fontSize: 18, fontWeight: '800'}}>
          Place the QR code inside the area
        </Text>
        <Text style={{color: '#CFCFCF', fontSize: 15, fontWeight: '700', paddingTop: 6}}>
          Scanning will start automatically
        </Text>
      </View>
    );
  }
}

export default QR;
