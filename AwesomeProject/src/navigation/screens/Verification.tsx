import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Verification = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 20,
      }}>
      <Text style={{
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: "#101828"
      }}>Verification</Text>
      <Text style={{
        marginVertical: 30,
        fontSize: 30,
        fontWeight: '500',
        color: "#101828"
      }}>
        OTP</Text>
      <Text style={{
        fontSize: 16,
        fontWeight: '400',
      }}>
        Please type the verification code sent to Email
      </Text>
    </SafeAreaView>
  )
}

export default Verification

const styles = StyleSheet.create({})