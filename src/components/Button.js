import React from 'react';
import { View, Text } from 'react-native';
import styles from '../screens/Login and Register/styles';
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Button = (props) => {
    return (
        <LinearGradient
            colors={['#4ca2c2', '#3ec0f0']}
            start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
            style={{
                flexDirection: 'row',
                backgroundColor: 'blue',
                height: 40,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#3ec0f0',
                marginTop: 10,
                marginHorizontal: 50
            }}
        >
            <View style={styles.icon}>
                <MaterialIcons
                    name={props.IconName}
                    color="white"
                    size={15}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 10 }}>{props.TextName}</Text>
            </View>
        </LinearGradient>
    );
};

export default Button;