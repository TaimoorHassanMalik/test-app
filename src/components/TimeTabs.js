import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

class TimeTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickTab: true,
            T1: false,
            T2: false,
            T3: false,
            T4: false,
            T5: false,
            T6: true,
            T7: false,
            T8: false,
            T9: false,
            T10: false,
            TimeValue: ''
        }
    }

    T1 = () => {
        this.setState({ T1: true, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '11:00' })
    }
    T2 = () => {
        this.setState({ T1: false, T2: true, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '12:00' })
    }
    T3 = () => {
        this.setState({ T1: false, T2: false, T3: true, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '01:00' })
    }
    T4 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: true, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '02:00' })
    }
    T5 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: true, T6: false, T7: false, T8: false, T9: false, T10: false, TimeValue: '03:00' })
    }
    T6 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: true, T7: false, T8: false, T9: false, T10: false, TimeValue: '04:00' })
    }
    T7 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: true, T8: false, T9: false, T10: false, TimeValue: '05:00' })
    }
    T8 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: true, T9: false, T10: false, TimeValue: '06:00' })
    }
    T9 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: true, T10: false, TimeValue: '07:00' })
    }
    T10 = () => {
        this.setState({ T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: true, TimeValue: '08:00' })
    }


    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>

                    <TouchableOpacity onPress={this.T1} style={[styles.TabColor, { backgroundColor: this.state.T1 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T1 ? 'white' : 'black' }}>11:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T2} style={[styles.TabColor, { backgroundColor: this.state.T2 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T2 ? 'white' : 'black' }}>12:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T3} style={[styles.TabColor, { backgroundColor: this.state.T3 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T3 ? 'white' : 'black' }}>01:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T4} style={[styles.TabColor, { backgroundColor: this.state.T4 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T4 ? 'white' : 'black' }}>02:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T5} style={[styles.TabColor, { backgroundColor: this.state.T5 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T5 ? 'white' : 'black' }}>03:00</Text>
                    </TouchableOpacity>




                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={this.T6} style={[styles.TabColor, { backgroundColor: this.state.T6 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T6 ? 'white' : 'black' }}>04:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T7} style={[styles.TabColor, { backgroundColor: this.state.T7 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T7 ? 'white' : 'black' }}>05:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T8} style={[styles.TabColor, { backgroundColor: this.state.T8 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T8 ? 'white' : 'black' }}>06:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T9} style={[styles.TabColor, { backgroundColor: this.state.T9 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T9 ? 'white' : 'black' }}>07:00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.T10} style={[styles.TabColor, { backgroundColor: this.state.T10 ? '#3ec0f0' : 'white' }]}>
                        <Text style={{ color: this.state.T10 ? 'white' : 'black' }}>08:00</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    TabColor: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 30,
        // backgroundColor: this.state.allTabs ? 'red' : 'white',
        borderRadius: 5
    }
})
export default TimeTabs
