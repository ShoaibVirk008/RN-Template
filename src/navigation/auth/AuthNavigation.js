import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES, HEADERS } from '../../services';
import * as Auth from '../../screens/auth';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            //screenOptions={{headerStyle:{backgroundColor:'gray',borderBottomWidth:5}}}
            initialRouteName={ROUTES.signin}
        >
            <AuthStack.Screen name={ROUTES.signin} component={Auth.Signin} />
            <AuthStack.Screen name={ROUTES.createAccount} component={Auth.CreateAccount} />
           
        </AuthStack.Navigator>
    )
}

export default AuthNavigation