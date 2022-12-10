import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { Icon } from '@rneui/base';
import { colors, appStyles, sizes } from '../../services';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';

export default ({
    children, style, animation, duration,
    iterationCount, isMain, isGradient, flex,
    flexDirectionRow, justifyContentSpaceBetween,
    //alignItems
    alignItemsCenter,
    alignItemsFlexEnd,
    alignItemsFlexStart,
    //
    isCardView,
    isAbsolute, isAbsoluteFill, isColoredWrapper,
    isBorderedWrapper, gradiantColors, isCenter,
    background1, background2,
    isImageBackground, source,
    //paddingHorizontal
    paddingHorizontalBase, paddingHorizontalSmall,
    paddingHorizontalMedium, paddingHorizontalLarge,
    paddingHorizontalZero,
    //paddingVertical
    paddingVerticalBase, paddingVerticalSmall,
    paddingVerticalMedium, paddingVerticalLarge,
    paddingVerticalZero,
    //marginVertical
    marginVerticalBase, marginVerticalSmall,
    marginVerticalMedium, marginVerticalLarge,
    marginVerticalZero,
    //marginHorizontal
    marginHorizontalBase, marginHorizontalSmall,
    marginHorizontalMedium, marginHorizontalLarge,
    marginHorizontalZero,
    ...linearGradientProps
}) => {
    if (isGradient) {
        return (
            <LinearGradient style={[{ flex: 1 }, style]} colors={gradiantColors ? gradiantColors : colors.appGradiantColors1} {...linearGradientProps}>
                {children}
            </LinearGradient>
        )
    } else if (isImageBackground) {
        return (
            <ImageBackground source={source} style={[appStyles.bgContainer, style]}>
                {children}
            </ImageBackground>
        )
    }
    return (
        <Animatable.View
            animation={animation}
            duration={duration}
            iterationCount={iterationCount}
            style={[
                { flex: flex },
                isMain && appStyles.mainContainer,
                isCardView && appStyles.cardView,
                isColoredWrapper && appStyles.coloredWrapper,
                isBorderedWrapper && appStyles.borderedWrapper,
                isAbsolute && { position: 'absolute', },
                isAbsoluteFill && StyleSheet.absoluteFill,
                //marginHorizontal
                marginHorizontalBase && appStyles.marginHorizontalBase,
                marginHorizontalSmall && appStyles.marginHorizontalSmall,
                marginHorizontalMedium && appStyles.marginHorizontalMedium,
                marginHorizontalLarge && appStyles.marginHorizontalLarge,
                marginHorizontalZero && appStyles.marginHorizontalZero,
                //paddingHorizontal
                paddingHorizontalLarge && appStyles.paddingHorizontalLarge,
                paddingHorizontalBase && appStyles.paddingHorizontalBase,
                paddingHorizontalSmall && appStyles.paddingHorizontalSmall,
                paddingHorizontalMedium && appStyles.paddingHorizontalMedium,
                paddingHorizontalZero && appStyles.paddingHorizontalZero,
                // marginVertical
                marginVerticalBase && appStyles.marginVerticalBase,
                marginVerticalSmall && appStyles.marginVerticalSmall,
                marginVerticalMedium && appStyles.marginVerticalMedium,
                marginVerticalLarge && appStyles.marginVerticalLarge,
                marginVerticalZero && appStyles.marginVerticalZero,

                //paddingVertical
                paddingVerticalLarge && appStyles.paddingVerticalLarge,
                paddingVerticalBase && appStyles.paddingVerticalBase,
                paddingVerticalSmall && appStyles.paddingVerticalSmall,
                paddingVerticalMedium && appStyles.paddingVerticalMedium,
                paddingVerticalZero && appStyles.paddingVerticalZero,

                flexDirectionRow && appStyles.flexDirectionRow,
                justifyContentSpaceBetween && appStyles.justifyContentSpaceBetween,
                //align Items
                alignItemsCenter && appStyles.alignItemsCenter,
                alignItemsFlexEnd && appStyles.alignItemsFlexEnd,
                alignItemsFlexStart && appStyles.alignItemsFlexStart,
                //

                isCenter && appStyles.center,
                background1 && appStyles.backgroundColorWhite,
                background2 && { backgroundColor: colors.appBgColor7 },


                style]}>
            {children}
        </Animatable.View>
    );
}




