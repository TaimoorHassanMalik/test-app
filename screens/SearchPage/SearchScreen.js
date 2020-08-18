import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../components/context';

const SearchScreen = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Button
                title="Logout"
                onPress={() => { signOut() }}
            />

        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
