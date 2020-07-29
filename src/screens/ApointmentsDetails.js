//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Modal, Platform, FlatList } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styled from 'styled-components';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "native-base";
import { TimeSlots } from '../components/TimeSlots'
import Communications from 'react-native-communications'

const HorizontalLine = styled.View`
  border-width: 0.3px;
  border-color: lightgray;
  margin-top: 28;
`;
// create a component
class ApointmentsDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myDate: '',
            isDatePickerVisible: false,
            Default_Rating: 2,
            Max_Rating: 5,
            AdultPicker: 'Adult',
            ChildrenPicker: 'Children',
            ActiveTime: false
        }
        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }

    UpdateRating(key) {
        this.setState({ Default_Rating: key });
        //Keeping the Rating Selected in state
    }

    CheckIn() {
        alert('Welcome')
    }

    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true })
    };
    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false })
    };
    handleConfirm = date => {
        console.log('hhhhhh', date)
        this.setState({ myDate: date })
    }

    onValueChangeAdult = (value) => {
        console.log('hello ', value)
        this.setState({
            AdultPicker: value
        });
    }
    onValueChangeChildren = (value) => {
        this.setState({
            ChildrenPicker: value
        });
    }
    ActiveTimeHandler = (item) => {
        console.log('hhh ', item)
    }

    renderTimeSlots = ({ item }) => (
        <TouchableOpacity
            onPress={() => this.ActiveTimeHandler(item.time)}
            style={{ marginLeft: 15, marginBottom: 10 }}>
            <View style={{
                width: 50, height: 25,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <Text style={{ color: 'gray', fontSize: 16 }}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        let React_Native_Rating_Bar = [];
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.state.Max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.UpdateRating.bind(this, i)}>
                    <Image
                        style={styles.StarImage}
                        source={
                            i <= this.state.Default_Rating
                                ? { uri: this.Star }
                                : { uri: this.Star_With_Border }
                        }
                    />
                </TouchableOpacity>
            );
        }
        return (
            <ScrollView style={styles.container}>

                <View style={styles.ImageContaniner}>
                    <ImageBackground
                        source={require('../../assets/login/h.png')}
                        style={{ flex: 1 }}
                    >
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Appointments details</Text>
                        </View>

                        <View style={{ marginTop: -20, paddingLeft: 10 }}>
                            <MaterialIcons
                                name="arrow-back"
                                color="white"
                                size={25}
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: 200, height: 30, marginTop: 40, backgroundColor: '#4ca2c2' }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>20% off entire order today</Text>
                            </View>
                        </View>

                    </ImageBackground>
                </View>

                <View style={styles.ModalContainer}>
                    <View style={styles.innerDetails}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Fav Street Food</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 50 }}>
                                <View style={styles.IconContainer}>
                                    <AntDesign
                                        name="hearto"
                                        color="gray"
                                        size={15}
                                        onPress={() => alert('Heart Button click')}
                                    />
                                </View>
                                <View style={styles.IconContainer}>
                                    <AntDesign
                                        name="sharealt"
                                        color="gray"
                                        size={15}
                                        onPress={() => alert('Share button click')}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.childView}>
                            {React_Native_Rating_Bar}
                            <Text style={{ color: 'gray', fontSize: 9, textAlign: 'center', paddingLeft: 10 }}>{this.state.Default_Rating} / {this.state.Max_Rating} (345)</Text>
                        </View>

                        <Text style={{ paddingLeft: 10 }}>Chips</Text>
                        <Text style={{ textAlign: 'center', color: '#3ec0f0', fontSize: 12 }}>Your Appointments is on 06-06-2020,10:39 am</Text>

                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CheckIn')} style={{ width: 170, height: 30, borderColor: 'gray', borderWidth: 2, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center' }}>Check in</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={{ color: 'gray', textAlign: 'justify', padding: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', padding: 10 }}>Personal Safety Standards</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10 }}>
                    <View style={styles.PSafetyContainer}>
                        <Text style={styles.PSafetyContainerText}>Staff wears masks</Text>
                    </View>
                    <View style={styles.PSafetyContainer}>
                        <Text style={styles.PSafetyContainerText}>Sanitizing between visits</Text>
                    </View>
                    <View style={styles.PSafetyContainer}>
                        <Text style={styles.PSafetyContainerText}>Mask required</Text>
                    </View>
                </View>


                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginHorizontal: 10 }} >
                    <Text style={{ color: 'gray', marginTop: 20 }}>4 ml</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MaterialIcons
                            name="location-on"
                            color="#3ec0f0"
                            size={20}
                        />
                        <Text style={{ fontSize: 8, marginTop: 8 }}>5922 ony Highway,Dallas</Text>
                    </View>
                    <View style={{ width: 70, borderColor: '#3ec0f0', borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <MaterialIcons
                            name="location-on"
                            color="#3ec0f0"
                            size={15}
                        />
                        <Text style={{ textAlign: 'center', fontSize: 8 }}>Get Location  </Text>
                    </View>
                </View>

                <HorizontalLine />

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>No of guests</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10, }}>
                    <View style={{ width: 150, height: 30, borderColor: 'gray', borderWidth: 1 }}>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<MaterialIcons
                                name="keyboard-arrow-down"
                                color="gray"
                                size={15}
                            />}
                            style={{ width: undefined, alignItems: 'center', justifyContent: 'center', marginTop: -10 }}
                            selectedValue={this.state.AdultPicker}
                            onValueChange={this.onValueChangeAdult}
                        >
                            <Picker.Item label="Adult" value="Adult" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View>
                    <View style={{ width: 150, height: 30, borderColor: 'gray', borderWidth: 1 }}>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<MaterialIcons
                                name="keyboard-arrow-down"
                                color="gray"
                                size={15}
                            />}
                            style={{ width: undefined, marginTop: -10 }}
                            selectedValue={this.state.ChildrenPicker}
                            onValueChange={this.onValueChangeChildren}
                        >
                            <Picker.Item label="Children" value="Children" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Slots available</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'center', fontSize: 10 }}>16-16-2020</Text>
                        <MaterialCommunityIcons
                            name="calendar-month"
                            color="#3ec0f0"
                            size={25}
                            onPress={this.showDatePicker}
                        />
                    </View>
                    <DateTimePickerModal
                        isVisible={this.state.isDatePickerVisible}
                        mode="date"
                        onConfirm={this.handleConfirm}
                        onCancel={this.hideDatePicker}
                    />
                </View>

                <View style={{ marginTop: 10, paddingLeft: 10 }}>
                    <FlatList
                        vertical
                        showsVerticalScrollIndicator={false}
                        numColumns={5}
                        data={TimeSlots}
                        renderItem={this.renderTimeSlots}
                        keyExtractor={item => `${item.id}`}
                    />
                </View>


                <HorizontalLine />


                <TouchableOpacity onPress={() => Communications.phonecall('(+1)32456778', true)}
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MaterialIcons
                            name="phone"
                            color="#3ec0f0"
                            size={20}
                        />
                        <Text style={{ fontSize: 10, marginTop: 5, paddingLeft: 10 }}>Cal (+1) 32456778</Text>
                    </View>
                    <View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            color="#3ec0f0"
                            size={30}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert('Explore Menu page')}
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={require('../../assets/login/explore.png')} style={{ width: 20, height: 20 }} />

                        <Text style={{ fontSize: 10, marginTop: 5, paddingLeft: 10 }}>Explore Menu</Text>
                    </View>
                    <View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            color="#3ec0f0"
                            size={30}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Communications.web('https://web.facebook.com/')}
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={require('../../assets/login/visit.png')} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10, marginTop: 5, paddingLeft: 10 }}>Visit Website</Text>
                    </View>
                    <View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            color="#3ec0f0"
                            size={30}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert('Confirm Appointments Button press')}
                    style={styles.button_container}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Confirm Appointments</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert('Update Appointments Button press')}
                    style={[styles.button_container, { marginBottom: 10 }]}>
                    <View style={[styles.button, { backgroundColor: 'white', borderColor: '#3ec0f0', borderWidth: 1 }]}>
                        <Text style={{ color: '#3ec0f0' }}>Update Appointments</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ImageContaniner: {
        height: 170,
    },
    ModalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    },
    innerDetails: {
        width: '100%',
        height: 140,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: -50,
        borderWidth: 0.1,
        elevation: 5,
        marginHorizontal: 30
    },
    childView: {
        flexDirection: 'row',
        paddingLeft: 10
    },
    StarImage: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
    },
    button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    button: {
        width: 250,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3ec0f0',
        borderRadius: 3,
    },
    IconContainer: {
        elevation: 10,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    PSafetyContainer: {
        backgroundColor: '#4b4e54',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    PSafetyContainerText: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    }
});

//make this component available to the app
export default ApointmentsDetails;
