import { UIManager, LayoutAnimation, Platform } from "react-native";

export const handleAnimation = () => {
    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}
export const checkExpiry = () => {
    var d1 = Date.parse("2012-11-01");
    var d2 = Date.parse("2012-11-04");
    var expiryDate = Date.parse("2020-12-18");
    var currentDate = Date.now()
    console.log(expiryDate > currentDate)
    if (expiryDate < currentDate) {
        return true
    } else {
        return false
    }
}
export const compareDate = () => {
    var date1 = new Date('December 25, 2017 01:30:00');
    var date2 = new Date('June 18, 2016 02:30:00');
    console.log(date1.getTime() > date2.getTime())
    //best to use .getTime() to compare dates
    //if (date1.getTime() === date2.getTime()) {
    //same date
    //}

    if (date1.getTime() > date2.getTime()) {
        return true
    } else {
        return false
    }
}

