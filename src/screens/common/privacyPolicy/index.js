import React, { Component } from 'react';
import { Wrapper, Text, Headers, Icons, ScrollViews, Buttons,Spacer } from '../../../components';
import {useHooks} from './hooks'
export default function Index() {
    const { terms, text } = useHooks()
    return (
        <Wrapper isMain >
            <Headers.Primary
                title={'Privacy Policy'}
                showBackArrow
                shadow
            />
            <ScrollViews.WithKeyboardAvoidingView
            >

                <Wrapper marginHorizontalBase animation={'fadeInUp'}>
                    <Spacer isBasic />
                    <Text isMedium isBoldFont>Oprimaze Privacy Policy</Text>
                    <Spacer isBasic />
                    <Text isRegular isBoldFont>Last Updated: 20/10/2023</Text>
                    <Spacer isBasic />
                    <Text isRegular>{text}</Text>
                    <Spacer isBasic />
                    {
                        terms?.map((item, index) => {
                            const { label, detail } = item
                            return (
                                <Wrapper>
                                    <Text isRegular isBoldFont>{index + 1}. {label}</Text>
                                    <Spacer isTiny />
                                    <Text isRegular style={{}}>{detail}</Text>
                                    <Spacer isBasic />
                                    <Spacer isSmall />
                                </Wrapper>
                            )
                        })
                    }
                </Wrapper>
                <Spacer isBasic />
            </ScrollViews.WithKeyboardAvoidingView>
        </Wrapper>
    );
}

