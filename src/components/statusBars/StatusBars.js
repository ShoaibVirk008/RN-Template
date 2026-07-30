import React from 'react'
import { StatusBar } from 'react-native'
import { APP_COLORS } from '../../utilities';


export const Dark = () => {
    return (
        <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={APP_COLORS.transparent}
        />
    )
}

export const Light = () => {
    return (
        <StatusBar
            translucent
            barStyle="light-content"
           // backgroundColor={colors.appBgColor6 + '40'}
            backgroundColor={APP_COLORS.transparent}
        />
    )
}