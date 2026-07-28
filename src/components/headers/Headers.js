import React from 'react'
import { APP_STYLES, APP_SVGS, APP_COLORS, fontSize, responsiveFontSize, responsiveHeight, responsiveWidth, APP_SIZES, useSizes } from '../../services'
//import {Icons, Wrapper, Text } from '..'
import { goBack } from '../../navigation/RootNavigation'
import * as Icons from '../icons/Icons';
import Wrapper from '../wrapper/Wrapper';
import Text from '../text/Text';
import { Pressable } from 'react-native';
import Spacer from '../spacer/Spacer';
import * as StatusBars from '../statusBars/StatusBars';


// export const Primary = ({ onBackPress, title, right, left, showBackArrow,shadow,titleStyle,titleContainerStyle,containerStyle }) => {
//     return (
//         <Wrapper style={[appStyles.headerStyle,appStyles.justifyContentFlexstart, {  paddingTop: sizes.statusBarHeight*1.25,backgroundColor:'red' },shadow&&appStyles.shadow,containerStyle]}>
//             <Wrapper flexDirectionRow justifyContentSpaceBetween>
//                 <Wrapper isAbsolute style={[appStyles.center, { right: 0, left: 0, },titleContainerStyle]}>
//                     <Text style={[appStyles.headerTitleStyle,appStyles.textCenter,titleStyle]}>{title}</Text>
//                 </Wrapper>
//                 {
//                     left ? left :
//                         showBackArrow ?
//                             <Icons.Back
//                                 onPress={onBackPress ?onBackPress : goBack}
//                                 style={[appStyles.paddingHorizontalSmall,appStyles.paddingVerticalTiny,]}
//                             />
//                             :
//                             null
//                 }
//                 {right ? right : null}
//             </Wrapper>
//         </Wrapper>
//     )
// }

export function Primary  ({
    onBackPress, search, title, right, searchPress,
    left, titleContainerStyle, centerTitle, tintColor,
    containerStyle, headerTitle, alignTitleLeft, showBackArrow,
    invertColors, titleStyle, leftContainerStyle, rightContainerStyle, shadow, auth }) {

    const { statusBarHeight, headerHeight, } = useSizes()
    const defaultTintColor = !invertColors ? APP_COLORS.appTextColor6 : APP_COLORS.appColor1
    const defaultBackgroundColor = !invertColors ? APP_COLORS.appColor1 : APP_COLORS.appBgColor1
    return (
        <Wrapper style={[
            APP_STYLES.headerStyle,
            { height: headerHeight,
             backgroundColor: defaultBackgroundColor, borderBottomWidth: 0, paddingTop: statusBarHeight, paddingBottom: responsiveHeight(1) }, shadow && APP_STYLES.shadowLight, containerStyle]}>
            <StatusBars.Light />
            <Wrapper flex={1} flexDirectionRow alignItemsCenter style={{}}>
                {/* <Wrapper isAbsolute
                    style={[
                        { right: 0, left: 0, backgroundColor: 'green', },
                        alignTitleLeft ?
                            {
                                paddingLeft: responsiveWidth(17.5),
                                paddingRight: sizes.marginHorizontal
                            }
                            :
                            appStyles.center,
                        titleContainerStyle]}>
                    {
                        headerTitle ? headerTitle :
                            <Text isTinyTitle numberOfLines={1} style={{ color: tintColor ? tintColor : defaultTintColor }}>{title}</Text>
                    }
                </Wrapper> */}
                <Wrapper flex={1.5} style={[
                    // { backgroundColor: 'red' },
                    leftContainerStyle]}>
                    {
                        left ? left :
                            showBackArrow ?
                                <Pressable
                                    style={[{ flex: 1 }, APP_STYLES.center]}
                                    onPress={onBackPress ? onBackPress : goBack}
                                >
                                    <Icons.Back
                                        //onPress={onBackPress}
                                        //onPress={onBackPress ? onBackPress : goBack}
                                        // style={{ marginLeft: sizes.marginHorizontal }}
                                        color={tintColor ? tintColor : defaultTintColor}
                                    />
                                </Pressable>
                                :
                                null
                    }
                </Wrapper>
                <Wrapper flex={7}
                    style={[
                        // { backgroundColor: 'green', },
                        alignTitleLeft ?
                            APP_STYLES.alignItemsFlexStart
                            :
                            APP_STYLES.alignItemsCenter,
                        titleContainerStyle]}>
                    {
                        headerTitle ? headerTitle :
                            <Text alignTextCenter style={[APP_STYLES.headerTitleStyle, { color: tintColor ? tintColor : defaultTintColor, fontSize: !auth ? responsiveFontSize(18) : responsiveFontSize(18) }, titleStyle]}>{title}</Text>
                    }
                </Wrapper>

                {/* {right ?
                    right
                    :
                    <Wrapper flex={1.5}></Wrapper>
                } */}
                <Wrapper flex={1.5} style={rightContainerStyle}>
                    {right ?
                        right
                        :
                        <></>
                    }
                </Wrapper>

            </Wrapper>
        </Wrapper>
    )
}

export function Auth  ({ ...PrimaryProps })  {
    return (
        <Wrapper animation={'slideInDown'}>
            <Primary
                showBackArrow
                {...PrimaryProps}
            />
            <Wrapper alignItemsCenter backgroundColor={APP_COLORS.appColor1} style={{ borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }}>
                <Spacer isBasic />
                <APP_SVGS.logo_white height={responsiveHeight(10)} width={responsiveWidth(80)} />
                <Spacer isDoubleBase />
                <Spacer isBasic />
            </Wrapper>
        </Wrapper>
    )
}