import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Login from '../screens/login'
import Home from '../screens/home'

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {}
  },
  Login: {
    screen: Login,
    navigationOptions: {}
  }
})

export default createAppContainer(BottomTabNavigator)
