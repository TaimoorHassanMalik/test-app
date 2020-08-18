import React, { useState, useEffect, useMemo } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { useTheme } from '@react-navigation/native';
// import { AuthContext } from './context'

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    const [logoOpacity, setlogoOpacity] = useState(new Animated.Value(0))


    useEffect(() => {
        Animated.sequence([
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }),
        ]).start(() => {
            navigation.navigate('Login')

        })

    }, [])

    return (
        <LinearGradient
            colors={['#4ca2c2', '#3ec0f0']}
            start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={styles.container}>
                <Animated.Image source={require('../../assets/logo.png')}
                    style={{ ...styles.logo, opacity: logoOpacity }}>
                </Animated.Image>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
      
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        width: 400,
        fontSize: 21,
        color: 'white'
    }
});
export default SplashScreen