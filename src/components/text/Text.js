import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { APP_STYLES,  } from '../../services';

export default function ({
    style,
    children,
    isXXLTitle,
    isXLTitle,
    isLargeTitle,
    isMediumTitle,
    isSmallTitle,
    isTinyTitle,
    isLarge,
    isMedium,
    isRegular,
    isSmall,
    isTiny,
    isXTiny,
    isInputTitle,
    isButtonRegular,
    isButtonMedium,
    isButtonLarge,
    //align text
    alignTextCenter,
    alignTextRight,
    //colors
    isTextColor2,
    isDarkGray,
    isGray,
    isLightGray,
    isWhite,
    isPrimaryColor,
    isSecondaryColor,
    isForthColor,
    //others
    isUnderlined,
    isBoldFont,
    isMediumFont,
    isRegularFont,
    isLightFont,
    ...props })  {
    return (
        <Text
            style={[
                //titles
                isXXLTitle && styles.xxlTitleStyle,
                isXLTitle && styles.xlTitleStyle,
                isLargeTitle && styles.largeTitleStyle,
                isMediumTitle && styles.mediumTitleStyle,
                isSmallTitle && styles.smallTitleStyle,
                isTinyTitle && styles.tinyTitleStyle,
                //normal text
                isLarge && styles.largeTextStyle,
                isMedium && styles.mediumTextStyle,
                isRegular && styles.regularTextStyle,
                isSmall && styles.smallTextStyle,
                isTiny && styles.tinyTextStyle,
                isXTiny&&APP_STYLES.xTinyText,

                isInputTitle && styles.inputTitleStyle,
                isButtonRegular && styles.ButtonTextRegularStyle,
                isButtonMedium && styles.ButtonTextMediumStyle,
                isButtonLarge && APP_STYLES.ButtonTextLarge,
                //align text
                alignTextCenter && APP_STYLES.textCenter,
                alignTextRight && APP_STYLES.alignTextRight,
                //text colors
                isTextColor2&&APP_STYLES.textColor2,
                isDarkGray && APP_STYLES.textDarkGray,
                isGray && APP_STYLES.textGray,
                isLightGray && APP_STYLES.textLightGray,
                isWhite && APP_STYLES.textWhite,
                isPrimaryColor && APP_STYLES.textPrimaryColor,
                isSecondaryColor && APP_STYLES.textSecondaryColor,
                isForthColor && APP_STYLES.textForthColor,

                //others
                isUnderlined && APP_STYLES.textUnderlined,
                isBoldFont && APP_STYLES.fontBold,
                isMediumFont && APP_STYLES.fontMedium,
                isRegularFont && APP_STYLES.fontRegular,
                isLightFont && APP_STYLES.fontLight,
                style,]}
            {...props}
        >
            {children}
        </Text>
    );
}




const styles = StyleSheet.create({
    xxlTitleStyle: {
        ...APP_STYLES.h1
    },
    xlTitleStyle: {
        ...APP_STYLES.h2
    },
    largeTitleStyle: {
        ...APP_STYLES.h3
    },
    mediumTitleStyle: {
        ...APP_STYLES.h4
    },
    smallTitleStyle: {
        ...APP_STYLES.h5
    },
    tinyTitleStyle: {
        ...APP_STYLES.h6,
    },
    largeTextStyle: {
        ...APP_STYLES.textLarge
    },
    mediumTextStyle: {
        ...APP_STYLES.textMedium
    },
    regularTextStyle: {
        ...APP_STYLES.textRegular
    },
    smallTextStyle: {
        ...APP_STYLES.textSmall
    },
    tinyTextStyle: {
        ...APP_STYLES.textTiny
    },
    inputTitleStyle: {
        ...APP_STYLES.textRegular,
        ...APP_STYLES.fontBold,
        //...appStyles.tex
    },
    ButtonTextRegularStyle: {
        ...APP_STYLES.ButtonRegular,
    },
    ButtonTextMediumStyle: {
        ...APP_STYLES.ButtonMedium,
    },

});

