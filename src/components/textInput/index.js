import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes } from '../../services';
const Colored = ({ iconName, iconType, placeholder, onFocus, onBlur, onChangeText, secureTextEntry, value, containerStyle }) => {
    return (
        <View style={[appStyles.inputContainerColored, {
            borderRadius: sizes.inputRadius,
            backgroundColor: colors.appBgColor2
        }, appStyles.shadow, containerStyle]}>
            {
                iconName ?
                    <View style={{ marginLeft:sizes.marginHorizontal/2 }}>
                        <Icon name={iconName} type={iconType} size={totalSize(2.5)} color={colors.appTextColor5} iconStyle={{}} />
                    </View>
                    :
                    null
            }

            <View style={{ flex: 1 }}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry}
                    style={[appStyles.inputField, { width: null, height: height(7),paddingHorizontal:sizes.marginHorizontal/2 }]}
                />
            </View>
        </View>
    );
}
const Bordered = ({ iconName, iconType, placeholder, placeholderTextColor, onFocus, onChangeText, secureTextEntry, value, containerStyle, inputStyle }) => {
    return (
        <View style={[appStyles.inputContainerBorderd, {
            borderRadius: sizes.inputRadius,
            borderWidth: 1,
            borderColor: colors.appColor1
        }, containerStyle]}>
            {
                iconName ?
                <View style={{ marginLeft:sizes.marginHorizontal/2 }}>
                        <Icon name={iconName} type={iconType} size={totalSize(2.5)} color={colors.appColor1} iconStyle={{}} />
                    </View>
                    :
                    null
            }
            <View style={{ flex: 1 }}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    style={[appStyles.inputField, { width: null, height: height(7),paddingHorizontal:sizes.marginHorizontal/2 }, inputStyle]}
                />
            </View>
        </View>
    );
}

export { Colored, Bordered }