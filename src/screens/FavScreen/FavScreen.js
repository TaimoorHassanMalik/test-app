// import React, { Component } from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// const FavScreen = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <Text>FavScreen</Text>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
// });

// export default FavScreen;

import React, { useState } from 'react';
import RadioButton from '../../components/RadioButton';
import { View, Text, StyleSheet,Button } from 'react-native';
const FavScreen = props => {
    const [gender, setGender] = useState('male');
    const [femaleCheck, setFemaleCheck] = useState(false);
    const [maleCheck, setMaleCheck] = useState(true);

    const maleRadioHandler = () => {
        if (femaleCheck) {
            setFemaleCheck(false);
            setMaleCheck(true);
            setGender('male');
        } else {
            setMaleCheck(true);
            setGender('male');
        }
    }


    const femaleRadioHandler = () => {
        if (maleCheck) {
            setMaleCheck(false);
            setFemaleCheck(true);
            setGender('female');
        } else {
            setFemaleCheck(true);
            setGender('female');
        }
    }

  

    return (
        <View style={styles.container}>
            <View style={{ ...styles.blockContainer, alignItems: 'center', flexDirection: 'row', marginHorizontal: 15, paddingHorizontal: 10 }}>
                {/* <View style={styles.headingContainer}><Text style={styles.headingText}>Gender:</Text></View> */}
                <RadioButton onPress={maleRadioHandler} checked={maleCheck} />
                <Text style={styles.radioText}>Male: </Text>
                <RadioButton checked={femaleCheck} onPress={femaleRadioHandler} />
                <Text style={styles.radioText}>Female: </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blockContainer: {
        backgroundColor: '#fff',
        width: '97%',
        marginLeft: 6,
        elevation: 3,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    headingText: {
        fontSize: 19,
        fontWeight: '400'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    headingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
    radioText: {
        marginHorizontal: 5,
        fontSize: 15
    },
})

export default FavScreen;