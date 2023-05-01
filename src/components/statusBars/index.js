import React from 'react'
import { StatusBar } from 'react-native'
import { colors } from '../../services'


export const Dark = () => {
    return (
        <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={colors.transparent}
        />
    )
}

export const Light = () => {
    return (
        <StatusBar
            translucent
            barStyle="light-content"
           // backgroundColor={colors.appBgColor6 + '40'}
            backgroundColor={colors.transparent}
        />
    )
}