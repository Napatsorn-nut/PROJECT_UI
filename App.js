import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Law from './screen/Law';
import Advice from './screen/Advice';
//import Before from './component/Before';
import After from './screen/After';
//import Advice from './component/Advice'
//import Food from './component/Food'
import Before from './screen/Before'


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{flex:1}}> 
      <NavigationContainer>

        <Stack.Navigator initialRouteName= 'Advice'>

          <Stack.Screen
          name='After'
          component={After}
          options={{ headerShown : false}}
          />

          <Stack.Screen 
          name="Law" 
          component={Law} 
          options={{ headerShown : false}}
          />

          <Stack.Screen 
          name="Before" 
          component={Before} 
          options={{ headerShown : false}}
          />

          <Stack.Screen 
          name="Advice" 
          component={Advice} 
          options={{ headerShown : false}}
          />
    
         
        </Stack.Navigator>


      </NavigationContainer>
      </View>
  );
}