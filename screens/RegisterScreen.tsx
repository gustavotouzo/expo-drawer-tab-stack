import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/CustomHeader';
import { Text, View } from '../components/Themed';

export type Props = {
  navigation: any;
};

export default function RegisterScreen({navigation}: Props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Register" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Register Screen!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
