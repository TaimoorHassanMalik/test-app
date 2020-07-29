//import liraries
import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from "firebase";

// create a component
class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        myName: '',
        myEmail: '',
        myPassword: '',
        mypic: '',
        myBalance: ''
    }
    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${userId}`).on('value', async snapshot => {
            const { name, email, balance, image, password } = snapshot.val()
            this.setState({ myName: name, myEmail: email, myPassword: password, myBalance: balance, mypic: image })
        })
    }
    render() {
        const { myName, myEmail, myPassword, myBalance, mypic } = this.state
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: '#3c3c3d' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 5, backgroundColor: 'white', marginHorizontal: 5, borderRadius: 20 }}>
                        <Image source={{ uri: mypic }} style={styles.profile} />
                        <Text style={styles.name}>{myName}</Text>
                    </View>
                </View>

                <View style={{ flex: 3, backgroundColor: 'white', marginHorizontal: 5, marginVertical: 5, borderRadius: 20 }}>
                    <DrawerNavigatorItems {...this.props} />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#3c3c3d'
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FB862F', // #414272  #FB862F
        marginTop: 10
    },
    name: {
        color: '#8a773b',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: -4
    }
});

//make this component available to the app
export default Sidebar;
