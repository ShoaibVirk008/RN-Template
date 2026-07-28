import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from '@rneui/base';
import { APP_COLORS, APP_STYLES, APP_SIZES,responsiveHeight,responsiveWidth,responsiveFontSize } from '../../services';
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
import Wrapper from '../wrapper/Wrapper';
import Text from '../text/Text';
import Spacer from '../spacer/Spacer';


export function Primary  ({ })  {
    return (
        <Wrapper isMain>
            <Wrapper flex={1} style={[{ justifyContent: 'center', backgroundColor: 'transparent' }]}>
                <Wrapper style={[APP_STYLES.center, { backgroundColor: 'transparent' }]}>
                    <WaveIndicator color={APP_COLORS.appColor1} size={APP_SIZES.icons.xxl} />
                    <Spacer isBasic />
                    <Text isRegular isLightGray style={[APP_STYLES.textLightGray]}>Loading</Text>
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
                    <Wrapper isAbsoluteFill animation="fadeIn" style={[{ justifyContent: 'center', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: APP_COLORS.appBgColor1 + 'BF' }]}>
                        <Wrapper style={[APP_STYLES.center, { backgroundColor: 'transparent' }]}>
                            <BallIndicator color={APP_COLORS.appColor1} size={APP_SIZES.icons.xxl} />
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