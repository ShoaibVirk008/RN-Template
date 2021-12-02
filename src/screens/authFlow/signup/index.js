import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Wrappers, Spacers,Logos, Toasts, Icons, TextInputs, Buttons, ScrollViews } from '../../../components';
import { appStyles, routes,  } from '../../../services';

function Signup(props) {
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
          <Wrappers.Row>
            <Wrappers.Primary flex={1}>
              <TextInputs.Bordered
                placeholder="First Name"
                iconName="account"
                iconType="material-community"
                containerStyle={{ marginHorizontal: 0 }}
              />
            </Wrappers.Primary>
            <Wrappers.Primary flex={0.1}/>
            <Wrappers.Primary flex={1}>
              <TextInputs.Bordered
                placeholder="Last Name"
               // iconName="account"
               // iconType="material-community"
                containerStyle={{ marginHorizontal: 0 }}
              />
            </Wrappers.Primary>
          </Wrappers.Row>

          <Spacers.Base />
          <TextInputs.Bordered
            placeholder="Email"
            iconName="email"
          />
          <Spacers.Base />
          <TextInputs.Bordered
            placeholder="Password"
            iconName="lock"
            secureTextEntry
          />
          <Spacers.DoubleBase />
          <Buttons.Bordered
            text="Sign Up Now"
            iconName="account-plus"
            iconType="material-community"
          />
        </Wrappers.Component>
        <Spacers.Base />
        <Wrappers.Primary style={[appStyles.center]}>
          <Icons.WithText
            text="Already have an account, Sign In"
            iconName="arrow-left"
            onPress={() => navigate(routes.signin)}
          />
        </Wrappers.Primary>
      </ScrollViews.KeyboardAvoiding>
    </Wrappers.Main>
  );
}

export default Signup;
