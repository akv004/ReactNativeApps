import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Demo } from './components/Demo';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Demo/>
      </View>
    );
  }
}
