import React from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
export default class LoadingScreen extends React.Component {
    state = {
        logoOpacity: new Animated.Value(0),
    }
    async componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.logoOpacity, {
                toValue: 1,
                duration: 1500,
            }),
        ]).start(() => {
            this.props.navigation.navigate('Auth')
        })
    }
    render() {
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
                <View style={styles.gcontainer}>
                    <Animated.Image source={require('../../assets/logo.png')}
                        style={{ ...styles.logo, opacity: this.state.logoOpacity }}>
                    </Animated.Image>
                </View>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#3ec0f0'
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
