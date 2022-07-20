import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes } from '../../services';
import { Absolute, Wrapper, Main } from '../wrappers';
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
import { Spacers, Texts, Wrappers } from '..';


export const Primary = ({ }) => {
    return (
        <Wrappers.Main>
            <Wrappers.Primary flex={1} style={[{ justifyContent: 'center', backgroundColor: 'transparent' }]}>
                <Wrappers.Primary style={[appStyles.center, { backgroundColor: 'transparent' }]}>
                    <WaveIndicator color={colors.appColor1} size={sizes.icons.xxl} />
                    <Spacers.Base />
                    <Texts.Regular style={[appStyles.textLightGray]}>Loading</Texts.Regular>
                </Wrappers.Primary>
            </Wrappers.Primary>
        </Wrappers.Main>
    );
}


export const Secondary = ({ isVisible }) => {
    return (
        <>
            {
                isVisible ?
                    <Wrappers.Absolute animation="fadeIn" style={[{ justifyContent: 'center', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: colors.appBgColor1 + 'BF' }]}>
                        <Wrappers.Primary style={[appStyles.center, { backgroundColor: 'transparent' }]}>
                            <BallIndicator color={colors.appColor1} size={sizes.icons.xxl} />
                            <Spacers.Base />
                            <Texts.Regular >Loading</Texts.Regular>
                        </Wrappers.Primary>
                    </Wrappers.Absolute>
                    :
                    null
            }
        </>
    );
}