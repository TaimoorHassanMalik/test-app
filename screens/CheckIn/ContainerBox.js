import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ContainerBox = (props) => {
    return (
        <View style={styles.ModalContainer}>
            <View style={styles.innerDetails}>
                <View style={{ height: 130 }}>
                    <Image source={require('../../assets/login/h.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                    <View style={{ alignItems: 'flex-end', paddingRight: 5, }}>
                        <View style={{ width: 16, height: 16, marginTop: -125, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons
                                name="heart"
                                color="#3ec0f0"
                                size={13}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Fav Street Food</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MaterialIcons
                            name="star"
                            color="orange"
                            size={15}
                        />
                        <Text style={{ fontSize: 9, marginTop: 3 }}>4.9(345)</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MaterialIcons
                            name="phone"
                            color="#3ec0f0"
                            size={15}
                        />
                        <Text style={{ fontSize: 9, marginTop: 2, paddingLeft: 3 }}>(+1) 32456778</Text>
                    </View>
                </View>

                <Text style={{ paddingLeft: 10, marginTop: 15, color: 'gray', fontSize: 10 }}>Chinese</Text>

                <View style={{ flexDirection: 'row', marginTop: 15, paddingLeft: 5 }}>
                    <MaterialIcons
                        name="location-on"
                        color="#3ec0f0"
                        size={15}
                    />
                    <Text style={{ fontSize: 8, marginTop: 3, paddingLeft: 2 }}>5922 ony Highway,Dallas</Text>
                </View>

                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginHorizontal: 10 }} >
                    <Text style={{ color: 'gray', fontSize: 8 }}>4 ml (10 min)</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginHorizontal: 10 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <EvilIcons
                            name="clock"
                            color="#3ec0f0"
                            size={15}
                        />
                        <Text style={{ fontSize: 9, color: '#3ec0f0' }}>03:00 pm (in 4 hrs)</Text>
                    </View>

                    <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'orange' }}>{props.YouAreCheckIn}</Text>
                    <View style={{ paddingRight: 12 }}>
                        <View style={{ marginTop: -5, width: 25, height: 25, borderRadius: 50, backgroundColor: 'white', elevation: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 15, height: 15, backgroundColor: '#3ec0f0', borderRadius: 2, transform: [{ rotate: "45deg" }], alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ transform: [{ rotate: "130deg" }], alignItems: 'center', justifyContent: 'center', paddingRight: 4 }}>
                                    <MaterialIcons
                                        name="subdirectory-arrow-left"
                                        color="white"
                                        size={13}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
            },
            android: {
                elevation: 5
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue'
            }
        }),
        marginHorizontal: 10
    },
});
export default ContainerBox;
