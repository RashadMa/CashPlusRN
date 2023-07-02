import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import CreditOrder from '../screens/CreditOrder'
import Registration from '../screens/Registration'
import Verification from '../screens/Verification'
import ConfirmCodeScreen from '../screens/Confirm'
const Stack = createNativeStackNavigator()

const MainStack = () => {
      return (
            <NavigationContainer>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='register' component={Registration} />
                        <Stack.Screen name='verification' component={Verification} />
                        <Stack.Screen name='creditorder' component={CreditOrder} />
                        <Stack.Screen name='confirm' component={ConfirmCodeScreen} />
                  </Stack.Navigator>
            </NavigationContainer>
      )
}

export default MainStack

const styles = StyleSheet.create({})