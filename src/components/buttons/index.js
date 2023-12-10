import React from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, fontSizes, sizes } from '../../services';
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import ButtonGroupAnimated from './buttonGroupAnimated'

export const Colored = ({
    text, isLoading, activityColor, animation, onPress, disabled, buttonStyle,
    customIcon, textStyle, iconName, iconType, iconSize, buttonColor, iconStyle,
    tintColor, direction
}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={isLoading ? true : disabled}>
            <Wrapper animation={animation} style={[appStyles.buttonColord, { borderRadius: sizes.buttonRadius, height: sizes.buttonHeight, backgroundColor: disabled ? colors.appColor2 + '80' : buttonColor ? buttonColor : colors.appColor2 }, buttonStyle]}>
                <Wrapper style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
                    {
                        customIcon ?
                            <Icons.Custom
                                icon={customIcon}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={tintColor && tintColor}
                                containerStyle={[{ marginRight: width(2.5) }, iconStyle]}
                            />
                            :
                            iconName ?
                                <Icon
                                    name={iconName ? iconName : "email-outline"}
                                    type={iconType ? iconType : "material-community"}
                                    size={iconSize ? iconSize : totalSize(3)}
                                    color={tintColor ? tintColor : colors.appTextColor6}
                                    iconStyle={[{ marginRight: width(2.5) }, iconStyle]}
                                />
                                :
                                null
                    }
                    {
                        isLoading ?
                            <ActivityIndicator
                                color={activityColor ? activityColor : colors.appBgColor1}
                                size={"small"}
                            />
                            :
                            <Text isButtonMedium style={[{ color: tintColor ? tintColor : colors.appTextColor6, }, textStyle]}>{text}</Text>
                    }
                </Wrapper>
            </Wrapper>
        </TouchableOpacity>
    );
}

export const ColoredSmall = ({ text, onPress, buttonStyle, customIcon, direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: colors.appColor1 }, buttonStyle]}>
            <Wrapper style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <Icons.Custom
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={iconColor ? iconColor : colors.appTextColor6}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(2)}
                                color={iconColor ? iconColor : colors.appTextColor6}
                                iconStyle={[{}, iconStyle]}
                            />
                            :
                            null
                }
                <Text isButtonRegular style={[{ color: colors.appTextColor6, }, textStyle]}>  {text}  </Text>
            </Wrapper>
        </TouchableOpacity>
    );
}

export const Bordered = ({ text, onPress, buttonStyle, textStyle, iconName, customIcon, iconType, iconSize, iconColor, iconStyle, tintColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.buttonBorderd, { borderRadius: sizes.buttonRadius, height: sizes.buttonHeight, borderColor: tintColor ? tintColor : colors.appColor2 }, buttonStyle]}>
            <Wrapper style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <Icons.Custom
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={iconColor ? iconColor : null}
                            containerStyle={[{ marginRight: width(2.5) }, iconStyle]}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginRight: width(2.5) }, iconStyle]}

                            />
                            :
                            null
                }
                <Text isButtonMedium style={[{ color: tintColor ? tintColor : colors.appColor2, }, textStyle]}>{text}</Text>
            </Wrapper>
        </TouchableOpacity>
    );
}

export const BorderedSmall = ({ text, onPress, buttonStyle, rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), borderColor: tintColor ? tintColor : colors.appColor1, borderWidth: 1 }, buttonStyle]}>
            <Wrapper style={{ flexDirection: rowReverse ? 'row-reverse' : 'row', alignItems: 'center' }}>
                {
                    iconName ?
                        <Icon
                            name={iconName ? iconName : "email-outline"}
                            type={iconType ? iconType : "material-community"}
                            size={iconSize ? iconSize : totalSize(2)}
                            color={tintColor ? tintColor : colors.appColor1}
                            iconStyle={[{ marginHorizontal: width(2) }, iconStyle]}
                        />
                        :
                        null
                }
                <Text isButtonRegular style={[{ color: tintColor ? tintColor : colors.appColor1, fontSize: fontSizes.regular }, textStyle]}>{text}</Text>
            </Wrapper>
        </TouchableOpacity>
    );
}




export {ButtonGroupAnimated}