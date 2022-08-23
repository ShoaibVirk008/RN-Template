import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Navigation from './src/navigation'
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaView>
  )
}