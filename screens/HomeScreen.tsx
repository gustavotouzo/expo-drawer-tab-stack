import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import ProfileScreen from './ProfileScreen';

export default function HomeScreen() {

  const Drawer = createDrawerNavigator();

  function CustomDrawerContent(props: any) {
    return (
      <ScrollView>
        <SafeAreaView style={{ flex:1 }}>
          <View style={{height: 150, alignItems: 'center', justifyContent:'center'}}>
            <Image 
              style={{height: 120, width: 120, borderRadius: 60}}
              source={require('../assets/images/profile.png')}
            />
          </View>
          <ScrollView>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => props.navigation.navigate('MenuTab')}>
                <Text>Menu Tab</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => props.navigation.navigate('Notifications')}>
                <Text>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 20}}>
                <Text>Sair</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={BottomTabNavigator} />
      <Drawer.Screen name="Notifications" component={ProfileScreen} />
    </Drawer.Navigator>
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
