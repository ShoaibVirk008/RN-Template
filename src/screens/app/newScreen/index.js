import React, { Component } from 'react';
import { Wrapper, Text, Headers } from '../../../components';
import {useHooks} from './hooks'

export default function Index(props) {
    const { } = useHooks(props)
    return (
        <Wrapper isMain >
            <Headers.Primary
                title={'Index'}
                showBackArrow
            />
        </Wrapper>
    );
}

