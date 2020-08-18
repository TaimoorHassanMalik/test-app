import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ContainerBox from './ContainerBox'
import CheckCircle from './CheckCircle'
import QRCode from 'react-native-qrcode-svg';
import RadioButton from '../components/RadioButton';

const CheckIn = (props) => {
    const [Q1Yes, setQ1Yes] = useState(false)
    const [Q1No, setQ1No] = useState(true)
    const [Q2Yes, setQ2Yes] = useState(false)
    const [Q2No, setQ2No] = useState(true)

    const Q1YesHandler = () => {
        setQ1Yes(true)
        setQ1No(false)
    }
    const Q1NOHandler = () => {
        setQ1No(true)
        setQ1Yes(false)
    }
    const Q2YesHandler = () => {
        setQ2Yes(true)
        setQ2No(false)
    }
    const Q2NOHandler = () => {
        setQ2No(true)
        setQ2Yes(false)
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center' }}>Thank You</Text>
                </View>
                <View style={{ marginTop: -20, paddingLeft: 10 }}>
                    <MaterialIcons
                        name="arrow-back"
                        color="gray"
                        size={25}
                        onPress={() => props.navigation.goBack()}
                    />
                </View>

                <ContainerBox YouAreCheckIn='You are checked in' />

                {/* <View style={{ marginTop: 20, paddingLeft: 10 }}>
                    <Text>Q.1: Have you had any fever in the last 48 hours?</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ marginTop: 5 }}>Ans:</Text>

                        <CheckCircle title='Yes' checked={Q1Yes} onPress={Q1YesHandler} />
                        <CheckCircle title='No' checked={Q1No} onPress={Q1NOHandler} />

                    </View>
                </View>

                <View style={{ marginTop: 20, paddingLeft: 10 }}>
                    <Text>Q.1: Do you have cough or flu like symtomns?</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ marginTop: 5 }}>Ans:</Text>

                        <CheckCircle title='Yes' checked={Q2Yes} onPress={Q2YesHandler} />
                        <CheckCircle title='No' checked={Q2No} onPress={Q2NOHandler} />

                    </View>
                </View> */}
                <View style={{ marginTop: 20, paddingLeft: 10 }}>
                    <Text>Q.1: Have you had any fever in the last 48 hours?</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20, }}>
                        <Text style={{ fontSize: 14 }}>Ans:</Text>
                        {/* <CheckCircle title='Yes' checked={Q2Yes} onPress={Q2YesHandler} /> */}
                        {/* <CheckCircle title='No' checked={Q2No} onPress={Q2NOHandler} /> */}
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton onPress={Q1YesHandler} checked={Q1Yes} />
                                <Text style={styles.radioText}>Yes</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <RadioButton onPress={Q1NOHandler} checked={Q1No} />
                                <Text style={styles.radioText}>No</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20, paddingLeft: 10 }}>
                    <Text>Q.1: Do you have cough or flu like symtomns?</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20, }}>
                        <Text style={{ fontSize: 14 }}>Ans:</Text>
                        {/* <CheckCircle title='Yes' checked={Q2Yes} onPress={Q2YesHandler} /> */}
                        {/* <CheckCircle title='No' checked={Q2No} onPress={Q2NOHandler} /> */}
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton onPress={Q2YesHandler} checked={Q2Yes} />
                                <Text style={styles.radioText}>Yes</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <RadioButton onPress={Q2NOHandler} checked={Q2No} />
                                <Text style={styles.radioText}>No</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 20 }}>
                    <Text style={{ marginBottom: 10, fontSize: 12, color: 'black' }}>Your check in code</Text>
                    <QRCode />
                </View>

                <TouchableOpacity onPress={() => alert('Welcome')}
                    style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                    <View style={styles.section}>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/appleWallet.png')} style={{ width: 60, height: 60 }} />

                        </View>
                        <View style={styles.input}>
                            <Text style={{ color: 'white', fontSize: 10 }}>Add to</Text>
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Apple Wallet</Text>
                        </View>
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
    section: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 10,
        width: 140,
        height: 50,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        justifyContent: 'center'
    },
    radioText: {
        fontSize: 10,
        paddingLeft: 10
    },
});
export default CheckIn;
