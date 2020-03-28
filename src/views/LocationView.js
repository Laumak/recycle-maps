import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Text, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types';

const renderItem = ({ item }) => (
  <ListItem title={item} bottomDivider />
)

const LocationView = (props) => {
  const { route: { params: { image, options } } } = props;

  return (
    <View style={styles.outerContainer}>
      <Image source={image} style={styles.image} />

      <View style={styles.innerContainer}>
        <Text h4 style={styles.heading}>Keräyspisteet</Text>
        <FlatList data={options} renderItem={renderItem} />
      </View>
    </View>
  );
};

LocationView.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
      options: PropTypes.array,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    marginBottom: 20
  },
  image: {
    width: 'auto',
    height: '30%',
  }
});

export default LocationView;
