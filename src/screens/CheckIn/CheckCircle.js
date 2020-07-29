import React from 'react';
import { CheckBox, } from 'react-native-elements'
const CheckCircle = (props) => {
    return (
        < CheckBox
            title={props.title}
            size={15}
            checkedColor='#3ec0f0'
            uncheckedColor='#3ec0f0'
            textStyle={{ fontSize: 10, fontWeight: 'normal' }}
            containerStyle={{ borderWidth: 0, height: 20, backgroundColor: 'white' }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={props.checked}
            onPress={props.onPress}
        />
    );
};
export default CheckCircle;
