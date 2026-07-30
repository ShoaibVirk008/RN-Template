import React, { } from 'react';
import Wrapper from '../../wrapper/Wrapper';
import Text from '../../text/Text';
import { APP_SVGS, APP_STYLES, APP_COLORS, responsiveWidth, APP_SIZES } from '../../../utilities';
import * as TextInputs from '../../textInput/TextInput';
import * as Modals from '../../modals';
import * as Icons from '../../icons/Icons';

export function ChatInput  ({ onPressEmojy, onPressSend, ...props })  {
    return (
        <Wrapper
            background1
            style={[
                {
                    paddingTop: APP_SIZES.marginVertical / 2,
                    paddingBottom: APP_SIZES.marginVertical / 1.5,
                },
                APP_STYLES.shadowExtraDark,
            ]}
        >
            <Wrapper flexDirectionRow alignItemsFlexEnd>
                <Icons.Button
                    iconName={"smile"}
                    iconType={"feather"}
                    buttonColor={APP_COLORS.appBgColor1}
                    iconColor={APP_COLORS.appTextColor5}
                    iconSize={responsiveWidth(7)}
                    buttonSize={responsiveWidth(10)}
                    isRound
                    buttonStyle={[APP_STYLES.marginHorizontalTiny]}
                    onPress={onPressEmojy}
                />
                <Wrapper flex={1}>
                    <TextInputs.Colored
                        placeholder={"Write a message"}
                        placeholderTextColor={APP_COLORS.appTextColor5}
                        containerStyle={{ ...APP_STYLES.marginHorizontalZero }}
                        inputContainerStyle={{
                            backgroundColor: APP_COLORS.appBgColor1,
                            borderRadius: APP_SIZES.cardRadius / 2,

                        }}
                        multiline
                        inputStyle={[
                            {
                                height: null,
                            },
                            APP_STYLES.paddingHorizontalZero,
                            APP_STYLES.marginVerticalZero,
                            APP_STYLES.paddingVerticalSmall,
                            APP_STYLES.fontRegular,
                            {},
                        ]}
                        {...props}
                    />
                </Wrapper>
                <Icons.Button
                    iconName={"send"}
                    iconType={"feather"}
                    buttonColor={APP_COLORS.appColor1}
                    iconColor={APP_COLORS.appTextColor6}
                    iconSize={responsiveWidth(6)}
                    buttonSize={responsiveWidth(10)}
                    isRound
                    buttonStyle={[APP_STYLES.marginHorizontalSmall]}
                    onPress={onPressSend}

                />
            </Wrapper>
        </Wrapper>
    )
}

export const TitleInfoPrimary = ({ title, info, isBold, titleStyel, infoStyle }) => {

    const titleInfoBold = isBold || false
    return (
        <Wrapper marginHorizontalBase flexDirectionRow justifyContentSpaceBetween>
            <Text isMedium isBoldFont={titleInfoBold} style={titleStyel}>{title}</Text>
            <Text isMedium isBoldFont={titleInfoBold} style={infoStyle}>{info}</Text>
        </Wrapper>
    )
}

export const IconButtonPrimary = ({ ...props }) => {
    return (
        <Icons.Button
            buttonColor={APP_COLORS.appColor1}
            iconColor={APP_COLORS.appTextColor6}
            iconSize={responsiveWidth(6)}
            buttonSize={responsiveWidth(10)}
            iconName={'arrow-left'}
            isRound
            {...props}
        />
    )
}

export const NoDataViewPrimary = ({ containerStyle, ...props }) => {
    return (
        <Wrapper style={containerStyle}>
            <Icons.WithText
                iconName={'search-off'}
                iconType='material'
                text={'No Data Available'}
                direction='column'
                iconSize={responsiveHeight(15)}
                tintColor={APP_COLORS.appTextColor4}
                textStyle={[APP_STYLES.textRegular, APP_STYLES.textGray, APP_STYLES.textCenter]}
                titleStyle={[APP_STYLES.textMedium, APP_STYLES.fontBold, APP_STYLES.textGray, APP_STYLES.textCenter]}
                textContainerStyle={[APP_STYLES.alignItemsCenter]}
                {...props}
            />
        </Wrapper>
    )
}

export const SuccessPopup = ({ ...PopupPrimaryProps }) => {
    return (
        <Modals.PopupPrimary
            // visible={isFoodLoggedPopupVisible}
            // toggle={toggleFoodLoggedPopup}
            // title={'Food Logged'}
            // buttonText1={'Add More'}
            // buttonText2={'Done'}
            // onPressButton1={() => {
            //     toggleFoodLoggedPopup()
            // }}
            // onPressButton2={() => {
            //     toggleFoodLoggedPopup()
            //     goBack()
            // }}
            titleStyle={[APP_STYLES.h6, APP_STYLES.textPrimaryColor]}
            icon={
                <Icons.Svg
                    svg={APP_SVGS.arrow_left}
                    size={responsiveWidth(25)}
                />
            }
            // topMargin={responsiveHeight(55)}
            {...PopupPrimaryProps}
        />
    )
}