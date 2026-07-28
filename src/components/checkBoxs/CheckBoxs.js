import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { APP_COLORS, APP_SIZES, APP_STYLES } from '../../services';
import * as Icons from '../icons/Icons';

export function Primary  ({
     textStyle, containerStyle, text, checked, 
     onPress,checkedIconName,uncheckedIconName,
     checkIconType,uncheckIconType,checkIconsize,
     checkedIconColor,uncheckedIconColor
    })  {
    const defaultCheckedIconName =checkedIconName?checkedIconName: 'check-circle'
    const defaultUncheckedIconName =uncheckedIconName?uncheckedIconName: 'checkbox-blank-circle-outline'
    const defaultcheckIconType =checkIconType?checkIconType: 'material-community'
    const defaultUncheckIconType =uncheckIconType?uncheckIconType: 'material-community'
    const defaultCheckIconsize =checkIconsize?checkIconsize: APP_SIZES.icons.medium
    const defaultCheckedIconColor =checkedIconColor?checkedIconColor: APP_COLORS.appColor1
    const defaultUncheckedIconColor =uncheckedIconColor?uncheckedIconColor: APP_COLORS.appColor1
    return (
        <Icons.WithText
            text={text}
            iconName={checked ? defaultCheckedIconName : defaultUncheckedIconName}
            iconType={checked ? defaultcheckIconType : defaultUncheckIconType}
            iconSize={defaultCheckIconsize}
            tintColor={checked ? defaultCheckedIconColor : defaultUncheckedIconColor}
            onPress={onPress}
            textStyle={[styles.checkboxText, textStyle]}
            containerStyle={containerStyle}
        />
    );
}

const styles = StyleSheet.create({
    checkboxText: {
        ...APP_STYLES.textRegular,
        // ...appStyles.textGray
    }
})
