import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews, Wrapper, Spacer } from '../../../components';
import { appStyles, routes, } from '../../../services';

function Signin(props) {
  const { navigate } = props.navigation
  Toasts.Success('Success')
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Logos.Primary
            size={totalSize(25)}
          />
          <Spacer isDoubleBase />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper marginHorizontalBase>
          <TextInputs.Colored
            placeholder="Email"
            iconName="email"
          />
          <Spacer isBasic />
          <TextInputs.Colored
            placeholder="Password"
            iconName="lock"
            secureTextEntry
          />
          <Spacer isDoubleBase />
          <Buttons.Colored
            text="Sign In"
            iconName="login"
            iconType="material-community"
          />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Icons.WithText
            text="Register Now"
            iconName="arrow-right"
            direction="row-reverse"
            onPress={() => navigate(routes.signup)}
          />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

export default Signin;
