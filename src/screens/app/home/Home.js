import React, { Component } from 'react';
import { View } from 'react-native';
import { Wrapper, Text, Images, Spacer, Icons, Buttons, ScrollViews, HeaderHome } from '../../../components';
import { useHooks } from './hooks/useHome'
import { navigate } from '../../../navigation/RootNavigation';
import { ROUTES } from '../../../services';


export default function Home() {
  const { } = useHooks()
  return (
    <Wrapper isMain isCenter>
      <Wrapper alignItemsCenter>
        <Text isLargeTitle>Home</Text>
        <Spacer isBasic />
        <Text isMedium isGray
          onPress={() => navigate(ROUTES.postDetail)}
        >View Post Details</Text>
      </Wrapper>
    </Wrapper>
  );
}


