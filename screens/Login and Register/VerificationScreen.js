import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Logo from '../../../src/components/Logo';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'
import { ScrollView } from 'react-native-gesture-handler';

const VerificationScreen = (props) => {
    const [checkbox1, setCheckBox1] = useState(false)
    const [checkbox2, setCheckBox2] = useState(false)
    const [checkbox3, setCheckBox3] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer} >
                    <Logo />
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Verification</Text>
                    <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }} >Your email is unverified</Text>
                    <Text style={{ fontSize: 10, color: '#3ec0f0' }} >( Click to resend Verification email )</Text>
                </View>

                <Button IconName='email' TextName='johndoe@gmail.com' />

                <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                    <CheckBox
                        title='Email notifications related to appointments'
                        onPressHandle={() => setCheckBox1({ checkbox1: !checkbox1 })}
                        checked={checkbox1}
                    />
                    <CheckBox
                        title='Email notifications for special offers'
                        onPressHandle={() => setCheckBox2({ checkbox2: !checkbox2 })}
                        checked={checkbox2}
                    />
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }} >Your phone is unverified</Text>
                    <Text style={{ fontSize: 10, color: '#3ec0f0' }} >( Click to resend Verification phone number )</Text>
                </View>

                <Button IconName='phone' TextName='+1 214 432 5678' />

                <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                    <CheckBox title='Text notifications related to appointments'
                        onPressHandle={() => setCheckBox3({ checkbox3: !checkbox3 })}
                        checked={checkbox3}
                    />
                </View>

                <TouchableOpacity onPress={() => alert('Welcome')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <LinearGradient
                            colors={['#4ca2c2', '#3ec0f0']}
                            start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                            style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
                            onPress={() => props.navigation.navigate('App')}
                        >
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color="white"
                                size={30}
                            />
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
});
export default VerificationScreen;
