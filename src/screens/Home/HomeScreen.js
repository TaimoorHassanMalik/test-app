import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Restaurants, HairSalon, Gym, Appointments } from '../../components/TempData'
import Calandar from '../../components/Calandar'
import FlatListCard from './FlatListCard';
import AppointmentCard from './AppointmentCard';
import DateTimePickerModal from "react-native-modal-datetime-picker"
import HorizantalCalendar from '../../components/HorizantalCalendar'


const HomeScreen = (props) => {
    const [Notification, setNotification] = useState(true)
    const [AppointmentsNo, setAppointmentsNo] = useState(2)
    const [isDatePickerVisible, setisDatePickerVisible] = useState(false)
    const [TodayDate, setTodayDate] = useState('')


    const renderAppointments = ({ item }) => {
        return (
            <AppointmentCard ButtonClick={() => props.navigation.navigate('AppointmentsDetails', ({ item }))}
                Image={item.image} Title={item.name} Type={item.type} Location={item.location} Time={item.time} Rating={item.rate} LikeButton={true} />
        )
    }
    const renderRestaurants = ({ item }) => {
        return (
            <FlatListCard Image={item.image} Name={item.name} Type={item.type} Location={item.location} ButtonShow={true} Offer={item.offer} Time={item.time} Rating={item.rate} LikeButton={true} />
        )
    }
    const renderHairSalon = ({ item }) => {
        return (
            <FlatListCard Image={item.image} Name={item.name} Type={item.type} Location={item.location} ButtonShow={false} Offer={item.offer} Time={item.time} Rating={item.rate} LikeButton={true} />
        )
    }
    const renderGym = ({ item }) => {
        return (
            <FlatListCard Image={item.image} Name={item.name} Type={item.type} Location={item.location} ButtonShow={false} Offer={item.offer} Time={item.time} Rating={item.rate} LikeButton={true} />
        )
    }
    const showDatePicker = () => {
        setisDatePickerVisible(true)
    }
    const hideDatePicker = () => {
        setisDatePickerVisible(false)
    }
    const handleDate = date => {
        setisDatePickerVisible(false)
        const mdate = date.toString().split(" ");
        const completeDate = mdate[1] + " " + mdate[2] + ", " + mdate[3]
        setTodayDate(completeDate)
    }
    const ItemSeparatorComponent = () => {
        return (
            <View
                style={{
                    height: 10
                }}
            />
        )
    }


    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'flex-end', paddingRight: 10, }}>

                <View style={{ width: 10, height: 10, marginTop: 2, borderRadius: 50, backgroundColor: Notification ? 'red' : 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 5, textAlign: 'center', color: Notification ? 'white' : null }}>2</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: -8 }}>
                <MaterialIcons
                    name="arrow-back"
                    color='white'
                    size={25}

                />
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Home</Text>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons
                        name="bell-outline"
                        color="black"
                        size={25}
                        onPress={() => alert('Notification click')}
                    />
                </View>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                // datePickerModeAndroid={'spinner'}
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />

            {/* <View style={{ backgroundColor: '#3ec0f0' }}>
                <View style={styles.CalanderContainer}>
                    <View style={styles.CalanderinnerDetails}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10 }}>
                            <Text style={{ color: 'white' }}>Today</Text>
                            <Text style={{ color: 'white' }}>{TodayDate}</Text>
                            <MaterialCommunityIcons
                                name="calendar-month"
                                color="white"
                                size={25}
                                onPress={showDatePicker}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 30, backgroundColor: '#3ec0f0' }}>

                    <Text style={{ color: 'white' }}>M</Text>
                    <Text style={{ color: 'white' }}>T</Text>
                    <Text style={{ color: 'white' }}>W</Text>
                    <Text style={{ color: 'white' }}>Th</Text>
                    <Text style={{ color: 'white' }}>F</Text>
                    <Text style={{ color: 'white' }}>S</Text>
                    <Text style={{ color: 'white' }}>Su</Text>

                </View>
                <View>
                    <Calandar />
                </View>
            </View> */}
            <HorizantalCalendar />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginHorizontal: 10 }}>
                <Text style={{ color: 'gray' }}>06-06-2020</Text>
                <MaterialIcons
                    name="add-box"
                    color='#3ec0f0'
                    size={25}
                    onPress={() => setAppointmentsNo(0)}
                />
            </View>

            {AppointmentsNo >= 1 ?
                <View style={{ height: 210 }}>
                    <FlatList
                        horizontal
                        data={Appointments}
                        renderItem={renderAppointments}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                :
                <View style={{ paddingLeft: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 200, height: 120, borderRadius: 10, elevation: 10, backgroundColor: 'white', marginTop: 5, }}>
                        <Text style={{ color: 'gray', fontSize: 22 }}>No Appointments</Text>
                        <TouchableOpacity onPress={() => alert('Add New Appointment')} style={{ flexDirection: 'row', width: 130, height: 25, borderWidth: 1, borderRadius: 3, borderColor: '#3ec0f0', marginTop: 20, alignItems: 'center', justifyContent: 'space-around' }}>
                            <MaterialCommunityIcons
                                name="plus-thick"
                                color="#3ec0f0"
                                size={15}
                            />
                            <Text style={{ color: '#3ec0f0', fontSize: 10 }}>Add New Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }

            <View style={{ marginTop: 10, paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Available today</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 10, color: 'gray' }}>Restaurants</Text>
                <TouchableOpacity onPress={() => alert('View All Restaurants')}>
                    <Text style={{ fontSize: 10, color: 'green', fontWeight: 'bold' }}>View all</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 120 }}>
                <FlatList
                    horizontal
                    data={Restaurants}
                    renderItem={renderRestaurants}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 10, color: 'gray' }}>Hair Salon</Text>
                <TouchableOpacity onPress={() => alert('View all Hair Salon')}>
                    <Text style={{ fontSize: 10, color: 'green', fontWeight: 'bold' }}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 120 }}>
                <FlatList
                    horizontal
                    data={HairSalon}
                    renderItem={renderHairSalon}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 10, color: 'gray' }}>Gym</Text>
                <TouchableOpacity onPress={() => alert('View All Gym')}>
                    <Text style={{ fontSize: 10, color: 'green', fontWeight: 'bold' }}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 120 }}>
                <FlatList
                    horizontal
                    data={Gym}
                    renderItem={renderGym}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
});
export default HomeScreen;
