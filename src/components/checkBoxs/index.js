import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { colors, sizes, appStyles } from '../../services';
import * as Icons from '../icons';

export const Primary = ({
     textStyle, containerStyle, text, checked, 
     onPress,checkedIconName,uncheckedIconName,
     checkIconType,uncheckIconType,checkIconsize,
     checkedIconColor,uncheckedIconColor
    }) => {
    const defaultCheckedIconName =checkedIconName?checkedIconName: 'check-circle'
    const defaultUncheckedIconName =uncheckedIconName?uncheckedIconName: 'checkbox-blank-circle-outline'
    const defaultcheckIconType =checkIconType?checkIconType: 'material-community'
    const defaultUncheckIconType =uncheckIconType?uncheckIconType: 'material-community'
    const defaultCheckIconsize =checkIconsize?checkIconsize: sizes.icons.medium
    const defaultCheckedIconColor =checkedIconColor?checkedIconColor: colors.appColor1
    const defaultUncheckedIconColor =uncheckedIconColor?uncheckedIconColor: colors.appColor1
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
        ...appStyles.textRegular,
        // ...appStyles.textGray
    }
})
