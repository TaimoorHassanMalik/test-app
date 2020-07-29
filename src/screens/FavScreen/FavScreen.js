import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavScreen = () => {
    return (
        <View style={styles.container}>
            <Text>FavScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default FavScreen;
