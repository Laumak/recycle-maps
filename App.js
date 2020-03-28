import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  state = {
    search: '',
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>
          Recycle Maps
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={text => this.setState({ search: text })}
        />

        <Text>{this.state.search}</Text>
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
});
