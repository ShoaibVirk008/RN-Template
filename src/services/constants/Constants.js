import { APP_COLORS } from "../../utilities/colors/Colors"
import { APP_STYLES } from "../../utilities/styles/Styles"


export const BASE_URL = 'https://localserver/v1/'
// Every endpoint is a { url, method } config consumed by Api.request()
export const END_POINTS = {
    //auth
    login: { url: 'auth/login', method: 'POST' },
    register: { url: 'auth/register', method: 'POST' },
    logout: { url: 'auth/logout', method: 'POST' },
}
export const ROUTES = {
    //main stacks
    auth: 'auth',
    app: 'app',
    common: 'common',

    //auth
    splash: 'splash',
    signin: 'signin',
    createAccount: 'createAccount',


    //app
    bottomTab: 'bottomTab',
    home: 'home',
    account: 'account',
    shop: 'shop',
    community: 'community',
    postDetail: 'postDetail',

    smartFoodJournal: 'smartFoodJournal',
    sprayLogs: 'sprayLogs',
    userProfile: 'userProfile',
    weightLossRanking: 'weightLossRanking',



    //common
    termsOfService: 'termsOfService',
    privacyPolicy: 'privacyPolicy',
}
export const HEADERS = {
    screenOptions: {
        // headerShown: false,
        title: 'Title',
        headerTitleAlign: 'left',
        headerStyle: [APP_STYLES.headerStyle],
        headerTitleStyle: APP_STYLES.headerTitleStyle,
        headerTintColor: APP_COLORS.appTextColor4,
        headerBackTitle: ' '

    }
}
export const TABS = {
    tabBarOptions: {
        showLabel: false,
        tabBarActiveTintColor: APP_COLORS.appBgColor1,
        tabBarInactiveTintColor: APP_COLORS.appBgColor1 + '60',
        allowFontScaling: true,
        tabBarStyle: [APP_STYLES.tabBarStyle, APP_STYLES.shadowExtraDark],
        activeBackgroundColor: '#FFFFFF40',
        //tabStyle: { borderRadius: 20, marginHorizontal: 7.5, marginVertical: 2 }
    },
}

export const IMAGE_PICKER_OPTIONS = {
    title: 'Select Photo',
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
