import {
      StyleSheet,
      Text,
      SafeAreaView,
      TouchableOpacity,
      View,
} from 'react-native';
import React from 'react';
import Arrow from '../../assets/icons/Arrow';
import Tick from '../../assets/icons/Tick';

const CreditApproveScreen = ({ navigation }: any) => {
      return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                  <View
                        style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginHorizontal: 20,
                        }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                              <Arrow />
                        </TouchableOpacity>
                        <Text
                              style={{
                                    marginLeft: '35%',
                                    fontSize: 16,
                                    fontWeight: '500',
                              }}>
                              Təsdiq
                        </Text>
                  </View>
                  <View
                        style={{
                              marginHorizontal: 20,
                              marginTop: 40,
                        }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>Təsdiq</Text>
                        <View style={{ justifyContent: 'space-between', height: '100%' }}>
                              <View style={{ marginTop: 30 }}>
                                    <View
                                          style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                columnGap: 10,
                                                marginBottom: 20,
                                          }}>
                                          <Tick />
                                          <Text style={{
                                                fontSize: 16,
                                                fontWeight: '400',
                                                lineHeight: 24,
                                                top: -2,
                                          }}>
                                                İş yeri haqqında məlumatları ASAN Finance xidmətindən alınması
                                                üçün razılıq verirəm.
                                          </Text>
                                    </View>
                                    <View
                                          style={{
                                                flexDirection: 'row',
                                                columnGap: 10,
                                                marginBottom: 20,
                                                alignItems: 'flex-start',
                                          }}>
                                          <Tick />
                                          <Text style={{
                                                fontSize: 16,
                                                fontWeight: '400',
                                                lineHeight: 24,
                                                top: -2,
                                          }}>
                                                Akb-dən kredit tarixçəsinin əldə olunmasına razılıq verirəm.
                                          </Text>
                                    </View>
                                    <View
                                          style={{
                                                flexDirection: 'row',
                                                columnGap: 10,
                                                marginBottom: 20,
                                                alignItems: 'flex-start',
                                          }}>
                                          <Tick />
                                          <Text style={{
                                                fontSize: 16,
                                                fontWeight: '400',
                                                lineHeight: 24,
                                                top: -2,
                                          }}>
                                                Akb-dən kredit skor məlumatları əldə olunmasına razılıq verirəm.
                                          </Text>
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
                                          marginBottom: '30%',
                                    }}
                                    onPress={() => navigation.navigate('ordernumber')}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                                          Təsdiq et
                                    </Text>
                              </TouchableOpacity>
                        </View>
                  </View>
            </SafeAreaView>
      );
};

export default CreditApproveScreen;

const styles = StyleSheet.create({});