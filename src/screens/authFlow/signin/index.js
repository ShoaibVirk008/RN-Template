import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Wrappers, Spacers, Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews } from '../../../components';
import { appStyles, routes, } from '../../../services';

function Signin(props) {
  const { navigate } = props.navigation
  Toasts.Success('Success')
  return (
    <Wrappers.Main style={[{ }]}>
      <ScrollViews.KeyboardAvoiding>
        <Spacers.Base />
        <Wrappers.Primary style={[appStyles.center]}>
          <Logos.Primary
            size={totalSize(25)}
          />
          <Spacers.DoubleBase />
        </Wrappers.Primary>
        <Spacers.Base />
       <Wrappers.Component>
       <TextInputs.Colored
          placeholder="Email"
          iconName="email"
        />
        <Spacers.Base />
        <TextInputs.Colored
          placeholder="Password"
          iconName="lock"
          secureTextEntry
        />
        <Spacers.DoubleBase />
        <Buttons.Colored
          text="Sign In"
          iconName="login"
          iconType="material-community"
        />
       </Wrappers.Component>
        <Spacers.Base />
        <Wrappers.Primary style={[appStyles.center]}>
          <Icons.WithText
            text="Register Now"
            iconName="arrow-right"
            direction="row-reverse"
            onPress={() => navigate(routes.signup)}
          />
        </Wrappers.Primary>
      </ScrollViews.KeyboardAvoiding>
    </Wrappers.Main>
  );
}

export default Signin;
