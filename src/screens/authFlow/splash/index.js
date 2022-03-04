import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Wrappers, Texts } from '../../../components';
import { appStyles } from '../../../services';

function Splash() {
  return (
    <Wrappers.Main style={[appStyles.center]}>
      <Texts.LargeTitle>Splash</Texts.LargeTitle>
    </Wrappers.Main>
  );
}

export default Splash;
