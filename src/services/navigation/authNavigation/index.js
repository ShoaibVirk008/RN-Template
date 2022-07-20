import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { header, routes,headers} from '../../constants';
import * as Auth from '../../../screens/authFlow';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={headers.screenOptions}
            initialRouteName={routes.welcome}
        >
            <AuthStack.Screen name={routes.signin} component={Auth.Signin}
                options={{
                    headerShown: false,
                    //title: 'Sign In'
                }}
            />
            <AuthStack.Screen name={routes.signup} component={Auth.Signup}
                options={{
                    headerShown: false,
                    //title: 'sign Up'
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation