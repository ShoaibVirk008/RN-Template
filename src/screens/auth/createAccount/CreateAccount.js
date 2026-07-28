import React, { Component, useState } from 'react';
import { View, } from 'react-native';
import { Logos, Toasts, Icons, Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes } from '../../../components';
import { APP_STYLES, APP_COLORS, responsiveFontSize, responsiveHeight, ROUTES, APP_SVGS, responsiveWidth, APP_SIZES } from '../../../services';
import { useHooks } from './hooks/useCreateAccount';
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
                            buttonColor={accepted ? APP_COLORS.appColor2 : APP_COLORS.appBgColor1}
                            iconColor={APP_COLORS.appTextColor6}
                            onPress={() => setAccepted(pre => !pre)}
                            iconSize={responsiveWidth(4)}
                            iconName={'check'}
                            buttonStyle={{ borderWidth: 1, borderColor: accepted ? APP_COLORS.appBgColor1 : APP_COLORS.appColor1 }}
                        />
                        <Spacer isSmall horizontal />
                        <Wrapper flex={1}>
                            <Text isRegular style={{ lineHeight: responsiveFontSize(25) }}>
                                I accept the
                                {' '}
                                <Text
                                    onPress={() => navigate(ROUTES.common,{screen:ROUTES.termsOfService})}
                                    isBoldFont>Terms of Service</Text>
                                {' '}
                                and
                                {'\n'}
                                <Text
                                    onPress={() => navigate(ROUTES.common,{screen:ROUTES.privacyPolicy})}
                                    isBoldFont>Privacy Policy</Text>
                                .
                            </Text>
                        </Wrapper>
                    </Wrapper>
                    <Spacer height={responsiveHeight(10)} />
                    <Buttons.Colored
                        text="Register"
                        onPress={() => navigate(ROUTES.app)}
                    />
                    <Spacer isBasic />
                </Wrapper>

            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

