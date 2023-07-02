import {
      SafeAreaView,
      StyleSheet,
      Text,
      TouchableOpacity,
      View,
} from 'react-native';
import React from 'react';
import Arrow from '../../assets/icons/Arrow';
import SvgNotification from '../../assets/icons/Notif';
import SvgSuccess from '../../assets/icons/Success';

const OrderConfirm = ({ navigation }: any) => {
      return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                  <View
                        style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginHorizontal: 20,
                        }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                              <Arrow />
                        </TouchableOpacity>
                        <Text
                              style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                              }}>
                              Müqavilə
                        </Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                              <SvgNotification />
                        </TouchableOpacity>
                  </View>
                  <View
                        style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                        }}>
                        <SvgSuccess />
                        <Text
                              style={{
                                    fontSize: 24,
                                    fontWeight: '500',
                                    lineHeight: 24,
                                    marginTop: 20,
                                    marginBottom: 5,
                              }}>
                              Müqavilə hazırdır
                        </Text>
                        <Text
                              style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                    color: '#344054',
                                    lineHeight: 24,
                                    width: '75%',
                                    textAlign: 'center',
                              }}>
                              Müqaviləni əldə etmək üçün üzərinə klikləyin.
                        </Text>
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
                              marginHorizontal: 20,
                        }}
                        onPress={() => navigation.navigate('CreditApprove')}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                              Müqaviləni imzala
                        </Text>
                  </TouchableOpacity>
            </SafeAreaView>
      );
};

export default OrderConfirm;

const styles = StyleSheet.create({});