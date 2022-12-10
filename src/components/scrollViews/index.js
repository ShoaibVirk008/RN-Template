import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'


export const KeyboardAvoiding = ({children, style, animation }) => {
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
            {children}
        </KeyboardAwareScrollView>
    );
}

export const WithKeyboardAvoidingView = ({ children, footer }) => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
            <ScrollView>
                {children}
            </ScrollView>
            {footer}
        </KeyboardAvoidingView>
    )
}