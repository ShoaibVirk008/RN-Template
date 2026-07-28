import { StyleSheet } from 'react-native'
import { APP_SIZES } from '../sizes/Sizes'
import { APP_COLORS } from '../colors/Colors'
import { APP_FONTS } from '../assets/Assets'
import{responsiveHeight,responsiveWidth,responsiveFontSize} from '../responsive/Responsive'

export const APP_STYLES = StyleSheet.create({
  bgContainer: {
    flex: 1,
    height: null,
    width: null
  },
  mainContainer: {
    flex: 1,
    backgroundColor: APP_COLORS.appBgColor1
  },
  h1: {
    fontSize: APP_SIZES.fonts.h1,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextBold
  },
  h2: {
    fontSize: APP_SIZES.fonts.h2,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextBold
  },
  h3: {
    fontSize: APP_SIZES.fonts.h3,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextBold
  },
  h4: {
    fontSize: APP_SIZES.fonts.h4,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextBold
  },
  h5: {
    fontSize: APP_SIZES.fonts.h5,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextBold
  },
  h6: {
    fontSize: APP_SIZES.fonts.h6,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextBold
  },
  textLarge: {
    fontSize: APP_SIZES.fonts.large,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  textMedium: {
    fontSize: APP_SIZES.fonts.medium,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  textRegularPlus: {
    fontSize: APP_SIZES.fonts.regular_plus,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  textRegular: {
    fontSize: APP_SIZES.fonts.regular,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  textSmallPlus: {
    fontSize: APP_SIZES.fonts.small_plus,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  textSmall: {
    fontSize: APP_SIZES.fonts.small,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  textTiny: {
    fontSize: APP_SIZES.fonts.tiny,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  xTinyText: {
    fontSize: APP_SIZES.fonts.xTiny,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  xxTinyText: {
    fontSize: APP_SIZES.fonts.xxTiny,
    color: APP_COLORS.appTextColor1,
    fontFamily: APP_FONTS.appTextRegular
  },
  inputContainerUnderLined: {
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFF'
  },
  inputContainerBorderd: {
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: APP_COLORS.appColor1
  },
  inputContainerColored: {
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFF',
    borderRadius: 2.5
  },
  inputField: {
    height: APP_SIZES.inputHeight,
    //width: responsiveWidth(80),
    color: APP_COLORS.appTextColor3,
    fontFamily: APP_FONTS.appTextRegular,
    fontSize: APP_SIZES.fonts.medium
  },
  inputFieldBorderd: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(7),
    borderWidth: 0.5,
    borderColor: APP_COLORS.appColor1,
    fontSize: responsiveFontSize(1.75),
    fontFamily: APP_FONTS.appTextRegular,
    borderRadius: 2.5
  },
  inputFieldColored: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(7),
    fontSize: responsiveFontSize(1.75),
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5,
    backgroundColor: '#FFFF',
    borderRadius: 2.5,
  },

  buttonBorderd: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(8),
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: APP_COLORS.appColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonColord: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(8),
    borderRadius: 2.5,
    backgroundColor: APP_COLORS.appColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  SocialButtonColord: {
    height: responsiveHeight(8),
    marginHorizontal: responsiveWidth(5),
    borderRadius: 2.5,
    backgroundColor: APP_COLORS.facebook,
    //  alignItems: 'center',
    //  justifyContent: 'center'
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    color: '#000000',
    fontFamily: APP_FONTS.appTextMedium
  },
  compContainer: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(2.5)
  },
  rowCompContainer: {
    marginHorizontal: responsiveWidth(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(2.5)
  },
  headerStyle: {
    backgroundColor: APP_COLORS.appBgColor1,
    borderBottomWidth: 1,
    borderBottomColor: APP_COLORS.appTextColor4,
    //height: sizes.headerHeight
  },
  headerTitleStyle: {
    fontSize: responsiveFontSize(2),
    color: APP_COLORS.appTextColor3,
    fontFamily: APP_FONTS.appTextBold
  },
  cardView: {
    marginHorizontal: responsiveWidth(5),
    borderRadius: APP_SIZES.cardRadius,
    backgroundColor: '#FFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 3,
  },
  shadowExtraLight: {
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,

    elevation: 1.5,
  },
  shadowLight: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,

    elevation: 3,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  shadowColored: {
    shadowColor: APP_COLORS.appColor1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  shadowDark: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.425,
    shadowRadius: 8.27,

    elevation: 10,
  },
  shadowExtraDark: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  textCenter: {
    textAlign: 'center'
  },
  alignTextRight: {
    textAlign: 'right'
  },
  textColor2: {
    color: APP_COLORS.appTextColor2
  },
  textColor3:{
    color: APP_COLORS.appTextColor3
  },
  textGray: {
    color: APP_COLORS.appTextColor4
  },
  textDarkGray: {
    color: APP_COLORS.appTextColor3
  },
  textLightGray: {
    color: APP_COLORS.appTextColor5
  },
  textPrimaryColor: {
    color: APP_COLORS.appColor1
  },
  textSecondaryColor: {
    color: APP_COLORS.appColor2
  },
  textForthColor: {
    color: APP_COLORS.appColor4
  },
  textWhite: {
    color: APP_COLORS.appTextColor6
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontExtraBold: {
    fontFamily: APP_FONTS.appTextBold
  },
  fontBold: {
    fontFamily: APP_FONTS.appTextBold
  },
  fontMedium: {
    fontFamily: APP_FONTS.appTextMedium
  },
  fontRegular: {
    fontFamily: APP_FONTS.appTextRegular
  },
  fontLight: {
    fontFamily: APP_FONTS.appTextLight
  },
  ButtonRegular: {
    fontSize: APP_SIZES.fonts.regular,
    color: '#000000',
    fontFamily: APP_FONTS.appTextMedium
  },
  ButtonMedium: {
    fontSize: APP_SIZES.fonts.medium,
    color: '#000000',
    fontFamily: APP_FONTS.appTextBold,
    //letterSpacing:responsiveFontSize(5)
  },
  ButtonTextLarge: {
    fontSize: responsiveFontSize(2.2),
    color: '#000000',
    fontFamily: APP_FONTS.appTextMedium,
    letterSpacing: responsiveFontSize(0.25)
  },
  tabBarStyle: {
    height: APP_SIZES.tabBarHeight,
    borderTopWidth: 0,
    //justifyContent: 'center',
    borderTopLeftRadius: APP_SIZES.cardRadius,
   borderTopRightRadius: APP_SIZES.cardRadius,
    // paddingTop: responsiveHeight(1),
    //borderRadius: sizes.buttonRadius,
    backgroundColor: APP_COLORS.appColor1,
    //paddingVertical:sizes.tabBarHeight/5,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    //marginHorizontal: sizes.marginHorizontal,
    //marginBottom: Platform.OS === 'ios' ? responsiveHeight(2.5) : responsiveHeight(1.5),
    //paddingTop: sizes.tabBarHeight / 7,
    paddingBottom: APP_SIZES.tabBarHeight / 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.425,
    shadowRadius: 8.27,

    elevation: 10,
  },
  coloredWrapper: {
    marginHorizontal: APP_SIZES.marginHorizontal,
    paddingHorizontal: APP_SIZES.marginHorizontal / 1.25,
    paddingVertical: APP_SIZES.marginVertical / 1.5,
    backgroundColor: APP_COLORS.appBgColor3,
    borderRadius: APP_SIZES.cardRadius,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  borderedWrapper: {
    marginHorizontal: APP_SIZES.marginHorizontal,
    paddingHorizontal: APP_SIZES.marginHorizontal / 1.25,
    paddingVertical: APP_SIZES.marginVertical / 1.5,
    borderWidth: 1,
    borderColor: APP_COLORS.appBgColor3,
    borderRadius: APP_SIZES.cardRadius,
  },
  marginHorizontalLarge: {
    marginHorizontal: APP_SIZES.marginHorizontal * 2
  },
  marginHorizontalMedium: {
    marginHorizontal: APP_SIZES.marginHorizontal * 1.5
  },
  marginHorizontalBase: {
    marginHorizontal: APP_SIZES.marginHorizontal
  },
  marginHorizontalSmall: {
    marginHorizontal: APP_SIZES.marginHorizontal / 1.5
  },
  marginHorizontalTiny: {
    marginHorizontal: APP_SIZES.marginHorizontal / 4
  },
  marginHorizontalZero: {
    marginHorizontal: 0
  },
  paddingHorizontalLarge: {
    paddingHorizontal: APP_SIZES.marginHorizontal * 2
  },
  paddingHorizontalBase: {
    paddingHorizontal: APP_SIZES.marginHorizontal
  },
  paddingHorizontalSmall: {
    paddingHorizontal: APP_SIZES.marginHorizontal / 2
  },
  paddingHorizontalMedium: {
    paddingHorizontal: APP_SIZES.marginHorizontal * 1.5
  },
  paddingHorizontalTiny: {
    paddingHorizontal: APP_SIZES.marginHorizontal / 4
  },
  paddingHorizontalZero: {
    paddingHorizontal: 0
  },
  marginVerticalBase: {
    marginVertical: APP_SIZES.marginVertical
  },
  marginVerticalSmall: {
    marginVertical: APP_SIZES.marginVertical / 2
  },
  marginVerticalTiny: {
    marginVertical: APP_SIZES.marginVertical / 4
  },
  marginVerticalMedium: {
    marginVertical: APP_SIZES.marginVertical * 1.5
  },
  marginVerticalLarge: {
    marginVertical: APP_SIZES.marginVertical * 2
  },
  marginVerticalZero: {
    marginVertical: 0
  },
  paddingVerticalLarge: {
    paddingVertical: APP_SIZES.marginVertical * 2
  },
  paddingVerticalMedium: {
    paddingVertical: APP_SIZES.marginVertical * 1.5
  },
  paddingVerticalBase: {
    paddingVertical: APP_SIZES.marginVertical
  },
  paddingVerticalSmall: {
    paddingVertical: APP_SIZES.marginVertical / 2
  },
  paddingVerticalTiny: {
    paddingVertical: APP_SIZES.marginVertical / 4
  },
  paddingVerticalZero: {
    paddingVertical: 0
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between'
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyContentSpaceAround:{
    justifyContent: 'space-around'
  },
  justifyContentFlexend: {
    justifyContent: 'flex-end',
  },
  justifyContentFlexstart: {
    justifyContent: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end'
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start'
  },
  backgroundColorWhite: {
    backgroundColor: APP_COLORS.appBgColor1
  },
  textUnderlined: {
    textDecorationLine: 'underline'
  },
  textError:{
    color:APP_COLORS.error
  },
  textSuccess:{
    color:APP_COLORS.success
  }
})
