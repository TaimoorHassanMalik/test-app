import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/Login and Register/LoginScreen';
import RegisterScreen from './src/screens/Login and Register/RegisterScreen'
import VerificationScreen from './src/screens/Login and Register/VerificationScreen'
import HomeScreen from './src/screens/Home/HomeScreen';
import AppointmentsDetails from './src/screens/AppointmentsDetails'
import CheckIn from './src/screens/CheckIn/CheckIn'
import CheckInThankYou from './src/screens/CheckIn/CheckInQR'
import SearchScreen from './src/screens/Search/SearchScreen'
import FavScreen from './src/screens/FavScreen/FavScreen'
import MoreScreen from './src/screens/MoreScreen/MoreScreen'

const AppContainer = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Feather name="home" size={32} color={tintColor} />
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <EvilIcons name="search" size={32} color={tintColor} />
      }
    },
    Heart: {
      screen: FavScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <EvilIcons name="heart" size={32} color={tintColor} />
      }
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Feather name="more-horizontal" size={32} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerShown: false,
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      activeTintColor: '#3ec0f0',
      inactiveTintColor: '#B8BBC4',
      showLabel: false,
    },
  }
);


const HomeStack = createStackNavigator(
  {
    Home: AppContainer,
    AppointmentsDetails: AppointmentsDetails,
    CheckIn: CheckIn,
    CheckInThankYou: CheckInThankYou,
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    },
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Verification: VerificationScreen,
},
  {
    defaultNavigationOptions: {
      headerShown: false
    },
  })
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: HomeStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
