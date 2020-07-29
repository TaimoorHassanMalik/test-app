import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../screens/Login and Register/styles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Input = (props) => {
    return (
        <View style={styles.section}>
            <View style={styles.icon}>
                {props.NameIconWala ?
                    <FontAwesome
                        name='user'
                        color="#3ec0f0"
                        size={15}
                    /> : <MaterialIcons
                        name={props.IconName}
                        color="#3ec0f0"
                        size={15}
                    />}
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
export default Input;