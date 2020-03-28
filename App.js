import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
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
            region={{ latitude, longitude, latitudeDelta, longitudeDelta }}
            style={styles.map}
            showsUserLocation
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
