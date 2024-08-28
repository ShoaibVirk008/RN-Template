import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from '@rneui/base';
import { colors, appStyles, sizes,responsiveHeight,responsiveWidth,responsiveFontSize } from '../../services';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import Wrapper from '../wrapper';
import Text from '../text';
import Spacer from '../spacer';


export function Primary  ({ })  {
    return (
        <Wrapper isMain>
            <Wrapper flex={1} style={[{ justifyContent: 'center', backgroundColor: 'transparent' }]}>
                <Wrapper style={[appStyles.center, { backgroundColor: 'transparent' }]}>
                    <WaveIndicator color={colors.appColor1} size={sizes.icons.xxl} />
                    <Spacer isBasic />
                    <Text isRegular isLightGray style={[appStyles.textLightGray]}>Loading</Text>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
}


export function Secondary ({ isVisible }) {
    return (
        <>
            {
                isVisible ?
                    <Wrapper isAbsoluteFill animation="fadeIn" style={[{ justifyContent: 'center', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: colors.appBgColor1 + 'BF' }]}>
                        <Wrapper style={[appStyles.center, { backgroundColor: 'transparent' }]}>
                            <BallIndicator color={colors.appColor1} size={sizes.icons.xxl} />
                            <Spacer isBasic />
                            <Text isRegular >Loading</Text>
                        </Wrapper>
                    </Wrapper>
                    :
                    null
            }
        </>
    );
}