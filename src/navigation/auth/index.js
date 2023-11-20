import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as Auth from '../../screens/auth';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            //screenOptions={{headerStyle:{backgroundColor:'gray',borderBottomWidth:5}}}
            initialRouteName={routes.signin}
        >
            <AuthStack.Screen name={routes.signin} component={Auth.Signin} />
            <AuthStack.Screen name={routes.createAccount} component={Auth.CreateAccount} />
           
        </AuthStack.Navigator>
    )
}

export default AuthNavigation