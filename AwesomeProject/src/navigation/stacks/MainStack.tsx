import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Registration from '../screens/Registration'
const Stack = createNativeStackNavigator()

const MainStack = () => {
      return (
            <>
                  <NavigationContainer>
                        <Stack.Navigator>
                              <Stack.Screen name='registration' component={Registration} />
                        </Stack.Navigator>
                  </NavigationContainer>
            </>
      )
}

export default MainStack

const styles = StyleSheet.create({})