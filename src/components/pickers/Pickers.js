import React, { useRef, useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Animated, Platform } from 'react-native'
import { Icon } from '@rneui/base';
import { APP_COLORS, APP_FONTS, APP_SIZES, APP_ICONS, APP_STYLES, responsiveHeight, responsiveWidth, responsiveFontSize } from '../../utilities';
import { HelpingMethods } from '../../helper';
import RNPickerSelect from 'react-native-picker-select'
import * as Icons from '../icons/Icons';
import * as TextInputs from '../textInput/TextInput';
import Wrapper from '../wrapper/Wrapper';
import Text from '../text/Text';
import Spacer from '../spacer/Spacer';

export function Primary  ({
    onDonePress, containerStyle, data, title, onChange,
    placeholder, error, value, itemKey,
    left, customIconLeft, iconSizeLeft, iconColorLeft,
    iconStyleLeft, iconNameLeft, mainContainerStyle, iconTypeLeft,
    titleStatic
})  {

    const placeholderObject = {
        label: placeholder,
        value: 'placeholder',
        color: '#909090',
    }

    const [titleMarginBottom] = useState(new Animated.Value(value ? responsiveHeight(6) : 0))
    //const [titleSize] = useState(new Animated.Value(fontSizes.regular))
    const detaultTitleMarginBottom=responsiveHeight(4.5)
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
            style={[{ marginHorizontal: APP_SIZES.marginHorizontal }, mainContainerStyle]}
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
            <Wrapper style={[APP_STYLES.inputContainerUnderLined, {
                //borderRadius: sizes.b,
                borderBottomWidth: 1,
                borderBottomColor: APP_COLORS.appColor1,
                marginHorizontal: 0
            }, containerStyle]}>
                {
                    left ?
                        left
                        :
                        customIconLeft ?
                            <Wrapper style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : APP_SIZES.icons.medium} color={iconColorLeft ? iconColorLeft : APP_COLORS.appTextColor3} containerStyle={iconStyleLeft} />
                            </Wrapper>
                            :
                            iconNameLeft ?
                                <Wrapper style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : APP_SIZES.icons.medium} color={iconColorLeft ? iconColorLeft : APP_COLORS.appTextColor1} iconStyle={iconStyleLeft} />
                                </Wrapper>
                                :
                                null
                }
                <Wrapper flex={8}>
                    <Wrapper isAbsolute style={{ top: 0, bottom: 0, ...APP_STYLES.center, backgroundColor: 'transparet', }}>
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
                            //width: responsiveWidth(100),
                            ...{
                                //...PickerPrimaryStyles,
                                inputIOS: {
                                    ...PickerPrimaryStyles.inputIOS,
                                    paddingTop: title ? responsiveHeight(1.5) : null,
                                },
                                inputAndroid: {
                                    ...PickerPrimaryStyles.inputAndroid,
                                    paddingTop: title ? responsiveHeight(2.5) : null,
                                }
                            },
                            //paddingTop: title ? Platform.OS === 'ios' ? responsiveHeight(1.5) : responsiveHeight(2.5) : null,
                            iconContainer: {
                                top: responsiveHeight(3.5),
                                right: 0,
                            },
                        }}
                        Icon={() =>
                            <Icon name='chevron-thin-down' type='entypo' size={responsiveFontSize(1.5)} color={APP_COLORS.appColor1} />
                            // <CustomIcon
                            //     icon={appIcons.dropdown_normal}
                            //     size={responsiveFontSize(2)}
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

                            tintColor={APP_COLORS.error}
                            iconSize={APP_SIZES.icons.tiny}
                            textStyle={[{ fontSize: APP_SIZES.fonts.small }]}
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
        fontSize: APP_SIZES.fonts.medium,
        fontFamily: APP_FONTS.regular,
        //paddingVertical: responsiveHeight(2),
        height: APP_SIZES.inputHeight,
        paddingHorizontal: 0,
        marginHorizontal: 0,

        //borderWidth: 1,
        //borderColor: colors.appTextColor5,
        //  borderRadius: 5,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: APP_SIZES.fonts.medium,
        fontFamily: APP_FONTS.regular,
        //paddingVertical: responsiveHeight(2),
        height: APP_SIZES.inputHeight,
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
                        <Icon name="caret-down-sharp" type="ionicon" size={responsiveFontSize(1.5)} color={[iconColor, APP_COLORS.appColor1]} />
                }
                left={left}
            />
            {
                isFocused &&
                <Wrapper marginHorizontalBase style={{ height: "auto", backgroundColor: APP_COLORS.appBgColor2, marginBottom: APP_SIZES.smallMargin }}>
                    {
                        getData().length ?

                            <>
                                <Spacer isTiny />
                                {
                                    getData().map((item, index) => {
                                        return (
                                            <Wrapper marginHorizontalBase key={index + ''} style={[APP_STYLES.marginHorizontalSmall]}>
                                                <TouchableOpacity onPress={() => onPressItem(item, index, handleOnPressItem())} activeOpacity={1} style={{ paddingVertical: APP_SIZES.TinyMargin }}>
                                                    <Text isMedium style={[APP_STYLES.textMedium]}>{item.label}</Text>
                                                </TouchableOpacity>
                                            </Wrapper>
                                        )
                                    })
                                }
                            </>
                            :
                            <Wrapper style={{ flex: 1, ...APP_STYLES.center }}>
                                <Text isRegular isGray >No Data Available</Text>
                            </Wrapper>
                    }

                </Wrapper>
            }
        </Wrapper >
    )
}

