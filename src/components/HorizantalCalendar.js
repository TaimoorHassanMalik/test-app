import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Agenda } from 'react-native-calendars';
const testIDs = require('./testIDs');

const HorizantalCalendar = (props) => {
    const [items, setItem] = useState({})

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => { newItems[key] = items[key]; });
            setItem(newItems)
        }, 1000);
    }

    const renderItem = (item) => {
        return (
            <TouchableOpacity
                testID={testIDs.agenda.ITEM}
                style={[styles.item, { height: item.height }]}
                onPress={() => Alert.alert(item.name)}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }

    const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
    }

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#3ec0f0' }}>
                <View style={styles.CalanderContainer}>
                    <View style={styles.CalanderinnerDetails}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10 }}>
                            <Text style={{ color: 'white' }}>Today</Text>
                            <Text style={{ color: 'white' }}>july 2020</Text>
                            <MaterialCommunityIcons
                                name="calendar-month"
                                color="white"
                                size={25}
                            />
                        </View>

                    </View>
                </View>

            </View>
            <Agenda
                testID={testIDs.agenda.CONTAINER}
                onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                onDayPress={(day) => { console.log('day pressed', day) }}
                // Callback that gets called when day changes while scrolling agenda list
                onDayChange={(day) => { console.log('day changed', day) }}
                // items={items}
                // scrollEnabled={true}
                // items={{
                //     '2020-07-26': [{name: 'item 1 - any js object'}],
                //     '2020-07-27': [{name: 'item 2 - any js object', height: 30}],
                //     '2020-07-28': [],
                //     '2020-07-29': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
                //   }}
                // loadItemsForMonth={loadItems}
                selected={new Date()}
                // renderItem={renderItem}
                // renderEmptyDate={renderEmptyDate}
                // rowHasChanged={rowHasChanged}
                // markingType={'period'}
                markedDates={{
                    '2020-07-26': { selected: true, marked: true, selectedColor: 'white' },
                    '2020-07-27': { marked: true },
                    '2020-07-28': { marked: true, dotColor: 'red', activeOpacity: 0 },
                }}
                // monthFormat={'yyyy'}
                theme={{
                    // calendarBackground: '#3ec0f0',
                    // agendaKnobColor: 'green',
                    // agendaDayTextColor: 'white',
                    // agendaDayNumColor: 'white',
                    // agendaTodayColor: 'red',
                    backgroundColor: '#ffffff',
                    calendarBackground: '#3ec0f0',
                    textSectionTitleColor: 'white',
                    textSectionTitleDisabledColor: 'yellow',
                    selectedDayBackgroundColor: 'white',
                    selectedDayTextColor: '#3ec0f0',
                    todayTextColor: 'red',
                    dayTextColor: 'white',
                    textDisabledColor: 'pink',
                    dotColor: 'red',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: 'white',
                    // indicatorColor: 'red',
                    // textDayFontFamily: 'monospace',
                    // textMonthFontFamily: 'monospace',
                    // textDayHeaderFontFamily: 'monospace',
                    // textDayFontWeight: '300',
                    // textMonthFontWeight: 'bold',
                    // textDayHeaderFontWeight: '300',
                    // textDayFontSize: 16,
                    // textMonthFontSize: 16,
                    // textDayHeaderFontSize: 16
                }}
            // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            // hideExtraDays={false}
            />


        </View>
    )
}

// define your styles
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
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});

export default HorizantalCalendar;
