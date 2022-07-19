import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import { routes } from '../services';
import { Splash } from '../screens/authFlow';
import { navigationRef } from './rootNavigation';


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
                    initialRouteName={routes.auth}
                >
                    <MainStack.Screen
                        name={routes.auth}
                        component={AuthNavigation}
                    />
                    <MainStack.Screen
                        name={routes.app}
                        component={AppNavigation}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        );
}

