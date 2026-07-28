import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './auth/AuthNavigation';
import AppNavigation from './app/AppNavigation';
import CommonNavigation from './common/CommonNavigation';
import { ROUTES } from '../services';
import { Splash } from '../screens/auth';
import { navigationRef } from './RootNavigation';


const MainStack = createNativeStackNavigator();

export default function Navigation() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    })

    if (loading)
        return <Splash />
    else
        return (
            <NavigationContainer
            ref={navigationRef}
            >
                <MainStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName={ROUTES.auth}
                >
                    <MainStack.Screen
                        name={ROUTES.auth}
                        component={AuthNavigation}
                    />
                    <MainStack.Screen
                        name={ROUTES.app}
                        component={AppNavigation}
                    />
                    <MainStack.Screen
                        name={ROUTES.common}
                        component={CommonNavigation}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        );
}

