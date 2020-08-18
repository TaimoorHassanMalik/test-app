import React from 'react';
import { CheckBox } from 'react-native-elements'
const CheckBoxx = (props) => {
    return (
        <CheckBox
            title={props.title}
            checked={props.checked}
            containerStyle={{ borderWidth: 0, marginTop: -10 }}
            textStyle={{ fontSize: 12, fontWeight: '100' }}
            onPress={props.onPressHandle}
        />
    );
};
export default CheckBoxx