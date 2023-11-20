import React, { Component } from 'react';
import { View } from 'react-native';
import { Wrapper, Text, Images, Spacer, Icons, Buttons, ScrollViews, HeaderHome } from '../../../components';
import { useHooks } from './hooks'
import { navigate } from '../../../navigation/rootNavigation';
import { routes } from '../../../services';


export default function Home() {
  const { } = useHooks()
  return (
    <Wrapper isMain isCenter>
      <Wrapper alignItemsCenter>
        <Text isLargeTitle>Home</Text>
        <Spacer isBasic />
        <Text isMedium isGray
          onPress={() => navigate(routes.postDetail)}
        >View Post Details</Text>
      </Wrapper>
    </Wrapper>
  );
}


