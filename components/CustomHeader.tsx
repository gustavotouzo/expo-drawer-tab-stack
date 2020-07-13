import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';

export type Props = {
  title: string;
  isHome?: boolean;
  navigation: any;
};

export default function CustomHeader({title, isHome, navigation} : Props) {

  return (
    <View style={{ flexDirection: 'row',height: 50}}>
        <View style={{flex:1, justifyContent: 'center'}}>
          {
            isHome ?
              <TouchableOpacity onPress={() => { navigation.openDrawer();}}>
                <Image
                  style={{width: 30, height: 30, marginLeft: 5}}
                  source={require('../assets/images/menu.png')}
                  resizeMode="contain"
                /> 
              </TouchableOpacity>
                :
              <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}
                onPress={() => navigation.goBack()}>
                <Image
                  style={{width: 20, height: 20, marginLeft: 5}}
                  source={require('../assets/images/back.png')}
                  resizeMode="contain"
                />
                <Text>Back</Text>
              </TouchableOpacity>
          }
        </View>
        <View style={{flex:1.5, justifyContent:'center'}}>
          <Text style={{textAlign: "center"}}>
            {title}
          </Text>
        </View>
        <View style={{flex:1}}></View>
      </View>
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
