import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextInput = () => {


    // this.state = {
    //     focus : false,
    //     name  : ''
    //   }

    const { isActive } = this.state;
const customStyle = isActive ? styles.customText : {};
    return (
        <TextInput
            label='Email'
            value={this.state.text}
            style={customStyle}
            onFocus={() => this.setState({ isActive: true, })}
            onBlur={() => this.setState({ isActive: false, })}
            onChangeText={text => this.setState({ text })}
        />
        //     <TextInput 
        //     style={[styles.mText,this.state.focus? styles.textFocus : null]}
        //     placeholder=""
        //     onChangeText={(value) => this.setState({ name:value })}
        //     value={this.state.name}
        //     onFocus={()=>{this.setState({focus:true})}}
        //     onBlur={()=>{this.setState({focus:false})}}
        // />
    );
};
const styles = StyleSheet.create({
    mText: {
        backgroundColor: '#fff',
        padding: 5,
        height: 40,
        width: 300,
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: 1,
    },

    textFocus: {
        backgroundColor: '#eee',
        borderColor: "#5d05d5",
    },
});

export default TextInput;
