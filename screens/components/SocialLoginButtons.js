import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../Login and Register/styles';
import FontAwesome from "react-native-vector-icons/FontAwesome";
const InputField = (props) => {
    return (
        <View style={styles.Socialsection}>
            <TouchableOpacity style={styles.SocialbuttonContainer} onPress={props.GooglePress} >
                <FontAwesome
                    name="google-plus"
                    color="red"
                    size={13}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.SocialbuttonContainer, { borderColor: 'blue' }]} onPress={props.FacebookPress} >
                <FontAwesome
                    name="facebook-f"
                    color="blue"
                    size={13}
                />
            </TouchableOpacity>
        </View>
    );
};
export default InputField;