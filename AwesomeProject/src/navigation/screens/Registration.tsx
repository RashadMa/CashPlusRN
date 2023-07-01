import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'

const Registration = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      margin: 20,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: "#101828"
      }}>Kreditlər</Text>
      <Text style={{
        marginVertical: 30,
        fontSize: 30,
        fontWeight: '500',
        color: "#101828"
      }}>
        Qeydiyyat</Text>
      <View>
        <TextInput
          mode="outlined"
          label="Mobil Nömrə"
          placeholder="Mobil Nömrə"
          right={<TextInput.Affix />}
          style={{
            marginBottom: 10,
            height: 60,
          }}
        />
        <TextInput
          mode="outlined"
          label="FIN Code"
          placeholder="FIN Code"
          right={<TextInput.Affix />}
          style={{
            marginBottom: 10,
            height: 60,
          }}
        />
        <TextInput
          mode="outlined"
          label="Seriya Nömrəsi"
          placeholder="Seriya Nömrəsi"
          right={<TextInput.Affix />}
          style={{
            marginBottom: 10,
            height: 60,
          }}
        />
        <TextInput
          secureTextEntry={true}
          mode="outlined"
          label="Parol"
          placeholder="Parol"
          right={<TextInput.Affix />}
          style={{
            marginBottom: 10,
            height: 60,
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={{
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          backgroundColor: '#155EEF',
          width: '100%',
          position: 'absolute',
          bottom: -320,
        }} onPress={() => navigation.navigate("verification")}>
          <Text style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
          }}>Davam et</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Registration

const styles = StyleSheet.create({})