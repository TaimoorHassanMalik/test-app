import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import Logo from '../components/Logo'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'
import LineOR from '../components/LineOr'
import InputField from '../components/InputField'
import DialogInput from '../components/DialogBox'
import SocialButtons from '../components/SocialLoginButtons'
import LoginSignUpButton from '../components/LoginSignUpButton'
import { AuthContext } from '../components/context'

const Users = [
    {
        id: 1,
        email: 'user1@gmail.com',
        username: 'user1',
        password: 'password',
        userToken: 'token123'
    },
    {
        id: 2,
        email: 'user2@gmail.com',
        username: 'user2',
        password: 'pass1234',
        userToken: 'token12345'
    },
    {
        id: 3,
        email: 'testuser@gmail.com',
        username: 'testuser',
        password: 'testpass',
        userToken: 'testtoken'
    },
]

const LoginScreen = ({ navigation }) => {
    const [dialogIsVisible, setdialogIsVisible] = useState(false)

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        isValidUser: true,
        isValidPassword: true,
    })


    const { signIn } = useContext(AuthContext)

    const textInputChange = (email) => {
        if (email.trim().length >= 4) {
            setData({
                ...data,
                email: email,
                check_textInputChange: true,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                email: email,
                check_textInputChange: false,
                isValidUser: false
            })
        }
    }

    const handlePasswordChange = (password) => {
        if (password.trim().length >= 8) {
            setData({
                ...data,
                password: password,
                isValidPassword: true
            })
        } else {
            setData({
                ...data,
                password: password,
                isValidPassword: false
            })
        }
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }

    const loginHandle = (userEmail, password) => {

        const foundUser = Users.filter(item => {

            return userEmail == item.email && password == item.password

        })

        if (data.email.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ])
            return
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ])
            return
        }
        signIn(foundUser)
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

    const Forgotdialogbox = () => {
        return (
            <DialogInput dialogIsVisible={dialogIsVisible} closeDialogInput={handleCancel}
                submitInput={(name) => handleConfirm(name)}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View style={[styles.errorMessage, { marginTop: 15 }]}>
                <Text style={styles.error}></Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Login</Text>
            </View>

            <View style={{ flex: 2 }}>
                <ScrollView>
                    <InputField placeholder='Email or phone number' value={data.email} onChangeText={email => textInputChange(email)} onEndEditing={(e) => handleValidUser(e.nativeEvent.text)} IconName='email' />

                    {data.isValidUser ? null :
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 10, textAlign: 'center', color: 'red' }}>Your Email is not valid</Text>
                        </View>
                    }

                    <InputField placeholder='Password' value={data.password} onChangeText={password => handlePasswordChange(password)} IconName='lock' secureTextEntry={true} />

                    {data.isValidPassword ? null :
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 10, textAlign: 'center', color: 'red' }}>Password must be 8 characters long.</Text>
                        </View>
                    }

                    {
                        dialogIsVisible
                        &&
                        <Forgotdialogbox />
                    }

                    <LoginSignUpButton handleButton={() => { loginHandle(data.email, data.password) }} ButtonName='Login' />

                    <TouchableOpacity onPress={showDialog} style={styles.forget}>
                        <Text style={{ fontSize: 12 }}>Forgot password? </Text>
                    </TouchableOpacity>

                    <LineOR />

                    <SocialButtons FacebookPress={FacebookPress} GooglePress={GooglePress} />

                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={() => navigation.navigate('Register')}>
                        <Text style={{ fontSize: 12 }}>
                            Don't have an account? <Text style={{ color: '#3ec0f0', textDecorationLine: 'underline' }}>SignUp</Text>
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default LoginScreen