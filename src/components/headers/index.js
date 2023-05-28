import React from 'react'
import { appStyles, colors, fontSize, sizes } from '../../services'
//import {Icons, Wrapper, Text } from '..'
import { goBack } from '../../navigation/rootNavigation'
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import {height,totalSize} from 'react-native-dimension'
import { Pressable } from 'react-native';


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

export const Primary = ({
    onBackPress, search, title, right, searchPress,
    left, titleContainerStyle, centerTitle, tintColor,
    containerStyle, headerTitle, alignTitleLeft, showBackArrow,
    invertColors, titleStyle, leftContainerStyle, rightContainerStyle,shadow,auth }) => {

    const defaultTintColor = !invertColors ? colors.appTextColor3 : colors.appTextColor6
    const defaultBackgroundColor = !invertColors ? colors.appBgColor1 : colors.appBgColor6
    return (
        <Wrapper style={[appStyles.headerStyle, { backgroundColor: defaultBackgroundColor, borderBottomColor: defaultTintColor + '20', paddingTop: sizes.statusBarHeight * 1, paddingBottom: height(1) },shadow&&appStyles.shadowLight, containerStyle]}>
            <Wrapper flex={1} flexDirectionRow alignItemsCenter style={{  }}>
                {/* <Wrapper isAbsolute
                    style={[
                        { right: 0, left: 0, backgroundColor: 'green', },
                        alignTitleLeft ?
                            {
                                paddingLeft: width(17.5),
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
                <Wrapper flex={1.5}  style={[
                    // { backgroundColor: 'red' },
                    leftContainerStyle]}>
                    {
                        left ? left :
                            showBackArrow ?
                                <Pressable
                                    style={[{ flex: 1},appStyles.center]}
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
                            appStyles.alignItemsFlexStart
                            :
                            appStyles.alignItemsCenter,
                        titleContainerStyle]}>
                    {
                        headerTitle ? headerTitle :
                            <Text alignTextCenter  style={[appStyles.headerTitleStyle,{ color: tintColor ? tintColor : defaultTintColor ,fontSize:!auth?totalSize(2.4):totalSize(2.8)}, titleStyle]}>{title}</Text>
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