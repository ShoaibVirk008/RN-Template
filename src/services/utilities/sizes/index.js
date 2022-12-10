import { Dimensions, Platform, StatusBar } from 'react-native'
import { totalSize } from 'react-native-dimension'
import DeviceInfo from 'react-native-device-info';

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
const sizes = {
  marginBottom : height*0.025,
  marginTop : height*0.025,
  marginHorizontal: width*0.05,
  marginVertical: height*0.025,
  section: 25,
  TinyMargin: totalSize(0.5),
  smallMargin: totalSize(1),
  baseMargin: totalSize(2),
  doubleBaseMargin: totalSize(5),
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: (Platform.OS === 'ios') ? 15 : 20,
  inputHeight: (Platform.OS === 'ios') ? height*0.06 : height*0.06,
  buttonHeight: (Platform.OS === 'ios') ? height*0.06 : height*0.06,
  modalRadius: 15,
  cardRadius: (Platform.OS === 'ios') ? 15 : 15,
  ModalRadius: (Platform.OS === 'ios') ? 25 : 35,
  inputRadius:(Platform.OS === 'ios') ? 15 : 20,
  statusBarHeight:statusBarHeight,
  headerHeight:headerHeight+statusBarHeight,
  tabBarHeight:tabBarHeight,
  icons: {
    tiny: totalSize(1.5),
    small: totalSize(2),
    medium: totalSize(2.5),
    large: totalSize(3.5),
    xl: totalSize(4.5),
    xxl: totalSize(5)
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export  {sizes}
