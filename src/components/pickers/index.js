import React, { useRef, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, fontSize, fontFamily, sizes, appIcons, appStyles } from '../../services';
import RNPickerSelect from 'react-native-picker-select'
import { Icons, Spacers, Texts, Wrappers } from '..';

export const Primary = ({
    onDonePress, containerStyle, data, title, onChange,
    placeholder, error, value, itemKey,
    left, customIconLeft, iconSizeLeft, iconColorLeft, iconStyleLeft, iconNameLeft
}) => {
    const placeholderObject = {
        label: placeholder, value: 'placeholder', color: '#909090',
    }
    return (
        <Wrappers.Primary>
            <Wrappers.Component>
                <Texts.Input>{title}</Texts.Input>
            </Wrappers.Component>
            <Spacers.Base/>
            <View style={[appStyles.inputContainerColored, {
                borderRadius: 2,
                backgroundColor: colors.appBgColor2,
                borderWidth: 1,
                borderColor: colors.appBgColor3
            }, containerStyle]}>
                {
                    left ?
                        left
                        :
                        customIconLeft ?
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor3} containerStyle={iconStyleLeft} />
                            </View>
                            :
                            iconNameLeft ?
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} iconStyle={iconStyleLeft} />
                                </View>
                                :
                                null
                }
                <Wrappers.Primary flex={8}>
                    <RNPickerSelect
                        onDonePress={onDonePress}
                        onValueChange={onChange}
                        value={value}
                        itemKey={itemKey}
                        items={data}
                        placeholder={placeholderObject}
                        useNativeAndroidPickerStyle={false}
                        pickerProps={{ mode: 'dropdown' }}
                        style={{
                            ...PickerPrimaryStyles,
                            iconContainer: {
                                top: height(2.5),
                                right: width(5),
                            },
                        }}
                        Icon={() =>
                            //<Icon name="ios-chevron-down" type="ionicon" size={totalSize(2.5)} color={colors.appTextColor3} />
                            <Icons.Custom
                                icon={appIcons.dropdown_normal}
                                size={totalSize(2)}
                            />
                        }
                    />
                </Wrappers.Primary>
            </View>
            {
                error ?
                    // <Absolute animation="shake" style={{ bottom: 0, right: sizes.marginHorizontal, left: 0, }}>
                    //     <SmallText style={[{ color: colors.error, textAlign: 'right' }]}>{error}</SmallText>
                    // </Absolute>
                    <Wrappers.Component style={{}} animation="shake">
                         <Spacers.Tiny/>
                        <Icons.WithText
                            iconName="alert-circle-outline"
                            //title="New"
                            text={error}
                            tintColor={colors.error}
                            iconSize={sizes.icons.small}
                            textStyle={[{ fontSize: fontSize.small }]}
                        />
                    </Wrappers.Component>
                    :
                    null
            }
        </Wrappers.Primary>
    );
}

const PickerPrimaryStyles = StyleSheet.create({
    inputIOS: {
        fontSize: fontSize.medium,
        fontFamily: fontFamily.appTextMedium,
        //paddingVertical: height(2),
        height: height(8),
        // paddingHorizontal: width(5),
        marginHorizontal: width(5),
        //borderWidth: 1,
        //borderColor: colors.appTextColor5,
        //  borderRadius: 5,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: fontSize.medium,
        fontFamily: fontFamily.appTextMedium,
        // paddingHorizontal: width(5),
        //paddingVertical: height(2),
        height: height(8),
        marginHorizontal: width(5),
        // borderWidth: 1,
        // borderColor: colors.appTextColor5,
        //borderRadius: 5,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
    },
});



