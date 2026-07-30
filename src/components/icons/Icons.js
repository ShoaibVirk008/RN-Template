import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import { Badge, Icon } from '@rneui/base';
import { APP_COLORS, APP_STYLES, APP_SIZES, APP_SVGS, responsiveHeight, responsiveWidth } from '../../utilities';
import Wrapper from '../wrapper/Wrapper';
import Text from '../text/Text';

export function Back  ({ size, onPress, style, color }) {
    const defaultSize = size || responsiveWidth(5)
    return (
        // <Icon
        //     name="chevron-left"
        //     type="feather"
        //     size={size ? size : responsiveWidth(3)}
        //     //raised
        //     // reverse
        //     // reverseColor={colors.appTextColor6}
        //     color={color||colors.appTextColor3}
        //     iconStyle={style}
        //     onPress={onPress}
        // />
        <Svg
            svg={APP_SVGS.arrow_left}
            size={defaultSize}
            onPress={onPress}
            color={color}
        />
    );
}
export function Button  ({
    buttonStyle, onPress, shadow, shadowColored, iconSize, iconColor,
    iconName, iconType, buttonColor, buttonSize,
    customIcon, svgIcon, iconStyle, disabled, isRound, showBadge,
    badgeValue,
    //text props
    text, textStyle, textColor, badgeStyle
})  {
    const SvgIcon = svgIcon
    const defaultButtonsize = responsiveWidth(5)
    const _buttonSize = buttonSize ? buttonSize : defaultButtonsize
    const defaulIconSize = iconSize ? iconSize : APP_SIZES.icons.large
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={!onPress || disabled}
            style={
                [styles.IconButtonContainer,
                isRound && { borderRadius: 100 },
                {
                    height: _buttonSize,
                    width: _buttonSize,
                    backgroundColor: buttonColor ? buttonColor : APP_COLORS.appBgColor1
                },
                shadow ? APP_STYLES.shadow : null,
                shadowColored ? APP_STYLES.shadowColored : null,
                    buttonStyle]
            }
        >
            {
                svgIcon ?
                    <Wrapper style={iconStyle}>
                        <SvgIcon
                            height={defaulIconSize}
                            width={defaulIconSize}
                        />
                    </Wrapper>
                    :
                    customIcon ?
                        <Custom
                            icon={customIcon}
                            size={defaulIconSize}
                            color={iconColor}
                            containerStyle={iconStyle}
                        />

                        :
                        text ?
                            <Text isRegular isMediumFont style={[{ color: textColor || APP_COLORS.appColor1 }, textStyle]}>{text}</Text>
                            :
                            <Icon
                                name={iconName ? iconName : "heart"}
                                type={iconType ? iconType : "material-community"}
                                size={defaulIconSize}
                                color={iconColor ? iconColor : APP_COLORS.appColor1}
                                style={iconStyle}
                            />
            }
            {
                showBadge ?
                    <Wrapper isAbsolute style={{ top: 2.5, right: 2.5 }}>
                        <Badge
                            containerStyle={{}}
                            value={badgeValue}
                            textStyle={[APP_STYLES.textTiny, APP_STYLES.textWhite, APP_STYLES.fontBold]}
                            badgeStyle={[{  backgroundColor: APP_COLORS.error, borderWidth: 0, borderRadius: 100 }, badgeStyle]}
                        />
                    </Wrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}
export function  Custom  ({ icon, size, animation, duration, color, onPress, containerStyle }) {
    const defaulSize = responsiveWidth(5)
    return (
        <Wrapper animation={animation} duration={duration} style={containerStyle}>
            <TouchableOpacity disabled={!onPress} onPress={onPress}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{ height: size ? size : defaulSize, width: size ? size : defaulSize, tintColor: color }}
                />
            </TouchableOpacity>
        </Wrapper>
    );
}


export function WithText  ({ text, containerStyle, title, customIcon, onPress, tintColor, svgIcon, iconName, iconType, iconSize, textStyle, titleStyle, direction, iconStyle, textContainerStyle })  {
    const SvgIcon = svgIcon
    const defaulIconSize = iconSize ? iconSize : responsiveWidth(2)
    return (
        <TouchableOpacity disabled={!onPress} activeOpacity={1} onPress={onPress} style={[{ flexDirection: direction ? direction : 'row', alignItems: 'center', }, containerStyle]}>
            {
                svgIcon ?
                    <Wrapper style={iconStyle}>
                        <SvgIcon
                            height={defaulIconSize}
                            width={defaulIconSize}
                        />
                    </Wrapper>
                    :
                    customIcon ?
                        <Custom icon={customIcon} size={defaulIconSize} color={tintColor && tintColor} />
                        :
                        <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={defaulIconSize} color={tintColor ? tintColor : APP_COLORS.appTextColor1} iconStyle={iconStyle} />
            }
            <Wrapper style={[direction === 'column' ? { marginVertical: responsiveHeight(1.5) } : { marginHorizontal: responsiveWidth(2) }, textContainerStyle]}>
                {
                    title ?
                        <Text isRegular isBoldFont style={[{ color: tintColor ? tintColor : APP_COLORS.appTextColor1, marginBottom: 5 }, titleStyle]}>{title}</Text>
                        :
                        null
                }
                {
                    text ?
                        <Text isSmall style={[{ color: tintColor ? tintColor : APP_COLORS.appTextColor1, }, textStyle]}>{text}</Text>
                        :
                        null
                }
            </Wrapper>
        </TouchableOpacity>
    );
}
export function Svg  ({ svg, onPress, size }) {
    const Svg = svg
    const defaultSize = size || responsiveWidth(2.5)
    return (
        <Pressable onPress={onPress} disabled={!onPress} >
            <Svg
                height={defaultSize}
                width={defaultSize}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    IconButtonContainer: {
        height: responsiveWidth(5),
        width: responsiveWidth(5),
        backgroundColor: APP_COLORS.appColor1,
        borderRadius: 10,
        ...APP_STYLES.center,
        //  ...appStyles.shadow
    }
})