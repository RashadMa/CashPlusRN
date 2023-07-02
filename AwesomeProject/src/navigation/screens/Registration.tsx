import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const Registration = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          flex: 1,
          marginTop: 50,
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: '600', marginBottom: 25 }}>
            Qeydiyyat
          </Text>
          <View style={{ marginBottom: 20, rowGap: 15 }}>
            <TextInput
              label="Mobil nömrə"
              mode="outlined"
              selectionColor="#000"
              outlineColor="#98A2B3"
              activeOutlineColor="#155EEF"
            />
            <TextInput
              label="FIN Code"
              mode="outlined"
              selectionColor="#000"
              outlineColor="#98A2B3"
              activeOutlineColor="#155EEF"
            />
            <TextInput
              label="Seriya Nömrəsi"
              mode="outlined"
              selectionColor="#000"
              outlineColor="#98A2B3"
              activeOutlineColor="#155EEF"
            />
            <View style={{ position: 'relative' }}>
              <TextInput
                label="Parol"
                mode="outlined"
                selectionColor="#000"
                outlineColor="#98A2B3"
                activeOutlineColor="#155EEF"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.togglePwdStyles}>
                {
                  showPassword ? <Text>Hide</Text> : <Text>Show</Text>
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#155EEF',
            paddingVertical: 16,
            borderWidth: 1,
            borderColor: '#155EEF',
            borderRadius: 8,
            marginTop: 20,
            marginBottom: 30,
          }}
          onPress={() => navigation.navigate('verification')}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
            Davam et
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  togglePwdStyles: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});