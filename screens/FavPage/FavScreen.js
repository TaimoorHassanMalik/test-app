
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FavScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Fav Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default FavScreen;
