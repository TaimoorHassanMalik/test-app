import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../HomePage/HomeScreen'
import AppointmentDetails from '../Appointment/AppointmentsDetails'
import CheckIn from '../CheckIn/CheckIn'
import CheckInQR from '../CheckIn/CheckInQR'
import SearchScreen from '../SearchPage/SearchScreen'
import MoreScreen from '../MorePages/MoreScreen'
import FavScreen from '../FavPage/FavScreen'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';


const HomeStack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (

  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#3ec0f0',
      inactiveTintColor: '#B8BBC4',
      showLabel: false
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#3ec0f0',
        tabBarIcon: ({ color }) => <Feather name="home" size={32} color={color} />
      }}
    />
    <Tab.Screen name="Search" component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: '#3ec0f0',
        tabBarIcon: ({ color }) => <EvilIcons name="search" size={32} color={color} />
      }}
    />
    <Tab.Screen name="FavScreen" component={FavScreen}
      options={{
        tabBarLabel: 'Fav Screen',
        tabBarColor: '#3ec0f0',
        tabBarIcon: ({ color }) => <EvilIcons name="heart" size={32} color={color} />
      }}
    />
    <Tab.Screen name="MoreScreen" component={MoreScreen}
      options={{
        tabBarLabel: 'More',
        tabBarColor: '#3ec0f0',
        tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={32} color={color} />
      }}
    />
  </Tab.Navigator>

);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />
    <HomeStack.Screen name="AppointmentDetails" component={AppointmentDetails}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />
    <HomeStack.Screen name="CheckIn" component={CheckIn}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />
    <HomeStack.Screen name="CheckInQR" component={CheckInQR}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />

  </HomeStack.Navigator>
);


