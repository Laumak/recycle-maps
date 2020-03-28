import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import PropTypes from 'prop-types';

const markers = [
  {
    title: "Lipunkantajan kenttä",
    options: ["a", "b", "c"],
    coordinate: { latitude: 60.322344, longitude: 24.852691 },
  }, {
    title: "Kanniston koulu",
    options: [
      "Keräyskartonki",
      "Paperi",
      "Muovikassit",
      "Lasipakkaukset",
      "Pienmetalli",
      "Kartonkipakkaukset",
    ],
    coordinate: { latitude: 60.328479, longitude: 24.860194 },
  },
];

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    latitude: 0,
    longitude: 0,
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
    const { navigation } = this.props;
    const { latitude, longitude } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          mapType="hybrid"
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          style={styles.map}
          showsUserLocation
        >
          {
            markers.map(m => (
              <MapView.Marker
                title={m.title}
                coordinate={m.coordinate}
                onPress={() => navigation.navigate('Location', { ...m })}
                key={m.title}
              />
            ))
          }
        </MapView>
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
