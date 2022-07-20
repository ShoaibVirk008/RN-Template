import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes } from '../../services';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';

export const Main = ({ children, style, animation }) => {
    return (
        <Animatable.View animation={animation} style={[appStyles.mainContainer, style]}>
            {children}
        </Animatable.View>
    );
}
export const Gradient = ({ children, style, gradiantColors }) => {
    return (
        <LinearGradient style={[{ flex: 1 }, style]} colors={gradiantColors ? gradiantColors : colors.appGradiantColors1}>
            {children}
        </LinearGradient>
    );
}
export const MainPrimary = ({ children, style, animation }) => {
    return (
        <Animatable.View animation={animation} style={[styles.mainWrapperPrimary, style]}>
            {children}
        </Animatable.View>
    );
}
export const ImageBackgroundWrapper = ({ children, style, source }) => {
    return (
        <ImageBackground source={source} style={[appStyles.bgContainer, style]}>
            {children}
        </ImageBackground>
    );
}

export const Primary = ({ children, style, animation, flex, duration, iterationCount, direction }) => {
    return (
        <Animatable.View
            iterationCount={iterationCount}
            direction={direction}
            animation={animation}
            duration={duration} style={[{ flex: flex }, style]}>
            {children}
        </Animatable.View>
    );
}
export const Component = ({ children, style, animation }) => {
    return (
        <Animatable.View animation={animation} style={[appStyles.compContainer, styles.removerMarginVertical, style]}>
            {children}
        </Animatable.View>
    );
}

export const Row = ({ children, style, animation }) => {
    return (
        <Animatable.View animation={animation} style={[appStyles.rowCompContainer, styles.removerMarginVertical, style]}>
            {children}
        </Animatable.View>
    );
}
export const RowBasic = ({ children, style, animation }) => {
    return (
        <Animatable.View animation={animation} style={[appStyles.rowView, style]}>
            {children}
        </Animatable.View>
    );
}
export const Card = ({ children, style, animation }) => {
    return (
        <Animatable.View animation={animation} style={[appStyles.cardView, { borderRadius: sizes.cardRadius }, style]}>
            {children}
        </Animatable.View>
    );
}
export const Absolute = ({ children, style, animation }) => {
    return (
        <Animatable.View animation={animation} style={[{ position: 'absolute', }, style]}>
            {children}
        </Animatable.View>
    );
}
export const ColoredWrapper = ({ style, children, ...props }) => {
    return (
        <TouchableOpacity
            style={[appStyles.coloredWrapper, style]}
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}
export const BorderedWrapper = ({ style, children, ...props }) => {
    return (
        <Animatable.View
            style={[appStyles.borderedWrapper, style]}
            {...props}
        >
            {children}
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    mainWrapperPrimary: {
        ...appStyles.mainContainer,
        backgroundColor: colors.appBgColor4
    },
    removerMarginVertical: {
        marginVertical: null
    },
})