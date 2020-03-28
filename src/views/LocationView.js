import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LocationView = (props) => {
  const { route: { params: { options } } } = props;

  return (
    <View style={styles.container}>
      <Text>{options.map(o => o)}</Text>
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

LocationView.defaultProps = {
  options: [],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LocationView;
