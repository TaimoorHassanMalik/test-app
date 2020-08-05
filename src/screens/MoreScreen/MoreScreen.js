import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>More Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
export default MoreScreen;
