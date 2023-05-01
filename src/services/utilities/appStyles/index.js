import { StyleSheet } from 'react-native'
import { totalSize, height, width } from 'react-native-dimension'
import { sizes } from '../sizes'
import { colors } from '../colors'
import { fontFamily, fontSize } from '../fonts'

export const appStyles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    height: null,
    width: null
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBgColor1
  },
  h1: {
    fontSize: fontSize.h1,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextBold
  },
  h2: {
    fontSize: fontSize.h2,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextBold
  },
  h3: {
    fontSize: fontSize.h3,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextBold
  },
  h4: {
    fontSize: fontSize.h4,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextBold
  },
  h5: {
    fontSize: fontSize.h5,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextBold
  },
  h6: {
    fontSize: fontSize.h6,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextBold
  },
  textLarge: {
    fontSize: fontSize.large,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  textMedium: {
    fontSize: fontSize.medium,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  textRegularPlus: {
    fontSize: fontSize.regular_plus,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  textRegular: {
    fontSize: fontSize.regular,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  textSmallPlus: {
    fontSize: fontSize.small_plus,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  textSmall: {
    fontSize: fontSize.small,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  textTiny: {
    fontSize: fontSize.tiny,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  xTinyText: {
    fontSize: fontSize.xTiny,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  xxTinyText: {
    fontSize: fontSize.xxTiny,
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextRegular
  },
  inputContainerUnderLined: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFF'
  },
  inputContainerBorderd: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: colors.appColor1
  },
  inputContainerColored: {
    marginHorizontal: width(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFF',
    borderRadius: 2.5
  },
  inputField: {
    height: sizes.inputHeight,
    //width: width(80),
    color: colors.appTextColor3,
    fontFamily: fontFamily.appTextRegular,
    fontSize: fontSize.medium
  },
  inputFieldBorderd: {
    marginHorizontal: width(5),
    height: height(7),
    borderWidth: 0.5,
    borderColor: colors.appColor1,
    fontSize: totalSize(1.75),
    fontFamily: fontFamily.appTextRegular,
    borderRadius: 2.5
  },
  inputFieldColored: {
    marginHorizontal: width(5),
    height: height(7),
    fontSize: totalSize(1.75),
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5,
    backgroundColor: '#FFFF',
    borderRadius: 2.5,
  },

  buttonBorderd: {
    marginHorizontal: width(5),
    height: height(8),
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonColord: {
    marginHorizontal: width(5),
    height: height(8),
    borderRadius: 2.5,
    backgroundColor: colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  SocialButtonColord: {
    height: height(8),
    marginHorizontal: width(5),
    borderRadius: 2.5,
    backgroundColor: colors.facebook,
    //  alignItems: 'center',
    //  justifyContent: 'center'
  },
  buttonText: {
    fontSize: totalSize(2),
    color: '#000000',
    fontFamily: fontFamily.appTextMedium
  },
  compContainer: {
    marginHorizontal: width(5),
    marginVertical: height(2.5)
  },
  rowCompContainer: {
    marginHorizontal: width(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height(2.5)
  },
  headerStyle: {
    backgroundColor: colors.appBgColor1,
    borderBottomWidth: 1,
    borderBottomColor: colors.appTextColor4,
    height: sizes.headerHeight
  },
  headerTitleStyle: {
    fontSize: totalSize(2),
    color: colors.appTextColor3,
    fontFamily: fontFamily.appTextMedium
  },
  cardView: {
    marginHorizontal: width(5),
    borderRadius: sizes.cardRadius,
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
    shadowColor: colors.appColor1,
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
    color: colors.appTextColor2
  },
  textColor3:{
    color: colors.appTextColor3
  },
  textGray: {
    color: colors.appTextColor4
  },
  textDarkGray: {
    color: colors.appTextColor3
  },
  textLightGray: {
    color: colors.appTextColor5
  },
  textPrimaryColor: {
    color: colors.appColor1
  },
  textSecondaryColor: {
    color: colors.appColor2
  },
  textForthColor: {
    color: colors.appColor4
  },
  textWhite: {
    color: colors.appTextColor6
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
    fontFamily: fontFamily.appTextBold
  },
  fontBold: {
    fontFamily: fontFamily.appTextBold
  },
  fontMedium: {
    fontFamily: fontFamily.appTextMedium
  },
  fontRegular: {
    fontFamily: fontFamily.appTextRegular
  },
  fontLight: {
    fontFamily: fontFamily.appTextLight
  },
  ButtonRegular: {
    fontSize: fontSize.regular,
    color: '#000000',
    fontFamily: fontFamily.appTextMedium
  },
  ButtonMedium: {
    fontSize: fontSize.medium,
    color: '#000000',
    fontFamily: fontFamily.appTextBold,
    //letterSpacing:totalSize(5)
  },
  ButtonTextLarge: {
    fontSize: totalSize(2.2),
    color: '#000000',
    fontFamily: fontFamily.appTextMedium,
    letterSpacing: totalSize(0.25)
  },
  tabBarStyle: {
    height: sizes.tabBarHeight,
    borderTopWidth: 0,
    //justifyContent: 'center',
    // borderTopLeftRadius: sizes.cardRadius,
    //borderTopRightRadius: sizes.cardRadius,
    // paddingTop: height(1),
    //borderRadius: sizes.buttonRadius,
    backgroundColor: colors.appBgColor1,
    //paddingVertical:sizes.tabBarHeight/5,
    //position: 'absolute',
    //left: 0,
    //right: 0,
    //bottom: 0,
    //marginHorizontal: sizes.marginHorizontal,
    //marginBottom: Platform.OS === 'ios' ? height(2.5) : height(1.5),
    //paddingTop: sizes.tabBarHeight / 7,
    paddingBottom: sizes.tabBarHeight / 4,
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
    marginHorizontal: sizes.marginHorizontal,
    paddingHorizontal: sizes.marginHorizontal / 1.25,
    paddingVertical: sizes.marginVertical / 1.5,
    backgroundColor: colors.appBgColor3,
    borderRadius: sizes.cardRadius,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  borderedWrapper: {
    marginHorizontal: sizes.marginHorizontal,
    paddingHorizontal: sizes.marginHorizontal / 1.25,
    paddingVertical: sizes.marginVertical / 1.5,
    borderWidth: 1,
    borderColor: colors.appBgColor3,
    borderRadius: sizes.cardRadius,
  },
  marginHorizontalLarge: {
    marginHorizontal: sizes.marginHorizontal * 2
  },
  marginHorizontalMedium: {
    marginHorizontal: sizes.marginHorizontal * 1.5
  },
  marginHorizontalBase: {
    marginHorizontal: sizes.marginHorizontal
  },
  marginHorizontalSmall: {
    marginHorizontal: sizes.marginHorizontal / 1.5
  },
  marginHorizontalTiny: {
    marginHorizontal: sizes.marginHorizontal / 4
  },
  marginHorizontalZero: {
    marginHorizontal: 0
  },
  paddingHorizontalLarge: {
    paddingHorizontal: sizes.marginHorizontal * 2
  },
  paddingHorizontalBase: {
    paddingHorizontal: sizes.marginHorizontal
  },
  paddingHorizontalSmall: {
    paddingHorizontal: sizes.marginHorizontal / 2
  },
  paddingHorizontalMedium: {
    paddingHorizontal: sizes.marginHorizontal * 1.5
  },
  paddingHorizontalTiny: {
    paddingHorizontal: sizes.marginHorizontal / 4
  },
  paddingHorizontalZero: {
    paddingHorizontal: 0
  },
  marginVerticalBase: {
    marginVertical: sizes.marginVertical
  },
  marginVerticalSmall: {
    marginVertical: sizes.marginVertical / 2
  },
  marginVerticalTiny: {
    marginVertical: sizes.marginVertical / 4
  },
  marginVerticalMedium: {
    marginVertical: sizes.marginVertical * 1.5
  },
  marginVerticalLarge: {
    marginVertical: sizes.marginVertical * 2
  },
  marginVerticalZero: {
    marginVertical: 0
  },
  paddingVerticalLarge: {
    paddingVertical: sizes.marginVertical * 2
  },
  paddingVerticalMedium: {
    paddingVertical: sizes.marginVertical * 1.5
  },
  paddingVerticalBase: {
    paddingVertical: sizes.marginVertical
  },
  paddingVerticalSmall: {
    paddingVertical: sizes.marginVertical / 2
  },
  paddingVerticalTiny: {
    paddingVertical: sizes.marginVertical / 4
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
    backgroundColor: colors.appBgColor1
  },
  textUnderlined: {
    textDecorationLine: 'underline'
  },
  textError:{
    color:colors.error
  },
  textSuccess:{
    color:colors.success
  }
})
