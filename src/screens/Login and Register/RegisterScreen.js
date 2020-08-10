import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Logo from '../../../src/components/Logo';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import LineOR from '../../components/LineOr';
import InputField from '../../components/InputField'
import SocialButtons from '../../components/SocialLoginButtons'
import LoginSignUpButton from '../../components/LoginSignUpButton'

const RegisterScreen = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSignUp = () => {
        props.navigation.navigate('Verification')
    }
    const FacebookPress = () => {
        alert('Facebook button press')
    }
    const GooglePress = () => {
        alert('Google button press')
    }
    const handleName = (name) => {
        setName(name)
    }
    const handleEmail = (email) => {
        setEmail(email)
    }
    const handlePhoneNumber = phone => {
        if (isNaN(phone)) return;
        setPhoneNumber(phone)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }
    const hanldeConfirmPassword = (confirmPassword) => {
        setConfirmPassword(confirmPassword)
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.logoContainer} >
                <Logo />
            </View>
            <View style={[styles.errorMessage, { marginTop: 15 }]} >
                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: -19 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Signup</Text>
            </View>
            <View style={{ flex: 5 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <InputField placeholder='Name' value={name} onChangeText={name => handleName(name)} IconName='account-circle' NameIconWala={true} />
                    <InputField placeholder='Email' value={email} onChangeText={email => handleEmail(email)} IconName='email' />
                    <InputField placeholder='Phone Number' value={phoneNumber} onChangeText={phone => handlePhoneNumber(phone)} IconName='phone' keyboardType='numeric' />
                    <InputField placeholder='Password' value={password} onChangeText={password => handlePassword(password)} IconName='lock' secureTextEntry={true} />
                    <InputField placeholder='Confirm Password' value={confirmPassword} onChangeText={password => hanldeConfirmPassword(password)} IconName='lock' secureTextEntry={true} />
                    <LoginSignUpButton handleButton={handleSignUp} ButtonName='SignUp' />
                    <LineOR />
                    <SocialButtons FacebookPress={FacebookPress} GooglePress={GooglePress} />
                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 5 }} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{ fontSize: 12 }}>
                            Already have an account? <Text style={{ color: '#3ec0f0', textDecorationLine: 'underline' }}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
export default RegisterScreen;
