import React, { Component } from 'react';
import { View } from 'react-native';
import { Wrapper, Text, Images, Spacer, Icons, Buttons, ScrollViews, HeaderHome } from '../../../components';
import {useHooks} from './hooks'


export default function Home() {
  const { } = useHooks()
  return (
    <Wrapper isMain isCenter>
           <Text isLargeTitle>Home</Text>
        </Wrapper>
  );
}


