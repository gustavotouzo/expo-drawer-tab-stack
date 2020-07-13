import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import CustomHeader from '../components/CustomHeader';

export type Props = {
  navigation: any;
};

export default function ProfileScreen({ navigation }: Props) {

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Notifications Detail" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Notifications Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
