import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { APP_COLORS, APP_STYLES, APP_SIZES } from '../../utilities';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';

export default function ({
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
})  {
    if (isGradient) {
        return (
            <LinearGradient
                style={[{ flex: 1 }, style]}
                colors={gradiantColors ? gradiantColors : APP_COLORS.appGradiantColors}
                {...linearGradientProps}
            >
                {children}
            </LinearGradient>
        )
    } else if (isImageBackground) {
        return (
            <ImageBackground source={source} style={[APP_STYLES.bgContainer, style]}>
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
                isMain && APP_STYLES.mainContainer,
                isCardView && APP_STYLES.cardView,
                isColored && APP_STYLES.coloredWrapper,
                isBorderedWrapper && APP_STYLES.borderedWrapper,
                isAbsolute && { position: 'absolute', },
                isAbsoluteFill && StyleSheet.absoluteFill,
                //marginHorizontal
                marginHorizontalBase && APP_STYLES.marginHorizontalBase,
                marginHorizontalSmall && APP_STYLES.marginHorizontalSmall,
                marginHorizontalTiny && APP_STYLES.marginHorizontalTiny,
                marginHorizontalMedium && APP_STYLES.marginHorizontalMedium,
                marginHorizontalLarge && APP_STYLES.marginHorizontalLarge,
                marginHorizontalZero && APP_STYLES.marginHorizontalZero,
                //paddingHorizontal
                paddingHorizontalLarge && APP_STYLES.paddingHorizontalLarge,
                paddingHorizontalBase && APP_STYLES.paddingHorizontalBase,
                paddingHorizontalSmall && APP_STYLES.paddingHorizontalSmall,
                paddingHorizontalTiny && APP_STYLES.paddingHorizontalTiny,
                paddingHorizontalMedium && APP_STYLES.paddingHorizontalMedium,
                paddingHorizontalZero && APP_STYLES.paddingHorizontalZero,
                // marginVertical
                marginVerticalBase && APP_STYLES.marginVerticalBase,
                marginVerticalSmall && APP_STYLES.marginVerticalSmall,
                marginVerticalTiny && APP_STYLES.marginVerticalTiny,
                marginVerticalMedium && APP_STYLES.marginVerticalMedium,
                marginVerticalLarge && APP_STYLES.marginVerticalLarge,
                marginVerticalZero && APP_STYLES.marginVerticalZero,

                //paddingVertical
                paddingVerticalLarge && APP_STYLES.paddingVerticalLarge,
                paddingVerticalBase && APP_STYLES.paddingVerticalBase,
                paddingVerticalTiny && APP_STYLES.paddingVerticalTiny,
                paddingVerticalSmall && APP_STYLES.paddingVerticalSmall,
                paddingVerticalMedium && APP_STYLES.paddingVerticalMedium,
                paddingVerticalZero && APP_STYLES.paddingVerticalZero,

                flexDirectionRow && APP_STYLES.flexDirectionRow,
                //justifyContent
                justifyContentSpaceBetween && APP_STYLES.justifyContentSpaceBetween,
                justifyContentCenter && APP_STYLES.justifyContentCenter,
                justifyContentFlexend && APP_STYLES.justifyContentFlexend,
                justifyContentFlexstart && APP_STYLES.justifyContentFlexstart,
                justifyContentSpaceEvenly && APP_STYLES.justifyContentSpaceEvenly,
                justifyContentSpaceAround&&APP_STYLES.justifyContentSpaceAround,
                //align Items
                alignItemsCenter && APP_STYLES.alignItemsCenter,
                alignItemsFlexEnd && APP_STYLES.alignItemsFlexEnd,
                alignItemsFlexStart && APP_STYLES.alignItemsFlexStart,
                //

                isCenter && APP_STYLES.center,
                //background
                background1 && APP_STYLES.backgroundColorWhite,
                background2 && { backgroundColor: APP_COLORS.appBgColor2 },
                backgroundDark && { backgroundColor: APP_COLORS.appBgColor6 },
                backgroundColor && { backgroundColor },
                style]}>
            {children}
        </Animatable.View>
    );
}




