import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { APP_IMAGES, APP_COLORS, responsiveFontSize, responsiveWidth } from "../../utilities";
import { useReduxStore } from "../../helper";
import { ROUTES, TABS } from "../../services";
import { Images, Wrapper } from "../../components";
import { Icon } from "@rneui/base";
import * as App from '../../screens/app'
const BottomTabStack = createBottomTabNavigator();

export default function BottomTabNavigation() {
    const tabIconSize = responsiveFontSize(25)




    const TabIcon = ({ color, iconName, iconType, size, focused, image }) => {
        return (
            <Wrapper alignItemsCenter style={{ flex: 1, borderTopWidth: 3.5, borderTopColor: !focused ? APP_COLORS.appColor1 : APP_COLORS.appBgColor1, width: responsiveWidth(15), justifyContent: 'center', marginTop: 0 }}>
                {
                    !image ?
                        <Icon name={iconName} type={iconType} size={tabIconSize} color={color} focused={focused} />
                        :
                        <Images.Round source={{ uri: image }} size={tabIconSize} style={{ opacity: focused ? 1 : 0.5 }} />
                }
            </Wrapper>
        )
    }
    return (
        <>
            <BottomTabStack.Navigator
                screenOptions={{
                    headerShown: false,
                    ...TABS.tabBarOptions,
                }}
            >
                <BottomTabStack.Screen
                    name={ROUTES.home}
                    component={App.Home}
                    options={() => ({
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon iconName='home' iconType='feather' size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />
                <BottomTabStack.Screen
                    name={ROUTES.community}
                    component={App.Community}
                    options={() => ({
                        tabBarLabel: "Community",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon iconName='globe' iconType='feather' size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />
                <BottomTabStack.Screen
                    name={ROUTES.shop}
                    component={App.Shop}
                    options={() => ({
                        tabBarLabel: "Shop",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon iconName='shopping-cart' iconType='feather' size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />


                <BottomTabStack.Screen
                    name={ROUTES.account}
                    component={App.Account}
                    options={() => ({
                        tabBarLabel: "Account",
                        tabBarIcon: ({ color, size, focused }) => {
                            return <TabIcon iconName='user' iconType='feather' size={tabIconSize} color={color} focused={focused} />
                        },
                    })}
                />


            </BottomTabStack.Navigator>
        </>
    )
}