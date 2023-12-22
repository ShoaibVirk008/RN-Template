import React, { useRef, useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Animated, Platform } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, fontSizes, appFonts, sizes, appIcons, appStyles, HelpingMethods } from '../../services';
import RNPickerSelect from 'react-native-picker-select'
import * as Icons from '../icons';
import * as TextInputs from '../textInput';
import Wrapper from '../wrapper';
import Text from '../text';
import * as  Spacer from '../spacer';

export const Primary = ({
    onDonePress, containerStyle, data, title, onChange,
    placeholder, error, value, itemKey,
    left, customIconLeft, iconSizeLeft, iconColorLeft,
    iconStyleLeft, iconNameLeft, mainContainerStyle, iconTypeLeft,
    titleStatic
}) => {

    const placeholderObject = {
        label: placeholder,
        value: 'placeholder',
        color: '#909090',
    }

    const [titleMarginBottom] = useState(new Animated.Value(value ? height(6) : 0))
    //const [titleSize] = useState(new Animated.Value(fontSizes.regular))
    const detaultTitleMarginBottom=height(4.5)
    const FocusedTitleMarginBottom = detaultTitleMarginBottom
    //const [titleMarginBottom, setTitleMarginBottom] = useState(0)
    //const [titleSize, setTitleSize] = useState(fontSizes.input)
    const moveTitleUp = () => {
        Animated.timing(titleMarginBottom, {
            toValue: detaultTitleMarginBottom,
            duration: 250,
            speed: 50,
            useNativeDriver: false
        }).start();
    };
    const moveTitleDown = () => {
        Animated.timing(titleMarginBottom, {
            toValue: 0,
            duration: 250,
            speed: 50,
            useNativeDriver: false
        }).start();
    };
    const onChangeValue = (value) => {
        value === 'placeholder' ? moveTitleDown() : moveTitleUp()
    }
    return (
        <Wrapper
            style={[{ marginHorizontal: sizes.marginHorizontal }, mainContainerStyle]}
        >
            {/* <ComponentWrapper>
                <InputTitle>{title}</InputTitle>
            </ComponentWrapper>
            <Spacer height={sizes.TinyMargin} /> */}
            {
                    titleStatic ?
                        <>
                            <Text isInputTitle>{titleStatic}</Text>
                        </>

                        :
                        null
                }
            <Wrapper style={[appStyles.inputContainerUnderLined, {
                //borderRadius: sizes.b,
                borderBottomWidth: 1,
                borderBottomColor: colors.appColor1,
                marginHorizontal: 0
            }, containerStyle]}>
                {
                    left ?
                        left
                        :
                        customIconLeft ?
                            <Wrapper style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor3} containerStyle={iconStyleLeft} />
                            </Wrapper>
                            :
                            iconNameLeft ?
                                <Wrapper style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} iconStyle={iconStyleLeft} />
                                </Wrapper>
                                :
                                null
                }
                <Wrapper flex={8}>
                    <Wrapper isAbsolute style={{ top: 0, bottom: 0, ...appStyles.center, backgroundColor: 'transparet', }}>
                        <Wrapper style={{ marginBottom: value ? FocusedTitleMarginBottom : titleMarginBottom }}>
                            <Text isInputTitle>{title}</Text>
                        </Wrapper>
                    </Wrapper>
                    <RNPickerSelect
                        onDonePress={onDonePress}
                        onValueChange={(value, index) => {
                            onChangeValue(value, index)
                            onChange ? onChange(value, index) : null;
                        }}
                        value={value}
                        itemKey={itemKey}
                        items={data}
                        placeholder={placeholderObject}
                        useNativeAndroidPickerStyle={false}
                        pickerProps={{ mode: 'dropdown' }}
                        //  pickerProps={{ mode: 'dropdown',overflow: 'hidden', style: { overflow: 'hidden' } }}
                        // pickerProps={{ style: { height: 214, overflow: 'hidden' } }}
                        style={{
                            //width: width(100),
                            ...{
                                //...PickerPrimaryStyles,
                                inputIOS: {
                                    ...PickerPrimaryStyles.inputIOS,
                                    paddingTop: title ? height(1.5) : null,
                                },
                                inputAndroid: {
                                    ...PickerPrimaryStyles.inputAndroid,
                                    paddingTop: title ? height(2.5) : null,
                                }
                            },
                            //paddingTop: title ? Platform.OS === 'ios' ? height(1.5) : height(2.5) : null,
                            iconContainer: {
                                top: height(3.5),
                                right: 0,
                            },
                        }}
                        Icon={() =>
                            <Icon name='chevron-thin-down' type='entypo' size={totalSize(1.5)} color={colors.appColor1} />
                            // <CustomIcon
                            //     icon={appIcons.dropdown_normal}
                            //     size={totalSize(2)}
                            // />
                        }
                    />
                </Wrapper>
            </Wrapper>
            {
                error ?
                    // <AbsoluteWrapper animation="shake" style={{ bottom: 0, right: sizes.marginHorizontal, left: 0, }}>
                    //     <SmallText style={[{ color: colors.error, textAlign: 'right' }]}>{error}</SmallText>
                    // </AbsoluteWrapper>
                    <Wrapper style={{}} animation="shake">
                        <Spacer isTiny />
                        <Icons.WithText
                            iconName="alert-circle-outline"
                            //title="New"
                            text={error}

                            tintColor={colors.error}
                            iconSize={sizes.icons.tiny}
                            textStyle={[{ fontSize: fontSizes.small }]}
                        />
                    </Wrapper>
                    :
                    null
            }
        </Wrapper>
    );
}

const PickerPrimaryStyles = StyleSheet.create({
    inputIOS: {
        fontSize: fontSizes.medium,
        fontFamily: appFonts.regular,
        //paddingVertical: height(2),
        height: sizes.inputHeight,
        paddingHorizontal: 0,
        marginHorizontal: 0,

        //borderWidth: 1,
        //borderColor: colors.appTextColor5,
        //  borderRadius: 5,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: fontSizes.medium,
        fontFamily: appFonts.regular,
        //paddingVertical: height(2),
        height: sizes.inputHeight,
        paddingHorizontal: 0,
        marginHorizontal: 0,
        //paddingTop: 2,
        // borderWidth: 1,
        // borderColor: colors.appTextColor5,
        //borderRadius: 5,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
        //backgroundColor:'red'
    },
});


export function Searchable({ placeholder, error, titleStyle, containerStyle, iconColor, inputBorderStyle, data, value, inputStyle, onPressItem, onPressAdd, title, onChangeText, right, left, tintColor, onFocus, onBlur }) {
    const searchInputRef = useRef(null)
    const [isFocused, setFocused] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const handleOnFocus = () => {
        HelpingMethods.handleAnimation()
        setFocused(true)
    }
    const handleOnBlur = () => {
        HelpingMethods.handleAnimation()
        setFocused(false)
        setSearchQuery('')
    }
    const handleOnPressItem = () => {
        HelpingMethods.handleAnimation()
        handleOnBlur()
        searchInputRef.current.blur()
        setSearchQuery('')
    }
    const getData = () => {
        let tempData = []
        if (searchQuery) {
            let query = searchQuery.toLowerCase()
            tempData = data?.filter(item => {
                return (
                    item.label.toLowerCase().includes(query)
                )
            })
        } else {
            tempData = data
        }
        return tempData
        //console.log('Searched options===>',tempData)
    }

    return (
        <Wrapper>
            <TextInputs.Underlined
                containerStyle={containerStyle}
                title={title}
                titleStyle={titleStyle}
                inputBorderStyle={inputBorderStyle}
                inputRef={searchInputRef}
                placeholder={isFocused ? "Type Here" : placeholder}
                placeholderTextColor={tintColor}
                value={value ? value : searchQuery ? searchQuery : ''}
                onFocus={() => {
                    handleOnFocus();
                    onFocus && onFocus()
                }}
                onBlur={() => {
                    handleOnBlur();
                    onBlur && onBlur()
                }}
                onChangeText={text => {
                    setSearchQuery(text);
                    onChangeText ? onChangeText(text) : null
                }}
                inputStyle={inputStyle}
                error={error}
                right={
                    right ? right :
                        <Icon name="caret-down-sharp" type="ionicon" size={totalSize(1.5)} color={[iconColor, colors.appColor1]} />
                }
                left={left}
            />
            {
                isFocused &&
                <Wrapper marginHorizontalBase style={{ height: "auto", backgroundColor: colors.appBgColor2, marginBottom: sizes.smallMargin }}>
                    {
                        getData().length ?

                            <>
                                <Spacer isTiny />
                                {
                                    getData().map((item, index) => {
                                        return (
                                            <Wrapper marginHorizontalBase key={index + ''} style={[appStyles.marginHorizontalSmall]}>
                                                <TouchableOpacity onPress={() => onPressItem(item, index, handleOnPressItem())} activeOpacity={1} style={{ paddingVertical: sizes.TinyMargin }}>
                                                    <Text isMedium style={[appStyles.textMedium]}>{item.label}</Text>
                                                </TouchableOpacity>
                                            </Wrapper>
                                        )
                                    })
                                }
                            </>
                            :
                            <Wrapper style={{ flex: 1, ...appStyles.center }}>
                                <Text isRegular isGray >No Data Available</Text>
                            </Wrapper>
                    }

                </Wrapper>
            }
        </Wrapper >
    )
}

