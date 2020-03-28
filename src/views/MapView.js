import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const markers = [
  { title: "Paikka 1", coordinate: { latitude: 60.322344, longitude: 24.852691 } },
  { title: "Paikka 2", coordinate: { latitude: 60.328479, longitude: 24.860194 } },
];

export default class App extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((GeolocationPosition) => {
      this.setState({
        latitude: GeolocationPosition.coords.latitude,
        longitude: GeolocationPosition.coords.longitude,
      })
    });
  }

  render() {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state;

    return (
      <View>
        <Text style={styles.header}>
          Recycle Maps
        </Text>

        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            mapType="hybrid"
            region={{ latitude, longitude, latitudeDelta, longitudeDelta }}
            style={styles.map}
            showsUserLocation
          >
            {
              markers.map(m => (
                <MapView.Marker
                  title={m.title}
                  coordinate={m.coordinate}
                  key={m.title}
                />
              ))
            }
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
