import React, { useEffect, useReducer, useMemo } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainTabScreen from './screens/Navigation/MainTabScreen'
import { AuthContext } from './screens/components/context'
import RootStackScreen from './screens/Navigation/RootStackScreen'
import AsyncStorage from '@react-native-community/async-storage'

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    signIn: async (foundUser) => {
      const userToken = String(foundUser[0].userToken)
      const userName = foundUser[0].username

      try {
        await AsyncStorage.setItem('userToken', userToken)
      } catch (e) {
        console.log(e)
      }
      console.log('user token: ', userToken)
      console.log('Found User: ', foundUser)

      dispatch({ type: 'LOGIN', id: userName, token: userToken })
    },
    signOut: async () => {

      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
      //Signup page pending
    },
  }), [])

  useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      // console.log('user token: ', userToken)
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? <MainTabScreen /> : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default App
