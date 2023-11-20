import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native'
import { Badge, Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes, appSvgs } from '../../services';
import Wrapper from '../wrapper';
import Text from '../text';

export const Back = ({ size, onPress, style, color }) => {
    const defaultSize = size || totalSize(2.5)
    return (
        // <Icon
        //     name="chevron-left"
        //     type="feather"
        //     size={size ? size : totalSize(3)}
        //     //raised
        //     // reverse
        //     // reverseColor={colors.appTextColor6}
        //     color={color||colors.appTextColor3}
        //     iconStyle={style}
        //     onPress={onPress}
        // />
        <Svg
            svg={appSvgs.arrow_left}
            size={size ? size : totalSize(2)}
            onPress={onPress}
            color={color}
        />
    );
}
export const Button = ({
    buttonStyle, onPress, shadow, shadowColored, iconSize, iconColor,
    iconName, iconType, buttonColor, buttonSize,
    customIcon, svgIcon, iconStyle, disabled, isRound, showBadge,
    badgeValue,
    //text props
    text, textStyle, textColor, badgeStyle
}) => {
    const SvgIcon = svgIcon
    const defaultButtonsize = totalSize(5)
    const _buttonSize = buttonSize ? buttonSize : defaultButtonsize
    const defaulIconSize = iconSize ? iconSize : sizes.icons.large
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
                    backgroundColor: buttonColor ? buttonColor : colors.appBgColor1
                },
                shadow ? appStyles.shadow : null,
                shadowColored ? appStyles.shadowColored : null,
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
                            <Text isRegular isMediumFont style={[{ color: textColor || colors.appColor1 }, textStyle]}>{text}</Text>
                            :
                            <Icon
                                name={iconName ? iconName : "heart"}
                                type={iconType ? iconType : "material-community"}
                                size={defaulIconSize}
                                color={iconColor ? iconColor : colors.appColor1}
                                style={iconStyle}
                            />
            }
            {
                showBadge ?
                    <Wrapper isAbsolute style={{ top: 2.5, right: 2.5 }}>
                        <Badge
                            containerStyle={{}}
                            value={badgeValue}
                            textStyle={[appStyles.textTiny, appStyles.textWhite, appStyles.fontBold]}
                            badgeStyle={[{  backgroundColor: colors.error, borderWidth: 0, borderRadius: 100 }, badgeStyle]}
                        />
                    </Wrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}
export const Custom = ({ icon, size, animation, duration, color, onPress, containerStyle }) => {
    const defaulSize = totalSize(5)
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


export const WithText = ({ text, containerStyle, title, customIcon, onPress, tintColor, svgIcon, iconName, iconType, iconSize, textStyle, titleStyle, direction, iconStyle, textContainerStyle }) => {
    const SvgIcon = svgIcon
    const defaulIconSize = iconSize ? iconSize : totalSize(2)
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
                        <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={defaulIconSize} color={tintColor ? tintColor : colors.appTextColor1} iconStyle={iconStyle} />
            }
            <Wrapper style={[direction === 'column' ? { marginVertical: height(1.5) } : { marginHorizontal: width(2) }, textContainerStyle]}>
                {
                    title ?
                        <Text isRegular isBoldFont style={[{ color: tintColor ? tintColor : colors.appTextColor1, marginBottom: 5 }, titleStyle]}>{title}</Text>
                        :
                        null
                }
                {
                    text ?
                        <Text isSmall style={[{ color: tintColor ? tintColor : colors.appTextColor1, }, textStyle]}>{text}</Text>
                        :
                        null
                }
            </Wrapper>
        </TouchableOpacity>
    );
}
export const Svg = ({ svg, onPress, size }) => {
    const Svg = svg
    const defaultSize = size || totalSize(2.5)
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
        height: totalSize(5),
        width: totalSize(5),
        backgroundColor: colors.appColor1,
        borderRadius: 10,
        ...appStyles.center,
        //  ...appStyles.shadow
    }
})