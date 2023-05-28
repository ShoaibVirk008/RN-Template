import React, { useEffect, useState } from 'react';
import {
  View,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import { appStyles, colors, sizes } from '../../services';
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
// import { Icons, Wrapper ,Text} from '..';
import { Icon } from '@rneui/base';


export default function AnimatedGroupButton({
  onPressButton,
  data,
  activeButtonStyle,
  inActiveButtonStyle,
  activeTextStyle,
  inActiveTextStyle,
  indentifier,
  //scrollViewRef,
  containerStyle,
  iconSize,
  activeButtonContent,
  activeButtonForceStyle,
  initalIndex,
  disableAutoSwipe,
  activeTintColor,
  inActiveTintColor,
  scrollEnabled,
  iconStyle,
  hideLabel,
  inActiveButtonActiveStyle
}) {


  const scrollViewRef = React.useRef();
  const [activeTabTranslateX] = useState(new Animated.Value(0))
  const [activeTabWidth] = useState(new Animated.Value(0))
  const [activeTabHeight] = useState(new Animated.Value(0))
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [scrollViewWrapperWidth, setScrollViewWrapperWidth] = useState(0)

  //handle scroll
  useEffect(() => {
    scrollEnabled != false && scrollViewRef.current?.scrollTo({
      // index: initalIndex,
      x: initalIndex * scrollViewWrapperWidth,
      animated: true,
      viewPosition: 0.5
    })
  }, [initalIndex])


  const handleTabSlide = (x, height, width) => {
    //console.log(x, height, width);
    Animated.timing(activeTabTranslateX, {
      toValue: x,
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(activeTabHeight, {
      toValue: height,
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(activeTabWidth, {
      toValue: width,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }
  const handleOnPress = async (item, key) => {
    setSelectedTabIndex(key)
    handleTabSlide(item.x, item.tabHeight, item.tabWidth)
  }

  // console.log('initalIndex < data.length:',initalIndex < data.length)
  if (initalIndex < data.length) {
  //console.log('!disableAutoSwipe && selectedTabIndex != initalIndex && data[initalIndex].x >= 0',(!disableAutoSwipe && selectedTabIndex != initalIndex && data[initalIndex].x >= 0))
  // console.log('!disableAutoSwipe ',(!disableAutoSwipe))
  // console.log('selectedTabIndex != initalIndex ',(selectedTabIndex != initalIndex))
  // console.log('data[initalIndex].x >= 0',(data[initalIndex].x >= 0))

    if (!disableAutoSwipe && selectedTabIndex != initalIndex && data[initalIndex].x >= 0) {
      handleOnPress(data[initalIndex], initalIndex)
    }
  }

  const defaultIconSize = totalSize(2)
  const defaultActiveTintColor = activeTintColor ? activeTintColor : appStyles.textPrimaryColor.color
  const defaultInactiveTintColor = inActiveTintColor ? inActiveTintColor : colors.appTextColor5

  return (
    <View style={[styles.animatedGroupButtonMainContainer, containerStyle]}>
      <View
        onLayout={event => {
          // (item.x = event.nativeEvent.layout.x),
          //   (item.tabHeight = event.nativeEvent.layout.height),
          //   (item.tabWidth = event.nativeEvent.layout.width)
          setScrollViewWrapperWidth(event.nativeEvent.layout.height)

        }}
      >
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={scrollEnabled}
          keyboardShouldPersistTaps='always'
        >
          {data.map((item, key) => {
            const { icon, iconName, iconType } = item
            const isSelectedButton = key === selectedTabIndex
            return (
              <TouchableHighlight
                key={key}
                // activeOpacity={1}
                //underlayColor={colors.appBgColor3 + '80'}
                underlayColor={colors.transparent}
                onLayout={event => {
                  (item.x = event.nativeEvent.layout.x),
                    (item.tabHeight = event.nativeEvent.layout.height),
                    (item.tabWidth = event.nativeEvent.layout.width)
                  isSelectedButton && (initalIndex < data.length)
                    ? handleOnPress(data[initalIndex], initalIndex)
                    : null;
                }}
                style={[
                  {
                    ...styles.animatedGroupButtonInactivatedButton,
                    borderColor:
                      isSelectedButton ? 'transparent' : 'lightgray',
                    marginLeft: key === 0 ? sizes.marginHorizontal : 0,
                    marginRight: sizes.marginHorizontal / 2
                  },
                  inActiveButtonStyle,
                  isSelectedButton && inActiveButtonActiveStyle
                ]}
                onPress={async () => {
                  handleOnPress(item, key);
                  onPressButton && setTimeout(() => {
                    onPressButton(item, key,)
                  }, disableAutoSwipe ? 250 : 0);
                }

                }>
                <Wrapper flexDirectionRow>
                  {
                    !hideLabel ?
                      <Text
                      isRegular
                        style={[
                          styles.animatedGroupButtonInactivatedButtonTxt,
                          selectedTabIndex === key ? activeTextStyle : inActiveTextStyle,
                        ]}>
                        {indentifier ? item[indentifier] : item.label}
                        {/* {indentifier} */}
                      </Text>
                      :
                      null
                  }
                  {

                    icon ?
                      <Icons.Custom
                        icon={icon}
                        color={initalIndex === key ? defaultActiveTintColor : defaultInactiveTintColor}
                        size={iconSize ? iconSize : defaultIconSize}
                        style={[!hideLabel && styles.iconStyle, iconStyle]}
                      />
                      :
                      iconName ?
                        <Icon
                          name={iconName}
                          type={iconType}
                          color={initalIndex === key ? defaultActiveTintColor : defaultInactiveTintColor}
                          size={iconSize ? iconSize : defaultIconSize}
                          iconStyle={[!hideLabel && styles.iconStyle, iconStyle]}
                        />
                        :
                        null

                  }
                </Wrapper>
              </TouchableHighlight>
            );
          })}
          {
            initalIndex < data.length?
              <Animated.View
                style={[
                  !activeButtonForceStyle && styles.animatedGroupButtonActivatedButton,
                  {
                    height: activeTabHeight,
                    width: activeTabWidth,
                    transform: [
                      {
                        translateX: activeTabTranslateX,
                      },
                    ],
                  },
                  activeButtonStyle,
                  activeButtonForceStyle
                ]}>
                {
                  activeButtonContent ?
                    activeButtonContent :
                    <Wrapper flexDirectionRow>

                      {
                        !hideLabel ?
                          <Text
                          isRegular
                            style={[
                              styles.animatedGroupButtonActivatedButtonTxt,
                              activeTextStyle,
                            ]}>
                            {indentifier ? data[selectedTabIndex][indentifier] : data[selectedTabIndex].label}
                          </Text>
                          :
                          null
                      }
                      {
                        data[selectedTabIndex].icon ?
                          <Icons.Custom
                            icon={data[selectedTabIndex].icon}
                            color={activeTintColor ? activeTintColor : appStyles.textWhite.color}
                            size={iconSize ? iconSize : defaultIconSize}
                            style={[!hideLabel && styles.iconStyle, iconStyle]}
                          />
                          :
                          data[selectedTabIndex].iconName ?
                            <Icon
                              name={data[selectedTabIndex].iconName}
                              type={data[selectedTabIndex].iconType}
                              color={activeTintColor ? activeTintColor : appStyles.textWhite.color}
                              size={iconSize ? iconSize : defaultIconSize}
                              iconStyle={[!hideLabel && styles.iconStyle, iconStyle]}
                            />
                            :
                            null
                      }
                    </Wrapper>
                }

              </Animated.View>
              :
              null
          }
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  // Animated Button Group styles
  animatedGroupButtonMainContainer: {

  },
  animatedGroupButtonInactivatedButton: {
    borderRadius: sizes.buttonRadius,
    // height: height(5),
    //width: width(30),
    paddingVertical: sizes.marginVertical / 1.5,
    paddingHorizontal: sizes.marginHorizontal,
    marginHorizontal: width(1),
    backgroundColor: colors.appBgColor3,
    ...appStyles.center,
  },
  animatedGroupButtonInactivatedButtonTxt: {
    //color: colors.appTextColor4
  },
  animatedGroupButtonActivatedButton: {
    position: "absolute",
    top: 0,
    backgroundColor: colors.appColor1,
    borderRadius:  sizes.buttonRadius,
    ...appStyles.center,
  },
  animatedGroupButtonActivatedButtonTxt: {
    ...appStyles.textWhite
  },
  iconStyle: { marginLeft: sizes.marginHorizontal / 4 }
})