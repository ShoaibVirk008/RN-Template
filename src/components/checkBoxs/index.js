import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { colors, sizes, appStyles } from '../../services';
import { Icons } from '..';

export const Primary = ({textStyle, containerStyle, text, checked, onPress }) => {
    const checkedIconName = 'checkbox-marked'
    const uncheckedIconName = 'checkbox-blank-outline'
    const checkboxIconType = 'material-community'
    const checkboxappIconsize = sizes.icons.medium
    const checkIconColor = colors.appColor1
    const uncheckIconColor = colors.appTextColor5
    return (
        <Icons.WithText
            text={text}
            iconName={checked ? checkedIconName : uncheckedIconName}
            iconType={checkboxIconType}
            iconSize={checkboxappIconsize}
            tintColor={checked ? checkIconColor : uncheckIconColor}
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
