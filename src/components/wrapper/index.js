import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { colors, appStyles, sizes } from '../../services';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';

export default ({
    children, style, animation, duration,
    iterationCount, isMain, isGradient, flex,
    flexDirectionRow,
    //justifyContent
    justifyContentCenter,
    justifyContentSpaceBetween,
    justifyContentFlexend,
    justifyContentFlexstart,
    justifyContentSpaceEvenly,
    justifyContentSpaceAround,
    //alignItems
    alignItemsCenter,
    alignItemsFlexEnd,
    alignItemsFlexStart,
    //
    isCardView,
    isAbsolute, isAbsoluteFill, isColored,
    isBorderedWrapper, gradiantColors, isCenter,
    //background
    backgroundColor,
    background1, background2, backgroundDark,
    isImageBackground, source,
    //paddingHorizontal
    paddingHorizontalBase,
    paddingHorizontalSmall,
    paddingHorizontalTiny,
    paddingHorizontalMedium,
    paddingHorizontalLarge,
    paddingHorizontalZero,
    //paddingVertical
    paddingVerticalBase,
    paddingVerticalSmall,
    paddingVerticalTiny,
    paddingVerticalMedium,
    paddingVerticalLarge,
    paddingVerticalZero,
    //marginVertical
    marginVerticalBase,
    marginVerticalSmall,
    marginVerticalTiny,
    marginVerticalMedium,
    marginVerticalLarge,
    marginVerticalZero,
    //marginHorizontal
    marginHorizontalBase,
    marginHorizontalSmall,
    marginHorizontalTiny,
    marginHorizontalMedium,
    marginHorizontalLarge,
    marginHorizontalZero,
    ...linearGradientProps
}) => {
    if (isGradient) {
        return (
            <LinearGradient
                style={[{ flex: 1 }, style]}
                colors={gradiantColors ? gradiantColors : colors.appGradiantColors}
                {...linearGradientProps}
            >
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
                isColored && appStyles.coloredWrapper,
                isBorderedWrapper && appStyles.borderedWrapper,
                isAbsolute && { position: 'absolute', },
                isAbsoluteFill && StyleSheet.absoluteFill,
                //marginHorizontal
                marginHorizontalBase && appStyles.marginHorizontalBase,
                marginHorizontalSmall && appStyles.marginHorizontalSmall,
                marginHorizontalTiny && appStyles.marginHorizontalTiny,
                marginHorizontalMedium && appStyles.marginHorizontalMedium,
                marginHorizontalLarge && appStyles.marginHorizontalLarge,
                marginHorizontalZero && appStyles.marginHorizontalZero,
                //paddingHorizontal
                paddingHorizontalLarge && appStyles.paddingHorizontalLarge,
                paddingHorizontalBase && appStyles.paddingHorizontalBase,
                paddingHorizontalSmall && appStyles.paddingHorizontalSmall,
                paddingHorizontalTiny && appStyles.paddingHorizontalTiny,
                paddingHorizontalMedium && appStyles.paddingHorizontalMedium,
                paddingHorizontalZero && appStyles.paddingHorizontalZero,
                // marginVertical
                marginVerticalBase && appStyles.marginVerticalBase,
                marginVerticalSmall && appStyles.marginVerticalSmall,
                marginVerticalTiny && appStyles.marginVerticalTiny,
                marginVerticalMedium && appStyles.marginVerticalMedium,
                marginVerticalLarge && appStyles.marginVerticalLarge,
                marginVerticalZero && appStyles.marginVerticalZero,

                //paddingVertical
                paddingVerticalLarge && appStyles.paddingVerticalLarge,
                paddingVerticalBase && appStyles.paddingVerticalBase,
                paddingVerticalTiny && appStyles.paddingVerticalTiny,
                paddingVerticalSmall && appStyles.paddingVerticalSmall,
                paddingVerticalMedium && appStyles.paddingVerticalMedium,
                paddingVerticalZero && appStyles.paddingVerticalZero,

                flexDirectionRow && appStyles.flexDirectionRow,
                //justifyContent
                justifyContentSpaceBetween && appStyles.justifyContentSpaceBetween,
                justifyContentCenter && appStyles.justifyContentCenter,
                justifyContentFlexend && appStyles.justifyContentFlexend,
                justifyContentFlexstart && appStyles.justifyContentFlexstart,
                justifyContentSpaceEvenly && appStyles.justifyContentSpaceEvenly,
                justifyContentSpaceAround&&appStyles.justifyContentSpaceAround,
                //align Items
                alignItemsCenter && appStyles.alignItemsCenter,
                alignItemsFlexEnd && appStyles.alignItemsFlexEnd,
                alignItemsFlexStart && appStyles.alignItemsFlexStart,
                //

                isCenter && appStyles.center,
                //background
                background1 && appStyles.backgroundColorWhite,
                background2 && { backgroundColor: colors.appBgColor2 },
                backgroundDark && { backgroundColor: colors.appBgColor6 },
                backgroundColor && { backgroundColor },
                style]}>
            {children}
        </Animatable.View>
    );
}




