import React from 'react';
import DialogInput from 'react-native-dialog-input-custom';

const Input = (props) => {
    return (
        <DialogInput
            dialogIsVisible={props.dialogIsVisible}
            closeDialogInput={props.closeDialogInput}
            submitInput={props.submitInput}
            outerContainerStyle={{ backgroundColor: 'rgba(0,0,0, 0.75)' }}
            containerStyle={{ backgroundColor: 'white', borderColor: '#FB862F', borderWidth: 0, borderRadius: 20 }}
            titleStyle={{ color: 'black' }}
            title='Forgot Password'
            subTitleStyle={{ color: 'black', fontStyle: 'italic' }}
            subtitle="Please enter your registered email                     (Note: Go to your email address and check) "
            placeholderInput='enter email'
            placeholderTextColor="gray"
            // textInputStyle={{ borderColor: '#3ec0f0', borderWidth: 0.5, borderRadius: 5 }}
            secureTextEntry={false}
            buttonsStyle={{ borderColor: 'black' }}
            textCancelStyle={{ color: 'red' }}
            submitTextStyle={{ color: '#3ec0f0', fontStyle: 'italic' }}
            cancelButtonText="CANCEL"
            submitButtonText="SUBMIT"
        />
    );
};
export default Input;