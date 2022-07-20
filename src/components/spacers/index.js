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
export const Base = ({ horizontal }) => {
    return (
        <Spacer height={!horizontal ? sizes.baseMargin : 0} width={horizontal && sizes.baseMargin} />
    );
}
export const Tiny = ({ horizontal }) => {
    return (
        <Spacer height={!horizontal ? sizes.TinyMargin : 0} width={horizontal && sizes.TinyMargin} />
    );
}
export const Small = ({ horizontal }) => {
    return (
        <Spacer height={!horizontal ? sizes.smallMargin : 0} width={horizontal && sizes.smallMargin} />
    );
}
export const DoubleBase = ({ horizontal }) => {
    return (
        <Spacer height={!horizontal ? sizes.doubleBaseMargin : 0} width={horizontal && sizes.doubleBaseMargin} />
    );
}