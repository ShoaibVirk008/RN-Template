import React, { Component, useState } from 'react';
import { View, } from 'react-native';
import { totalSize } from 'react-native-dimension';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes } from '../../../components';
import { appStyles, colors, responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
    const { navigate } = props.navigation

    const {accepted, setAccepted} = useHooks()
    return (
        <Wrapper isMain style={[{}]}>
            <ScrollViews.KeyboardAvoiding>
                <Headers.Auth />
                <Wrapper>
                    <Spacer isDoubleBase />
                    <Text isTinyTitle alignTextCenter style={{ fontSize: responsiveFontSize(24) }}>Let's Get Started</Text>
                    <Spacer isMedium />
                    <TextInputs.Underlined
                        title={'Email'}
                        value={'johndoe@gmail.com'}
                    />
                    <Spacer isMedium />
                    <TextInputs.Underlined
                        title={'Password'}
                        value={'12345656676'}
                        iconNameRight="eye"
                        iconTypeRight={'feather'}
                        secureTextEntry
                    />
                    <Spacer isMedium />
                    <TextInputs.Underlined
                        title={'Confirm Password'}
                        value={'12345656676'}
                        iconNameRight="eye"
                        iconTypeRight={'feather'}
                        secureTextEntry
                    />
                    <Spacer isMedium />
                    <Wrapper marginHorizontalBase flexDirectionRow alignItemsCenter>
                        <Icons.Button
                            buttonSize={responsiveWidth(7)}
                            buttonColor={accepted ? colors.appColor2 : colors.appBgColor1}
                            iconColor={colors.appTextColor6}
                            onPress={() => setAccepted(pre => !pre)}
                            iconSize={responsiveWidth(4)}
                            iconName={'check'}
                            buttonStyle={{ borderWidth: 1, borderColor: accepted ? colors.appBgColor1 : colors.appColor1 }}
                        />
                        <Spacer isSmall horizontal />
                        <Wrapper flex={1}>
                            <Text isRegular style={{ lineHeight: responsiveFontSize(25) }}>
                                I accept the
                                {' '}
                                <Text
                                    onPress={() => navigate(routes.common,{screen:routes.termsOfService})}
                                    isBoldFont>Terms of Service</Text>
                                {' '}
                                and
                                {'\n'}
                                <Text
                                    onPress={() => navigate(routes.common,{screen:routes.privacyPolicy})}
                                    isBoldFont>Privacy Policy</Text>
                                .
                            </Text>
                        </Wrapper>
                    </Wrapper>
                    <Spacer height={responsiveHeight(10)} />
                    <Buttons.Colored
                        text="Register"
                        onPress={() => navigate(routes.app)}
                    />
                    <Spacer isBasic />
                </Wrapper>

            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

