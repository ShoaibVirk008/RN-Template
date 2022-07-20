import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, Animated, Platform } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, sizes, fontSize } from '../../services';
import { Icons, Spacers, Texts, Wrappers } from '..';
const Colored = ({
    iconNameRight, inputRef, iconTypeRight, returnKeyLabel,
    returnKeyType, onSubmitEditing, onPress,
    maxLength, autoFocus, title, isButton,
    duration, titleStyle, placeholder, editable,
    animation, multiline, onFocus, onBlur,
    onChangeText, secureTextEntry, value,
    iconColorRight, iconSizeRight, containerStyle,
    inputContainerStyle, onPressIconRight, inputStyle,
    right, keyboardType, iconStyleRight, error,
    left, customIconLeft, iconNameLeft, iconTypeLeft, iconSizeLeft,
    iconColorLeft, iconStyleLeft, onPressIconLeft
}) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            disabled={!onPress}
            style={[{ marginHorizontal: sizes.marginHorizontal }, containerStyle]}>
            {
                title ?
                    <Wrappers.Primary style={{ marginHorizontal: 0 }}>
                        <Texts.Input style={[{}, titleStyle]}>{title}</Texts.Input>
                        <Spacers.Tiny />
                    </Wrappers.Primary>
                    :
                    null
            }
            <Wrappers.Primary style={[appStyles.inputContainerColored, {
                borderRadius: sizes.inputRadius,
                backgroundColor: colors.appBgColor2,
                marginHorizontal: 0
            }, inputContainerStyle]}>
                {
                    left ?
                        left
                        :
                        customIconLeft ?
                            <View style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal }}>
                                <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                            </View>
                            :
                            iconNameLeft ?
                                <View style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal }}>
                                    <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor4} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                                </View>
                                :
                                null
                }
                <View style={{ flex: 1 }}>
                    {
                        onPress ?
                            <Wrappers.Component style={{ height: height(7), justifyContent: 'center', }}>
                                <Texts.Medium style={value ? null : appStyles.textGray}>{value ? value : placeholder}</Texts.Medium>
                            </Wrappers.Component>
                            :
                            <TextInput
                                ref={inputRef}
                                onChangeText={onChangeText}
                                value={value}
                                placeholder={placeholder}
                                editable={editable}
                                autoFocus={autoFocus}
                                returnKeyLabel={returnKeyLabel}
                                returnKeyType={returnKeyType}
                                onSubmitEditing={onSubmitEditing}
                                multiline={multiline}
                                placeholderTextColor={'#21212180'}
                                keyboardType={keyboardType}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                secureTextEntry={secureTextEntry}
                                maxLength={maxLength}
                                style={[appStyles.inputField, { width: null, height: height(7), paddingHorizontal: sizes.marginHorizontal }, inputStyle]}
                            />
                    }
                </View>
                <View style={{}}>
                    {
                        right ?
                            right
                            :
                            iconNameRight ?
                                <View style={{ alignItems: 'center', marginRight: sizes.marginHorizontal }}>
                                    <Icon name={iconNameRight} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor5} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                                </View>
                                :
                                null
                    }
                </View>
            </Wrappers.Primary>
            {
                error ?
                    <Wrappers.Primary animation="shake">
                        <Spacers.Tiny />
                        <Texts.Small style={[{ color: colors.error, textAlign: 'right' }]}>{error}</Texts.Small>
                    </Wrappers.Primary>
                    :
                    null
            }
        </TouchableOpacity>
    );
}
const Bordered = ({
    onPress, iconContainerStyle, autoFocus,
    //right params
    right, iconNameRight, iconTypeRight, iconSizeRight, iconColorRight, iconStyleRight, onPressIconRight,
    //left params
    left, customIconLeft, iconNameLeft, iconTypeLeft, iconColorLeft, iconSizeLeft, iconStyleLeft, onPressIconLeft,
    //input params
    placeholder, placeholderTextColor, onFocus, onChangeText, secureTextEntry, value, containerStyle, inputStyle }) => {
    return (
        <TouchableOpacity
            disabled={!onPress}
            onPress={onPress}
            activeOpacity={1}
            style={[appStyles.inputContainerBorderd, {
                borderRadius: sizes.inputRadius,
                borderWidth: 1,
                borderColor: colors.appBgColor3
            }, containerStyle]}>
            {
                left ?
                    left
                    :
                    customIconLeft ?
                        <View style={[{ alignItems: 'center', marginLeft: sizes.marginHorizontal }, iconContainerStyle]}>
                            <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                        </View>
                        :
                        iconNameLeft ?
                            <View style={[{ alignItems: 'center', marginLeft: sizes.marginHorizontal }, iconContainerStyle]}>
                                <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appBgColor3} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                            </View>
                            :
                            null
            }
            <View style={{ flex: 1 }}>
                {
                    onPress ?
                        <Wrappers.Component style={[{ height: height(7), justifyContent: 'center', }, inputStyle]}>
                            <Texts.Medium style={value ? null : appStyles.textLightGray}>{value ? value : placeholder}</Texts.Medium>
                        </Wrappers.Component>
                        :
                        <TextInput
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            onFocus={onFocus}
                            autoFocus={autoFocus}
                            placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.appBgColor3}
                            secureTextEntry={secureTextEntry}
                            style={[appStyles.inputField, { width: null, height: height(7), paddingHorizontal: sizes.marginHorizontal / 2 }, inputStyle]}
                        />
                }
            </View>
            <View style={{}}>
                {
                    right ?
                        right
                        :
                        iconNameRight ?
                            <View style={{ alignItems: 'center', marginRight: sizes.marginHorizontal }}>
                                <Icon name={iconNameRight} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor5} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                            </View>
                            :
                            null
                }
            </View>
        </TouchableOpacity>
    );
}
const Underlined = ({
    onPress, inputRef, autoFocus, left, keyboardType, right, error,
    editable, titleStyle, title, maxLength, customIconLeft,
    iconNameLeft, multiline, iconNameRight, placeholderTextColor,
    iconTypeLeft, iconTypeRight, iconSizeLeft, iconSizeRight,
    iconColorLeft, iconColorRight, iconStyleLeft, iconStyleRight,
    onPressIconLeft, onPressIconRight, placeholder, onFocus, onBlur,
    onChangeText, secureTextEntry, value, containerStyle, inputContainerStyle,
    inputStyle, titleStatic, autoCapitalize, children, inputBorderStyle }) => {

    const [titleMarginBottom] = useState(new Animated.Value(0))
    //const [titleSize] = useState(new Animated.Value(fontSize.regular))
    const FocusedTitleMarginBottom = Platform.OS === 'ios' ? height(5) : height(5)
    //const [titleMarginBottom, setTitleMarginBottom] = useState(0)
    //const [titleSize, setTitleSize] = useState(fontSize.input)
    const moveTitleUp = () => {
        Animated.timing(titleMarginBottom, {
            toValue: height(5),
            duration: 250,
            speed: 50,
            useNativeDriver: false
        }).start();
        // Animated.spring(titleSize, {
        //     toValue: fontSize.small,
        //     duration: 250,
        //    // useNativeDriver: true
        // }).start();
    };
    const moveTitleDown = () => {
        Animated.timing(titleMarginBottom, {
            toValue: 0,
            duration: 250,
            speed: 50,
            useNativeDriver: false
        }).start();
        // Animated.spring(titleSize, {
        //     toValue: fontSize.regular,
        //     duration: 250,
        //   //  useNativeDriver: true
        // }).start();
    };
    const onFocusInput = () => {
        moveTitleUp()
    }
    const onBlurInput = () => {
        moveTitleDown()
    }
    return (
        <TouchableOpacity disabled={!onPress} activeOpacity={1} onPress={onPress}>
            <Wrappers.Primary style={[{ marginHorizontal: sizes.marginHorizontal }, containerStyle]}>
                {
                    titleStatic ?
                        <>
                            <Texts.Input>{titleStatic}</Texts.Input>
                        </>

                        :
                        null
                }
                <View style={[appStyles.inputContainerUnderLined, {
                    //borderRadius: sizes.b,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.appTextColor4,
                    marginHorizontal: 0
                }, inputBorderStyle]}>
                    {
                        left ?
                            left
                            :
                            customIconLeft ?
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
                                </View>
                                :
                                iconNameLeft ?
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                                    </View>
                                    :
                                    null
                    }
                    <View style={[{ flex: 7, justifyContent: 'center' }, inputContainerStyle]}>
                        <Wrappers.Absolute style={{ top: 0, bottom: 0, ...appStyles.center, backgroundColor: 'transparent', }}>
                            <Wrappers.Primary style={{ marginBottom: value ? FocusedTitleMarginBottom : titleMarginBottom }}>
                                <Texts.Input style={[titleStyle, { lineHeight: 16 }]}>{title}</Texts.Input>
                            </Wrappers.Primary>
                        </Wrappers.Absolute>
                        {
                            children ? children :
                                onPress ?
                                    <Wrappers.Primary style={{ height: height(7), justifyContent: 'center' }}>
                                        {
                                            value ?
                                                <Wrappers.Primary>
                                                    <Spacers.Spacer height={title ? Platform.OS === 'ios' ? height(1) : height(2) : 0} />
                                                    <Texts.Medium numberOfLines={1}>{value}</Texts.Medium>
                                                </Wrappers.Primary>
                                                :
                                                null
                                        }
                                    </Wrappers.Primary>
                                    :
                                    <TextInput
                                        ref={inputRef}
                                        onChangeText={onChangeText}
                                        value={value}
                                        keyboardType={keyboardType}
                                        placeholder={placeholder}
                                        autoFocus={autoFocus}
                                        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                                        onFocus={() => {
                                            onFocusInput();
                                            onFocus ? onFocus() : null
                                        }}
                                        onBlur={() => {
                                            onBlurInput(),
                                                onBlur ? onBlur() : null
                                        }}
                                        editable={editable}
                                        underlineColorAndroid="transparent"
                                        maxLength={maxLength}
                                        multiline={multiline}
                                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.appTextColor4}
                                        secureTextEntry={secureTextEntry}
                                        style={[appStyles.inputField, { width: null, height: height(7), paddingTop: title ? Platform.OS === 'ios' ? height(1.5) : height(2.5) : null, paddingHorizontal: 0 }, appStyles.fontRegular, inputStyle]}
                                    />
                        }
                    </View>

                    {
                        right ?
                            right
                            :
                            iconNameRight ?
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Icon name={iconNameRight} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appBgColor3} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                                </View>
                                :
                                null
                    }
                </View>
                {
                    error ?
                        <Wrappers.Primary style={{}} animation="shake">
                            <Spacers.Tiny />
                            <Icons.WithText
                                iconName="alert-circle-outline"
                                //title="New"
                                text={error}

                                tintColor={colors.error}
                                iconSize={sizes.icons.tiny}
                                textStyle={[{ fontSize: fontSize.small }]}
                            />
                        </Wrappers.Primary>
                        :
                        null
                }
            </Wrappers.Primary>
        </TouchableOpacity>
    );
}


const SearchBar = ({ value, placeholder, inputContainerStyle, onChangeText, right, onPressCross, ...props }) => {
    return (
        <Colored
            value={value}
            onChangeText={onChangeText}
            iconNameLeft="search"
            iconTypeLeft="feather"
            placeholder={placeholder ? placeholder : "Search"}
            //inputContainerStyle={inputContainerStyle}
            iconNameRight={(value && onPressCross) && 'close-circle'}
            iconTypeRight="ionicon"
            onPressIconRight={onPressCross}
            right={right}
            inputStyle={{ height: height(6), marginHorizontal: sizes.marginHorizontal / 2 }}
            iconContainerStyle={{ marginLeft: sizes.marginHorizontal / 2 }}
            {...props}
        />
    )
}

export { Colored, Bordered, Underlined,SearchBar }