import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews, Wrapper, Spacer } from '../../../components';
import { appStyles, routes, } from '../../../services';

function Signup(props) {
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
          <Wrapper marginHorizontalBase flexDirectionRow alignItemsCenter>
            <Wrapper flex={1}>
              <TextInputs.Bordered
                placeholder="First Name"
                iconName="account"
                iconType="material-community"
                containerStyle={{ marginHorizontal: 0 }}
              />
            </Wrapper>
            <Wrapper flex={0.1} />
            <Wrapper flex={1}>
              <TextInputs.Bordered
                placeholder="Last Name"
                // iconName="account"
                // iconType="material-community"
                containerStyle={{ marginHorizontal: 0 }}
              />
            </Wrapper>
          </Wrapper>

          <Spacer isBasic />
          <TextInputs.Bordered
            placeholder="Email"
            iconName="email"
          />
        <Spacer isBasic />
          <TextInputs.Bordered
            placeholder="Password"
            iconName="lock"
            secureTextEntry
          />
         <Spacer isDoubleBase />
          <Buttons.Bordered
            text="Sign Up Now"
            iconName="account-plus"
            iconType="material-community"
          />
        </Wrapper>
        <Spacer isBasic />
        <Wrapper alignItemsCenter>
          <Icons.WithText
            text="Already have an account, Sign In"
            iconName="arrow-left"
            onPress={() => navigate(routes.signin)}
          />
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

export default Signup;
