import React from 'react'
import Wrapper from '../wrapper/Wrapper';
import { Pressable } from 'react-native';
import { APP_COLORS, responsiveWidth, APP_SIZES } from '../../utilities';
import * as Icons from '../icons/Icons';
import Text from '../text/Text';
import { Icon } from '@rneui/base';

export function IconTitleArrow  ({ iconImage, iconName, iconType, iconSvg, title, onPress, left, right, invertColors, titleStyle, containerStyle, disableIconColor, arrowColor,iconContainerColor, ...props })  {
    const defaulTintColor = !invertColors ? APP_COLORS.appTextColor2 : APP_COLORS.appTextColor6
    const defaulArrowColor = arrowColor || (!invertColors ? APP_COLORS.appTextColor4 : APP_COLORS.appTextColor6)
    const defaulBackgroundColor = iconContainerColor||(!invertColors ? APP_COLORS.appBgColor1 : APP_COLORS.appBgColor6)
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
                            size={APP_SIZES.icons.medium}
                        />
                }
            </Wrapper>
        </Pressable>
    )
}