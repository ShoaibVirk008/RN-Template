import React from 'react'
import { APP_STYLES, APP_COLORS, APP_SIZES,responsiveHeight,responsiveWidth,responsiveFontSize } from "../../services"

import * as Buttons from '../buttons/Buttons'
import Wrapper from '../wrapper/Wrapper'

export function Primary  ({ data, onPress, disabled, containerStyle, buttonStyle, textStyle, keyName }) {
    return (

        <Wrapper flexDirectionRow style={[containerStyle]}>
            {
                data.map((item, index) => {
                    return (
                        <Buttons.ColoredSmall
                            disabled={!onPress || disabled}
                            iconName={onPress && "close"}
                            //iconType="ionicon"
                            iconSize={responsiveFontSize(2)}
                            iconColor={APP_COLORS.appTextColor1}
                            onPress={() => onPress(item, index)}
                            direction="row-reverse"
                            text={keyName ? item[keyName] : item}
                            buttonStyle={[{ paddingHorizontal: APP_SIZES.marginHorizontal / 6, marginRight: APP_SIZES.marginHorizontal / 4, marginBottom: APP_SIZES.marginVertical / 2, paddingVertical: APP_SIZES.TinyMargin, backgroundColor: APP_COLORS.appBgColor2, borderRadius: 100 }, buttonStyle]}
                            textStyle={[APP_STYLES.textSmall, textStyle]}
                        />
                    )
                })
            }
        </Wrapper>

    )
}