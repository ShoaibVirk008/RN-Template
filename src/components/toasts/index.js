const { default: Toast } = require("react-native-root-toast")
const { colors, appStyles } = require("../../services")

export function Success  (text)  {
    Toast.show(text ? text : 'Toast Message', {
        backgroundColor: colors.appBgColor1,
        textColor: colors.appTextColor1,
        textStyle: [appStyles.h6],
        duration: 2000,
        shadow: false,
        // shadowColor: colors.appBgColor1
    })
}
export function Error  (text)  {
    Toast.show(text ? text : 'Toast Message', {
        backgroundColor: colors.appBgColor1,
        textColor: colors.appTextColor1,
        textStyle: [appStyles.h6],
        duration: 2000,
        shadow: false,
        // shadowColor: colors.appBgColor1
    })
}
