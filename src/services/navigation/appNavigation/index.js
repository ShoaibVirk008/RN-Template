import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { header, routes,headers} from '../../constants';
import * as App from '../../../screens/appFlow';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <AppStack.Navigator
            screenOptions={headers.screenOptions}
            initialRouteName={routes.home}
        >
            <AppStack.Screen name={routes.home} component={App.Home}
                options={{
                    headerShown: false,
                    //title: 'Sign In'
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppNavigation