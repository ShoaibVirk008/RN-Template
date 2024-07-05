import { Dimensions, Platform, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info';
import { responsiveFontSize,responsiveHeight,responsiveWidth } from '../responsive';

const { width, height } = Dimensions.get('window')

const statusBarHeight = Platform.select({
  ios: DeviceInfo.hasNotch()?40:23,
  android: StatusBar.currentHeight
})
const headerHeight = Platform.select({
  ios: height * 0.07,
  android: height * 0.08
})
const tabBarHeight = Platform.select({
  ios:DeviceInfo.hasNotch()? height * 0.1:height * 0.09,
  android: height * 0.09
})

// Used via Metrics.baseMargin
export const sizes = {
  marginBottom : height*0.025,
  marginTop : height*0.025,
  marginHorizontal: width*0.05,
  marginVertical: height*0.025,
  section: 25,
  TinyMargin: responsiveFontSize(4),
  smallMargin: responsiveFontSize(8),
  baseMargin: responsiveFontSize(18),
  mediumMargin: responsiveFontSize(26),
  doubleBaseMargin: responsiveFontSize(36),
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: (Platform.OS === 'ios') ? 100 : 100,
  inputHeight: (Platform.OS === 'ios') ? height*0.07 : height*0.07,
  buttonHeight: (Platform.OS === 'ios') ? height*0.06 : height*0.06,
  modalRadius: 15,
  cardRadius: (Platform.OS === 'ios') ? 15 : 15,
  ModalRadius: (Platform.OS === 'ios') ? 25 : 35,
  inputRadius:(Platform.OS === 'ios') ? 15 : 20,
  statusBarHeight:statusBarHeight,
  headerHeight:headerHeight+statusBarHeight,
  tabBarHeight:tabBarHeight,
  icons: {
    tiny: responsiveFontSize(14),
    small: responsiveFontSize(18),
    medium: responsiveFontSize(24),
    large:responsiveFontSize(34),
    xl: responsiveFontSize(42),
    xxl: responsiveFontSize(48)
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}


export const fontSizes = {
  h1: responsiveFontSize(42),
  h2: responsiveFontSize(38),
  h3: responsiveFontSize(32),
  h4: responsiveFontSize(28),
  h5: responsiveFontSize(24),
  h6: responsiveFontSize(20),
  input: responsiveFontSize(1.6),
  large: responsiveFontSize(18),
  medium: responsiveFontSize(16),
  regular: responsiveFontSize(14),
  small: responsiveFontSize(12),
  tiny: responsiveFontSize(10),
  xTiny: responsiveFontSize(6),
  xxTiny: responsiveFontSize(4)
}
