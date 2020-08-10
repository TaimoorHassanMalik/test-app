import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, Platform } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const FlatListCard = (props) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    return (
        <View>
            <View style={[styles.innerDetails, { width: windowWidth / 1.5, height: 110 }]}>
                <View style={styles.item}>
                    <View style={styles.image_container}>
                        <Image
                            source={props.Image}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ flex: 1, marginVertical: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.name}>{props.Name}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'gray' }}>{props.Type}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <MaterialIcons
                                name="location-on"
                                color="#3ec0f0"
                                size={12}
                            />
                            <Text style={{ fontSize: 8 }}>{props.Location}</Text>
                        </View>
                        {props.ButtonShow ? <View style={{ flex: 1 }}>
                            <View style={{ width: '95%', height: 20, backgroundColor: '#3ec0f0', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ color: 'white', fontSize: 9 }}>{props.Offer}</Text>
                            </View>
                        </View> : null
                        }

                    </View>
                </View>

                <View style={{ alignItems: 'flex-end', paddingRight: 3 }}>
                    <View style={{ marginTop: -86 }}>
                        {props.LikeButton ?
                            <MaterialCommunityIcons
                                name="heart-outline"
                                color="#3ec0f0"
                                size={25}
                            /> : null
                        }
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MaterialIcons
                            name="star"
                            color="orange"
                            size={15}
                        />
                        <Text style={{ fontSize: 9, marginTop: 3 }}>{props.Rating}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerDetails: {
        width: '60%',
        height: 220,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 5,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
            },
            android: {
                elevation: 5,
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue'
            }
        }),
        marginHorizontal: 10
    },
    item: {
        paddingVertical: 1,
        paddingHorizontal: 1,
        flexDirection: 'row',
        borderRadius: 10
    },
    image_container: {
        width: '50%',
        height: 90
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 11
    },
});
export default FlatListCard;
