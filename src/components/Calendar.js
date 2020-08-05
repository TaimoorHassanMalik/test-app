import React, { Component } from 'react';
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment';

const Calendar = () => {

    // const markedDatesFunc = date => {
    //     // Dot
    //     if (date.isoWeekday() === 5) { // Thursdays
    //         return {
    //             dots: [{
    //                 color: 'red',
    //                 selectedColor: 'red',
    //             }]
    //         };
    //     }
    //     return {};
    // }

    const markedDatesArray = [
        {
            date: moment().add(1, 'days'),
            dots: [
                {
                    color: 'red',
                    selectedColor: 'red',
                },
            ],
        },
        {
            date: moment().add(2, 'days'),
            dots: [
                {
                    color: 'red',
                    selectedColor: 'red',
                },
            ],
        },
    ];

    const dateHandler = (date) => {
        console.log('hi ', date)
    }

    return (
        <CalendarStrip
            scrollable
            selectedDate={moment()}
            startingDate={moment()}
            onDateSelected={dateHandler}
            style={{ height: 90, paddingTop: 0, paddingBottom: 10 }}
            calendarColor={'#3ec0f0'}
            calendarHeaderStyle={{ color: 'white', paddingBottom: 10 }}
            dateNumberStyle={{ color: 'white' }}
            dateNameStyle={{ color: 'white' }}
            iconContainer={{ flex: 0.1 }}
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            highlightDateNumberStyle={{ color: '#3ec0f0' }}
            highlightDateNameStyle={{ color: '#3ec0f0' }}
            disabledDateNameStyle={{ color: 'grey' }}
            disabledDateNumberStyle={{ color: 'grey' }}
            daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: 'white' }}
            iconContainer={{ flex: 0.1 }}
            markedDates={markedDatesArray}
        />
    );
};
export default Calendar;
