import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes } from '../../services';

export const Spacer = ({ style, width, height }) => {
    return (
        <View style={[{ height: height, width: width }, style]} />
    );
}
export const Base = ({ }) => {
    return (
        <Spacer height={sizes.baseMargin} />
    );
}
export const Tiny = ({ }) => {
    return (
        <Spacer height={sizes.TinyMargin} />
    );
}
export const Small = ({ }) => {
    return (
        <Spacer height={sizes.smallMargin} />
    );
}
export const DoubleBase = ({ }) => {
    return (
        <Spacer height={sizes.doubleBaseMargin} />
    );
}