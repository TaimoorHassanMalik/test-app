import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const RadioButton = props => {
    return (
        <TouchableOpacity style={styles.circle} onPress={props.onPress}>
            {props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    circle: {
        height: 13,
        width: 13,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3ec0f0',
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 20,
        // marginLeft: 20,
        
    },
    checkedCircle: {
        width: 5,
        height: 5,
        borderRadius: 7,
        backgroundColor: '#3ec0f0',
    },
});

export default RadioButton;