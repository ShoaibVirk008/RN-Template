import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes } from '../../services';
import Wrapper from '../wrapper';
import Text from '../text';

export const Back = ({ style, onPress, size }) => {
    return (
        <Icon
            name="chevron-left"
            type="feather"
            size={size ? size : totalSize(3)}
            //raised
            // reverse
            // reverseColor={colors.appTextColor6}
            color={colors.appTextColor3}
            iconStyle={style}
            onPress={onPress}
        />
    );
}
export const Button = ({ buttonStyle, onPress, shadow, shadowColored, iconSize, iconColor, iconName, iconType, buttonColor, buttonSize, customIcon, iconStyle, disabled }) => {
    const defaultButtonsize = totalSize(5)
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={
                [styles.IconButtonContainer,
                {
                    height: buttonSize ? buttonSize : defaultButtonsize,
                    width: buttonSize ? buttonSize : defaultButtonsize,
                    backgroundColor: buttonColor ? buttonColor : colors.appBgColor1
                },
                shadow ? appStyles.shadow : null,
                shadowColored ? appStyles.shadowColored : null,
                    buttonStyle]
            }
        >
            {
                customIcon ?
                    <Custom icon={customIcon} size={iconSize ? iconSize : totalSize(2)} color={iconColor} containerStyle={iconStyle} />
                    :
                    <Icon
                        name={iconName ? iconName : "heart"}
                        type={iconType ? iconType : "material-community"}
                        size={iconSize ? iconSize : sizes.icons.large}
                        color={iconColor ? iconColor : colors.appColor1}
                        iconStyl={iconStyle}
                    />
            }
        </TouchableOpacity>
    );
}
export const Custom = ({ icon, size, animation, duration, color, onPress,containerStyle }) => {
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


export const WithText = ({ text, containerStyle, title, customIcon, onPress, tintColor, iconName, iconType, iconSize, textStyle, titleStyle, direction, iconStyle, textContainerStyle }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: direction ? direction : 'row', alignItems: 'center', }, containerStyle]}>
            {
                customIcon ?
                    <Custom icon={customIcon} size={iconSize ? iconSize : totalSize(2)} color={tintColor && tintColor} />
                    :
                    <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2)} color={tintColor ? tintColor : colors.appTextColor1} iconStyle={iconStyle} />
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