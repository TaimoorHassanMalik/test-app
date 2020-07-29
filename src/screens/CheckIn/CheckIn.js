import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ContainerBox from './ContainerBox'
import CheckCircle from './CheckCircle'
const CheckIn = (props) => {
    const [instruction, setInstruction] = useState('')
    const [accept, setAccept] = useState(false)
    const [reject, setReject] = useState(true)
    const [Q1Yes, setQ1Yes] = useState(false)
    const [Q1No, setQ1No] = useState(true)
    const [Q2Yes, setQ2Yes] = useState(false)
    const [Q2No, setQ2No] = useState(true)

    const accepthandler = () => {
        setAccept(true)
        setReject(false)
    }
    const rejectHandler = () => {
        setReject(true)
        setAccept(false)
    }

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
        <ScrollView style={styles.container}>
            <View style={{ marginTop: 10 }}>
                <Text style={{ textAlign: 'center' }}>Check in</Text>
            </View>
            <View style={{ marginTop: -20, paddingLeft: 10 }}>
                <MaterialIcons
                    name="arrow-back"
                    color="gray"
                    size={25}
                    onPress={() => props.navigation.goBack()}
                />
            </View>

            <ContainerBox />

            <View style={styles.ModalContainer}>
                <View style={[styles.innerDetails, { height: 130 }]}>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Instructions"
                            style={styles.textInput}
                            value={instruction}
                            onChangeText={value => setInstruction(value)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <CheckCircle title='Accept' checked={accept} onPress={accepthandler} />
                        <CheckCircle title='Do not Accept' checked={reject} onPress={rejectHandler} />
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 20, paddingLeft: 10 }}>
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
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('CheckInThankYou')}
                style={styles.button_container}>
                <View style={styles.button}>
                    <Text style={{ color: 'white' }}>Check in</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    ModalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    innerDetails: {
        width: '100%',
        height: 260,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 10,
        elevation: 5,
        marginHorizontal: 10
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 20
    },
    button: {
        width: 250,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3ec0f0',
        borderRadius: 3,
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginHorizontal: 10,
        marginTop: 25
    },
    textInput: {
        paddingLeft: 10,
        fontSize: 12
    },
});
export default CheckIn;
