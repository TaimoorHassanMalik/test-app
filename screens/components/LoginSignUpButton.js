import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import styles from '../Login and Register/styles';
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LoginSignUpButton = (props) => {
    return (
        <TouchableOpacity onPress={props.handleButton}>
            <LinearGradient
                colors={['#4ca2c2', '#3ec0f0']}
                start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
                style={{ borderRadius: 20, padding: 10, flexDirection: 'row', height: 40, justifyContent: 'space-between' }}
            >
                <Text style={[styles.buttonText, { color: '#4ca2c2' }]}>.     </Text>
                <Text style={styles.buttonText}>{props.ButtonName}</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <View style={styles.buttonArrow}>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            color="#3ec0f0"
                            size={20}
                        />
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};
export default LoginSignUpButton;