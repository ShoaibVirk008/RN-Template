import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, fontSize, sizes } from '../../services';
import { Icons,Wrappers ,Texts} from '..';

export const Colored = ({
    text, isLoading, activityColor, animation, onPress, disabled, buttonStyle,
    customIcon, textStyle, iconName, iconType, iconSize, buttonColor, iconStyle,
    tintColor, direction
}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={isLoading ? true : disabled}>
            <Wrappers.Primary animation={animation} style={[appStyles.buttonColord, { borderRadius: sizes.buttonRadius, height: height(7), backgroundColor: disabled ? colors.appColor1 + '80' : buttonColor ? buttonColor : colors.appColor1 }, buttonStyle]}>
                <View style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
                    {
                        customIcon ?
                            <Icons.Custom
                                icon={customIcon}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={tintColor && tintColor}
                            />
                            :
                            iconName ?
                                <Icon
                                    name={iconName ? iconName : "email-outline"}
                                    type={iconType ? iconType : "material-community"}
                                    size={iconSize ? iconSize : totalSize(3)}
                                    color={tintColor ? tintColor : colors.appTextColor6}
                                //iconStyle={[{ marginRight: width(2.5) }, iconStyle]}
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
                            <Texts.ButtonMedium style={[{ color: tintColor ? tintColor : colors.appTextColor6, }, textStyle]}>{text}</Texts.ButtonMedium>
                    }
                </View>
            </Wrappers.Primary>
        </TouchableOpacity>
    );
}

export const ColoredSmall = ({text, onPress, buttonStyle, customIcon, direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: colors.appColor1 }, buttonStyle]}>
            <View style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
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
                <Texts.ButtonRegular style={[{ color: colors.appTextColor6, }, textStyle]}>  {text}  </Texts.ButtonRegular>
            </View>
        </TouchableOpacity>
    );
}

export const Bordered = ({text, onPress, buttonStyle, textStyle, iconName, customIcon, iconType, iconSize, iconColor, iconStyle, tintColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[appStyles.buttonBorderd, { borderRadius: sizes.buttonRadius, height: height(7), borderColor: tintColor ? tintColor : colors.appColor1 }, buttonStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    customIcon ?
                        <Icons.Custom
                            icon={customIcon}
                            size={iconSize ? iconSize : totalSize(3)}
                            color={iconColor ? iconColor : null}
                            style={[{ marginRight: width(5) }, iconStyle]}
                        />
                        :
                        iconName ?
                            <Icon
                                name={iconName ? iconName : "email-outline"}
                                type={iconType ? iconType : "material-community"}
                                size={iconSize ? iconSize : totalSize(3)}
                                color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                                iconStyle={[{ marginRight: width(5) }, iconStyle]}

                            />
                            :
                            null
                }
                <Texts.ButtonMedium style={[{ color: tintColor ? tintColor : colors.appColor1, }, textStyle]}>{text}</Texts.ButtonMedium>
            </View>
        </TouchableOpacity>
    );
}

export const BorderedSmall = ({ text, onPress, buttonStyle, rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), borderColor: tintColor ? tintColor : colors.appColor1, borderWidth: 1 }, buttonStyle]}>
            <View style={{ flexDirection: rowReverse ? 'row-reverse' : 'row', alignItems: 'center' }}>
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
                <Text style={[appStyles.Texts.ButtonRegular, { color: tintColor ? tintColor : colors.appColor1, fontSize: fontSize.regular }, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}




