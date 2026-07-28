import { Platform, StatusBar } from 'react-native'
import DeviceInfo from 'react-native-device-info';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../responsive/Responsive';

const statusBarHeight = Platform.select({
  ios: DeviceInfo.hasNotch()?40:23,
  android: StatusBar.currentHeight
})
const headerHeight = Platform.select({
  ios: responsiveHeight(7),
  android: responsiveHeight(8)
})
const tabBarHeight = Platform.select({
  ios:DeviceInfo.hasNotch()? responsiveHeight(10):responsiveHeight(9),
  android: responsiveHeight(9)
})

// Used via Metrics.baseMargin
export const APP_SIZES = {
  marginBottom : responsiveHeight(2.5),
  marginTop : responsiveHeight(2.5),
  marginHorizontal: responsiveWidth(5),
  marginVertical: responsiveHeight(2.5),
  section: 25,
  TinyMargin: responsiveFontSize(4),
  smallMargin: responsiveFontSize(8),
  baseMargin: responsiveFontSize(18),
  mediumMargin: responsiveFontSize(26),
  doubleBaseMargin: responsiveFontSize(36),
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: Math.min(responsiveWidth(100), responsiveHeight(100)),
  screenHeight: Math.max(responsiveWidth(100), responsiveHeight(100)),
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: (Platform.OS === 'ios') ? 100 : 100,
  inputHeight: responsiveHeight(7),
  buttonHeight: responsiveHeight(6),
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
  },
  fonts: {
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
}
