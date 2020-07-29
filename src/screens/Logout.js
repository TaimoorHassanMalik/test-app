import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Animated, Image, Dimensions } from "react-native";


export default class Logout extends React.Component {
    state = {
        logoOpacity: new Animated.Value(0),
    }
    async componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.logoOpacity, {
                toValue: 1,
                duration: 2000,
            }),
        ]).start(() => {
            this.props.navigation.navigate('App')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Image source={require('../../assets/login/logo.png')}
                    style={{ ...styles.logo, opacity: this.state.logoOpacity }}>
                </Animated.Image>
            </View>
        );
    }
}
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2
    }
});
