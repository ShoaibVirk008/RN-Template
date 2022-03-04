import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import { routes } from '../constants';
import { Splash } from '../../screens/authFlow';


const MainStack = createNativeStackNavigator();

export function Navigation() {
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
            <NavigationContainer>
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

