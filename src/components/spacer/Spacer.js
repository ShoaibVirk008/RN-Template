import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { APP_SIZES } from '../../utilities';
import { useSizes } from '../../helper';

const TempSpacer = ({ style, width, height, }) => {
    return (
        <View style={[{ height: height, width: width }, style]} />
    );
}

export default function Spacer ({ horizontal, height, width, style, isBasic, isSmall, isTiny, isMedium, isDoubleBase, isStatusBarHeigt, isHeaderHeight, isBottomTabBarHeight })  {
    const { statusBarHeight, headerHeight } = useSizes()
    const tempSize = isTiny ? APP_SIZES.TinyMargin :
        isSmall ? APP_SIZES.smallMargin :
            isBasic ? APP_SIZES.baseMargin :
                isMedium ? APP_SIZES.mediumMargin :
                    isDoubleBase ? APP_SIZES.doubleBaseMargin :
                        isStatusBarHeigt ? statusBarHeight :
                            isHeaderHeight ? headerHeight :
                                isBottomTabBarHeight ? APP_SIZES.tabBarHeight : APP_SIZES.baseMargin
    const defaultHeight = !horizontal ? height || tempSize : 0
    const defaultWidth = horizontal ? tempSize : width || 0
    return (
        <TempSpacer height={defaultHeight} width={defaultWidth} style={style} />
    );
}
