import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors } from '../../services';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'


export const KeyboardAvoiding = ({children, style, animation }) => {
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
            {children}
        </KeyboardAwareScrollView>
    );
}