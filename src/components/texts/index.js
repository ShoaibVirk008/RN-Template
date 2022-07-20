import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { appStyles, colors, fontFamily, sizes, appIcons } from '../../services';

// Title Texts
export const XXLTitle = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.xxlTitleStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const XLTitle = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.xlTitleStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const LargeTitle = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.largeTitleStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const MediumTitle = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.mediumTitleStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const SmallTitle = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.smallTitleStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const TinyTitle = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.tinyTitleStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
// Normal Texts
export const Large = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.largeTextStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const Medium = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.mediumTextStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const Regular = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.regularTextStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const Small = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.smallTextStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const Tiny = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.tinyTextStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const Input = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.inputTitleStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}

export const ButtonRegular = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.ButtonTextRegularStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}
export const ButtonMedium = ({ style, children, ...props }) => {
    return (
        <Text
            style={[styles.ButtonTextMediumStyle, style]}
            {...props}
        >
            {children}
        </Text>
    );
}





const styles = StyleSheet.create({
    xxlTitleStyle: {
        ...appStyles.h1
    },
    xlTitleStyle: {
        ...appStyles.h2
    },
    largeTitleStyle: {
        ...appStyles.h3
    },
    mediumTitleStyle: {
        ...appStyles.h4
    },
    smallTitleStyle: {
        ...appStyles.h5
    },
    tinyTitleStyle: {
        ...appStyles.h6,
    },
    largeTextStyle: {
        ...appStyles.textLarge
    },
    mediumTextStyle: {
        ...appStyles.textMedium
    },
    regularTextStyle: {
        ...appStyles.textRegular
    },
    smallTextStyle: {
        ...appStyles.textSmall
    },
    tinyTextStyle: {
        ...appStyles.textTiny
    },
    inputTitleStyle: {
        ...appStyles.textTiny,
    },
    ButtonTextRegularStyle: {
        ...appStyles.ButtonRegular,
    },
    ButtonTextMediumStyle: {
        ...appStyles.ButtonMedium,
    },

});

