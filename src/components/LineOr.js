import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LineOR = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10 }}>
            <View>
                <Text style={{ color: 'lightgray' }}>---------------------------------</Text>
            </View>

            <View>
                <Text style={{ color: 'lightgray' }}>OR</Text>
            </View>

            <View>
                <Text style={{ color: 'lightgray' }}>---------------------------------</Text>
            </View>
        </View>
    );
};
export default LineOR;
