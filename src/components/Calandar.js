
import React from 'react';
import { View } from 'react-native';
import { Agenda } from 'react-native-calendars';

const Calandar = (props) => {
    return (
        <Agenda
            items={{
                '2012-05-22': [{ name: 'item 1 - any js object' }],
                '2012-05-23': [{ name: 'item 2 - any js object', height: 80 }],
                '2012-05-24': [],
                '2012-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
            }}
            loadItemsForMonth={(month) => { console.log('trigger items loading') }}
            onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
            onDayPress={(day) => { console.log('day pressed') }}
            onDayChange={(day) => { console.log('day changed') }}
            selected={'2012-05-16'}
            minDate={'2012-05-10'}
            maxDate={'2012-05-30'}
            pastScrollRange={50}
            futureScrollRange={50}
            renderItem={(item, firstItemInDay) => { return (<View />); }}
            renderDay={(day, item) => { return (<View />); }}
            renderEmptyDate={() => { return (<View />); }}
            renderKnob={() => { return (<View />); }}
            renderEmptyData={() => { return (<View />); }}
            rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
            hideKnob={true}
            markedDates={{
                '2012-05-16': { selected: true, marked: true },
                '2012-05-17': { marked: true },
                '2012-05-18': { disabled: true }
            }}
            disabledByDefault={true}
            onRefresh={() => console.log('refreshing...')}
            refreshing={false}
            refreshControl={null}
            theme={{
                agendaDayTextColor: 'yellow',
                agendaDayNumColor: 'green',
                agendaTodayColor: 'red',
                agendaKnobColor: 'blue'
            }}
            style={{
                height: 80
            }}

            theme={{
                calendarBackground: '#3ec0f0',
                textSectionTitleColor: 'white',
                selectedDayBackgroundColor: 'white',
                selectedDayTextColor: '#3ec0f0',
                dotColor: 'red',
                selectedDotColor: 'green',
                indicatorColor: 'blue',
                'stylesheet.calendar.header': {
                    week: {
                        marginTop: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    },
                    // header: {
                    //     flexDirection: 'row',
                    //     justifyContent: 'space-between',
                    //     paddingLeft: 10,
                    //     paddingRight: 10,
                    //     marginTop: 6,
                    //     alignItems: 'center'
                    // },
                    // headerContainer: {
                    //     flexDirection: 'row'
                    // },
                    // monthText: {
                    //     fontSize: 10,
                    //     // fontFamily: ,
                    //     fontWeight: 'bold',
                    //     color: 'red',
                    //     margin: 10
                    // },
                    // arrow: {
                    //     padding: 10,
                    //     // ...appStyle.arrowStyle
                    // },
                    arrowImage: {
                        tintColor: 'green'
                    },
                    disabledArrowImage: {
                        tintColor: 'blue'
                    },
                    dayHeader: {
                        // marginTop: 2,
                        // marginBottom: 7,
                        width: 12,
                        textAlign: 'center',
                        fontSize: 10,
                        // fontFamily: ,
                        fontWeight: 'bold',
                        color: 'yellow'
                    },
                }
            }}
        />
    );
};
export default Calandar;