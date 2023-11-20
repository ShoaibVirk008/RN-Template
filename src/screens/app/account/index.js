import React, { Component } from 'react';
import { Wrapper, Text, Headers } from '../../../components';
import {useHooks} from './hooks'

export default function Index() {
    const { } = useHooks()
    return (
        <Wrapper isMain isCenter>
        <Text isLargeTitle>Account</Text>
     </Wrapper>
    );
}

