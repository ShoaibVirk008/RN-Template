import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES, HEADERS } from '../../services';
import * as Common from '../../screens/common';

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={ROUTES.termsOfService}
        >

            <Stack.Screen name={ROUTES.termsOfService} component={Common.TermsOfService} />
            <Stack.Screen name={ROUTES.privacyPolicy} component={Common.PrivacyPolicy} />
        </Stack.Navigator>
    )
}
