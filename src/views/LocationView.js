import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types';

const renderItem = ({ item }) => (
  <ListItem title={item} bottomDivider />
)

const LocationView = (props) => {
  const { route: { params: { options } } } = props;

  return (
    <View style={styles.container}>
      <Text h4 style={styles.heading}>Keräyspisteet</Text>
      <FlatList data={options} renderItem={renderItem} />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    marginBottom: 20
  }
});

export default LocationView;
