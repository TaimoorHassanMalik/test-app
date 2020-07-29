// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { WeekCalendar, CalendarList } from 'react-native-calendars';
// const testIDs = require('./testIDs');
// const MoreScreen = () => {
//     const [selectedDate, setSelectedDate] = React.useState('2020-05-16');
//     const [markedDates, setMarkedDates] = React.useState({});

//     const setNewDaySelected = (date) => {
//         const markedDate = Object.assign({});
//         markedDate[date] = {
//             selected: true,
//             selectedColor: '#DFA460'
//         };
//         setSelectedDate(date);
//         setMarkedDates(markedDate);
//     };
//     return (
//         <View style={styles.container}>
//             <Text>hi</Text>
//             <WeekCalendar />
//             <CalendarList
//                 testID={testIDs.horizontalList.CONTAINER}
//                 markedDates={markedDates}
//                 current={selectedDate}
//                 pastScrollRange={24}
//                 futureScrollRange={24}
//                 horizontal
//                 pagingEnabled
//                 onDayPress={(day) => {
//                     setNewDaySelected(day.dateString);
//                 }}
//             />
//         </View>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// });
// export default MoreScreen;


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MoreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MoreScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default MoreScreen;
