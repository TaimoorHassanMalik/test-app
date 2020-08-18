import React from 'react';
import { Image } from 'react-native';
const Logo = () => {
    return (
        <Image
            source={require('../../assets/login/logo.png')}
            style={{ height: 100, width: 100 }}
        />
    );
};
export default Logo;
