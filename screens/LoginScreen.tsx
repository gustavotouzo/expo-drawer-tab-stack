import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';

export type Props = {
  navigation: any;
};

export default function LoginScreen({navigation}: Props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Login Screen!</Text>
        <TouchableOpacity style={{marginTop: 20}}
        onPress={() => navigation.navigate('Home')}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20}}
          onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>
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
