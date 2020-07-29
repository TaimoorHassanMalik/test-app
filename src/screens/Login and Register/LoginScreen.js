//import liraries
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Logo from '../../../src/components/Logo';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import LineOR from '../../components/LineOr';
import InputField from '../../components/InputField'
import DialogInput from '../../components/DialogBox'
import SocialButtons from '../../components/SocialLoginButtons'
import LoginSignUpButton from '../../components/LoginSignUpButton'

const LoginScreen = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [dialogIsVisible, setdialogIsVisible] = useState(false)

    const handleEmail = (email) => {
        setEmail(email)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleLogin = async () => {
        props.navigation.navigate('App')
    }

    const GooglePress = () => {
        alert('Google Button press')
    }

    const FacebookPress = () => {
        alert('Facebook Button press')
    }

    const showDialog = () => {
        setdialogIsVisible(true)

    }
    const handleCancel = () => {
        setdialogIsVisible(false)
    }
    const handleConfirm = (name) => {
        if (!name) {
            handleCancel()
        } else {
            // logic here
        }
    }

    const forgotdialogbox = () => {
        if (dialogIsVisible) {
            return (
                <DialogInput dialogIsVisible={dialogIsVisible} closeDialogInput={handleCancel}
                    submitInput={(name) => handleConfirm(name)}
                />
            )
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View style={[styles.errorMessage, { marginTop: 15 }]}>
                {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Login</Text>
            </View>

            <View style={{ flex: 2 }}>
                <ScrollView>
                    <InputField placeholder='Email or phone number' value={email} onChangeText={email => handleEmail(email)} IconName='email' />
                    <InputField placeholder='Password' value={password} onChangeText={password => handlePassword(password)} IconName='lock' secureTextEntry={true} />

                    {forgotdialogbox()}

                    <LoginSignUpButton handleButton={handleLogin} ButtonName='Login' />

                    <TouchableOpacity onPress={showDialog} style={styles.forget}>
                        <Text style={{ fontSize: 12 }}>Forgot password? </Text>
                    </TouchableOpacity>

                    <LineOR />

                    <SocialButtons FacebookPress={FacebookPress} GooglePress={GooglePress} />

                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={() => props.navigation.navigate('Register')}>
                        <Text style={{ fontSize: 12 }}>
                            Don't have an account? <Text style={{ color: '#3ec0f0', textDecorationLine: 'underline' }}>SignUp</Text>
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    );
}
export default LoginScreen;