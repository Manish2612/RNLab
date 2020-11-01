import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GradientMessages from '../screens/GradientMessages';
import StripedCarousel from '../screens/StripedCarousel';

const Stack = createStackNavigator();

function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="GradientMessages" component={GradientMessages} options={{ headerShown: false }} />
                <Stack.Screen name="StripedCarousel" component={StripedCarousel} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;