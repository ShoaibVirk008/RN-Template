
import { totalSize } from "react-native-dimension"
import { responsiveFontSize } from "../responsive"

const fontFamily = {
  // appTextLight: 'Roboto-Light',
  // appTextRegular: 'Roboto-Regular',
  // appTextMedium: 'Roboto-Medium',
  // appTextBold: 'Roboto-Bold',
  appTextLight: 'Montserrat-Light',
  appTextRegular: 'Montserrat-Regular',
  appTextMedium: 'Montserrat-Medium',
  appTextBold: 'Montserrat-Bold',
}


const fontSize = {
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


export { fontFamily, fontSize }

