import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Login and Register/SplashScreen';
import LoginScreen from '../Login and Register/LoginScreen';
import RegisterScreen from '../Login and Register/RegisterScreen';
// import SplashScreen from '../Login and Register/SplashScreen';
// import LoginScreen from '../SignInScreen';
// import RegisterScreen from '../SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Register" component={RegisterScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;