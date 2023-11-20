import { useMemo } from 'react';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { height } from 'react-native-dimension';
import { responsiveHeight } from '../../utilities';


export default function () {
    const insets = useSafeAreaInsets();

    const statusBarHeight = useMemo(() => insets.top, [insets])
    const _headerHeight = Platform.select({
        ios: responsiveHeight(7),
        android: responsiveHeight(8)
      })
    const headerHeight=_headerHeight+statusBarHeight

    return {
        statusBarHeight,
        headerHeight
    }
}