import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes } from '../../services';
import * as Animatable from 'react-native-animatable';
import { Texts } from '..';

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
export const Custom = ({ icon, size, animation, duration, color, onPress }) => {
    const defaulSize = totalSize(5)
    return (
        <Animatable.View animation={animation} duration={duration}>
            <TouchableOpacity disabled={!onPress} onPress={onPress}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{ height: size ? size : defaulSize, width: size ? size : defaulSize, tintColor: color }}
                />
            </TouchableOpacity>
        </Animatable.View>
    );
}


export const WithText = ({ text, containerStyle, title, customIcon, onPress, tintColor, iconName, iconType, iconSize, textStyle, titleStyle, direction, iconStyle }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: direction ? direction : 'row', alignItems: 'center', }, containerStyle]}>
            {
                customIcon ?
                    <CustomIcon icon={customIcon} size={iconSize ? iconSize : totalSize(2)} color={tintColor ? tintColor : colors.appColor1} />
                    :
                    <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2)} color={tintColor ? tintColor : colors.appTextColor1} iconStyle={iconStyle} />
            }
            <View style={direction === 'column' ? { marginVertical: height(1.5) } : { marginHorizontal: width(2) }}>
                {
                    title ?
                        <Text style={[appStyles.textRegular, { color: tintColor ? tintColor : colors.appTextColor1, fontFamily: FontFamily.appTextBold, marginBottom: 5 }, titleStyle]}>{title}</Text>
                        :
                        null
                }
                <Texts.Small style={[{ color: tintColor ? tintColor : colors.appTextColor1, }, textStyle]}>{text}</Texts.Small>
            </View>
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