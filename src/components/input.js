//import liraries
import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../screens/Login and Register/styles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// create a component
const Input = (props) => {
    return (
        <View style={styles.section}>
            <View style={styles.icon}>
                <MaterialIcons
                    name={props.IconName}
                    color="#3ec0f0"
                    size={15}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder={props.placeholder}
                    style={styles.textInput}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    autoCorrect={false}
                    value={props.value}
                    onChangeText={props.onChangeText}
                />
            </View>
        </View>
    );
};

//make this component available to the app
export default Input;