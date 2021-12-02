import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Navigation from './src/navigation'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    );
  }
}

export default App;
