import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES, HEADERS } from '../../services';
import * as App from '../../screens/app';
import BottomTab from './BottomTab'
const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ROUTES.bottomTab}
        >
             <AppStack.Screen name={ROUTES.bottomTab} component={BottomTab} /> 
            <AppStack.Screen name={ROUTES.postDetail} component={App.PostDetail} />

        </AppStack.Navigator>
    )
}

export default AppNavigation