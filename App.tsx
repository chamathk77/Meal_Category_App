import React, { Component } from 'react'
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AllExpense from './src/screens/AllExpense'
import ManageExpense from './src/screens/ManageExpense'
import RecentExpense from './src/screens/RecentExpense'
import { GlobalStyles } from './constant/styles'
import { SvgUri } from 'react-native-svg'



const stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()


function ExpensesOverview() {
  return (
    <BottomTab.Navigator 
    screenOptions={{
      headerStyle: {backgroundColor:GlobalStyles.colors.primary500

    },
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500

    },
    tabBarActiveTintColor:GlobalStyles.colors.accent500
    

    }}>
      <BottomTab.Screen 
      name="RecentExpense" 
      component={RecentExpense}
      options={{
        title:'Recent Expense',
        tabBarLabel:'Recent',
        tabBarIcon:({color,size})=>{
          return <Image source={require('./assets/images/hourglass.png')} style={{width:size,height:size,tintColor:color}} />
          
        }
      }} 
      />
      <BottomTab.Screen 
      name='AllExpense' 
      component={AllExpense}
      options={{
        title:'All Expense',
        tabBarLabel:'All',
        tabBarIcon:({color,size})=>{
          return <Image source={require('./assets/images/calendar.png')} style={{width:size,height:size,tintColor:color}} />
        }
      }}
      />
    </BottomTab.Navigator>
  )
}
function App() {

  return (

    <>
      <NavigationContainer>

        <stack.Navigator>
          <stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />

          <stack.Screen name='ManageExpense' component={ManageExpense} />


        </stack.Navigator>



      </NavigationContainer>

    </>





  )
}


export default App

const styles = StyleSheet.create({

})
