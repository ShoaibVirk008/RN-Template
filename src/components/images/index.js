import React from 'react'
import {Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles } from '../../services';
import Wrapper from '../wrapper';

export const Round = ({ style, size, source }) => {
    const defaultSize = totalSize(5)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 150 }, style]}
        />
    );
}

export const SqareRound = ({ style, size, source }) => {
    const defaultSize = totalSize(5)
    return (
        <Image
            source={source}
            style={[{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 15 }, style]}
        />
    );
}

export const Profile = ({ imageStyle, source, containerStyle, animation, onPress }) => {
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
        ...appStyles.shadowColored,
        // backgroundColor:'transparent',
        borderRadius: 100,
        backgroundColor: colors.appBgColor1
    },
    ImageProfile: {
        width: totalSize(15),
        height: totalSize(15),
        borderRadius: 100,
        borderWidth: 5,
        borderColor: colors.appBgColor1,

    },
    ImageProfileOverlay: {
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    ImageCollectionItem: {
        width: width(32.5),
        height: height(20),
        borderRadius: 15,
    }
})
