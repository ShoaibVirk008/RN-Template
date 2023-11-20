import React from 'react'
import Wrapper from '../wrapper';
import { Pressable } from 'react-native';
import { colors, responsiveWidth, sizes } from '../../services';
import * as Icons from '../icons';
import Text from '../text';
import { Icon } from '@rneui/base';

export const IconTitleArrow = ({ iconImage, iconName, iconType, iconSvg, title, onPress, left, right, invertColors, titleStyle, containerStyle, disableIconColor, arrowColor,iconContainerColor, ...props }) => {
    const defaulTintColor = !invertColors ? colors.appTextColor2 : colors.appTextColor6
    const defaulArrowColor = arrowColor || (!invertColors ? colors.appTextColor4 : colors.appTextColor6)
    const defaulBackgroundColor = iconContainerColor||(!invertColors ? colors.appBgColor1 : colors.appBgColor6)
    return (
        <Pressable
            activeOpacity={1}
            onPress={onPress}
        >
            <Wrapper flexDirectionRow justifyContentSpaceBetween marginHorizontalBase alignItemsCenter style={containerStyle} {...props}>
                <Wrapper flexDirectionRow alignItemsCenter>
                    {
                        left ? left :
                            iconImage || iconName || iconSvg ?
                                <Icons.Button
                                    customIcon={iconImage}
                                    iconName={iconName}
                                    iconType={iconType}
                                    svgIcon={iconSvg}
                                    iconColor={!disableIconColor && defaulTintColor}
                                    iconSize={responsiveWidth(5)}
                                    buttonColor={defaulBackgroundColor}
                                    buttonSize={responsiveWidth(10)}
                                    isRound
                                //buttonStyle={{ marginRight: sizes.marginHorizontal }}
                                />
                                :
                                null
                    }
                    <Text isMedium style={[{ color: defaulTintColor }, titleStyle]}>{title}</Text>
                </Wrapper>
                {
                    right ?
                        right :
                        <Icon
                            name='chevron-right'
                            type='feather'
                            color={defaulArrowColor}
                            size={sizes.icons.medium}
                        />
                }
            </Wrapper>
        </Pressable>
    )
}