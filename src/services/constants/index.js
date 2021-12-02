import React from 'react'
import { appStyles, colors } from "../../services/utilities"
import { BackIcon } from "../../components"


export const baseURL = ''
export const endPoints = {
    login: 'login',
    courses:'rooms',
    classes:'classes',
}
export const routes={
    auth:'auth',
    app:'app',
    splash:'splash',
    signin:'signin',
    signup:'signup',
    home:'home'
}
export const headers = {
    screenOptions: {
         // headerShown: false,
         title: 'Title',
         headerTitleAlign: 'left',
         headerStyle: [appStyles.headerStyle],
         headerTitleStyle: appStyles.headerTitleStyle,
         headerTintColor: colors.appTextColor4,
         headerBackImage: () => <BackIcon />,
         headerBackTitle: ' '

    }
}
export const tabs = {
    tabBarOptions: {
        //showLabel: false,
        activeTintColor: colors.appTextColor6,
        inactiveTintColor: colors.appTextColor6,
        allowFontScaling: true,
        style: appStyles.tabBarStyle,
        activeBackgroundColor: '#FFFFFF40',
        tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
    },
    topTabBarOptions: {
        //showLabel: false,
        activeTintColor: colors.appColor1,
        inactiveTintColor: colors.appColor1,
        allowFontScaling: true,
        style: appStyles.searchTopTabBarStyle,
        showIcon: true,
        indicatorStyle: { backgroundColor: colors.appColor1 },
        tabStyle: { flexDirection: 'row' },
        labelStyle: [appStyles.textRegular, appStyles.textPrimaryColor]
        // activeBackgroundColor:'#FFFFFF40',
        //tabStyle:{borderRadius:20,marginHorizontal:7.5,marginVertical:2}
    }
}