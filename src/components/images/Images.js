import React from 'react'
import {Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes } from 'react-native'
import { Icon } from '@rneui/base';
import { APP_COLORS, APP_SIZES, APP_STYLES, responsiveHeight, responsiveWidth, responsiveFontSize } from '../../utilities';
import Wrapper from '../wrapper/Wrapper';

export function Round  ({ style, size, source })  {
    const defaultSize = responsiveFontSize(5)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 150 }, style]}
        />
    );
}

export function SqareRound  ({ style, size, source })  {
    const defaultSize = responsiveFontSize(5)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 15 }, style]}
        />
    );
}

export function Profile  ({ imageStyle, source, containerStyle, animation, onPress })  {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <Wrapper animation={animation ? animation : 'zoomIn'} style={[styles.ImageProfileContainer, containerStyle]}>
                <Image
                    source={source}
                    style={[styles.ImageProfile, imageStyle]}
                />
            </Wrapper>
        </TouchableOpacity>
    );
}




const styles = StyleSheet.create({
    ImageProfileContainer: {
        ...APP_STYLES.shadowColored,
        // backgroundColor:'transparent',
        borderRadius: 100,
        backgroundColor: APP_COLORS.appBgColor1
    },
    ImageProfile: {
        width: responsiveFontSize(15),
        height: responsiveFontSize(15),
        borderRadius: 100,
        borderWidth: 5,
        borderColor: APP_COLORS.appBgColor1,

    },
    ImageProfileOverlay: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    ImageCollectionItem: {
        width: responsiveWidth(32.5),
        height: responsiveHeight(20),
        borderRadius: 15,
    }
})
