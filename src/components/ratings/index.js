import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { totalSize } from 'react-native-dimension';
import Wrapper from '../wrapper'
import {  colors } from '../../services';
import { Icon } from '@rneui/base';

export const Primary = ({ value, iconSize, iconStyle, onPressIcon, emptyIconName, fillIconName, emptyIconColor, fillIconColor, iconType, disabled }) => {
    const ratings = [1, 2, 3, 4, 5]
    return (
        <>
            <Wrapper flexDirectionRow>
                {
                    ratings.map((item, index) => {
                        const defaultIconName = item <= value ? fillIconName ? fillIconName : 'star' : emptyIconName ? emptyIconName : 'star'
                        const defaultIconColor = item <= value ? fillIconColor ? fillIconColor : colors.rating : emptyIconColor || colors.rating+'40'
                        const defaultIconSize=iconSize ? iconSize : totalSize(2)
                        return (
                            <Icon
                            key={index}
                                name={defaultIconName}
                                color={defaultIconColor}
                                size={defaultIconSize}
                                containerStyle={[{marginHorizontal:defaultIconSize/6},iconStyle]}
                                onPress={() => {
                                    !disabled && onPressIcon && onPressIcon(item)
                                }}
                                type={iconType ? iconType : 'ionicon'}
                                disabled={!onPressIcon}
                                disabledStyle={{ backgroundColor: colors.transparent }}
                            />

                        )
                    })
                }
            </Wrapper>
        </>
    )
}
