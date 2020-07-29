import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const AppointmentCard = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.innerDetails} onPress={props.ButtonClick}>
                <View style={{ height: 100, }}>
                    <Image source={props.Image} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                    <View style={{ alignItems: 'flex-end', paddingRight: 5, }}>
                        <View style={{ width: 16, height: 16, marginTop: -95, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons
                                name="heart"
                                color="#3ec0f0"
                                size={13}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{props.Title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MaterialIcons
                            name="star"
                            color="orange"
                            size={15}
                        />
                        <Text style={{ fontSize: 9, marginTop: 3 }}>{props.Rating}</Text>
                    </View>
                </View>

                <Text style={{ paddingLeft: 10, color: 'gray', fontSize: 10 }}>{props.Type}</Text>

                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginHorizontal: 10 }} >
                    <Text style={{ color: 'gray', fontSize: 10 }}>4 ml</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialIcons
                            name="location-on"
                            color="#3ec0f0"
                            size={15}
                        />
                        <Text style={{ fontSize: 8, marginTop: 3, paddingLeft: 2 }}>{props.Location}</Text>
                    </View>
                    <View style={{ marginTop: -5, width: 25, height: 25, borderRadius: 50, backgroundColor: 'white', elevation: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 15, height: 15, backgroundColor: '#3ec0f0', borderRadius: 2, transform: [{ rotate: "45deg" }], alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ transform: [{ rotate: "140deg" }], alignItems: 'center', justifyContent: 'center', paddingRight: 4 }}>
                                <MaterialIcons
                                    name="subdirectory-arrow-left"
                                    color="white"
                                    size={13}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <EvilIcons
                            name="clock"
                            color="#3ec0f0"
                            size={15}
                        />
                        <Text style={{ fontSize: 9, color: '#3ec0f0' }}>{props.Time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    CalanderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    CalanderinnerDetails: {
        width: '100%',
        height: 40,
        backgroundColor: '#3ec0f0',
    },
    innerDetails: {
        width: 200,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 5,
        elevation: 5,
        marginHorizontal: 10
    }
});
export default AppointmentCard;
