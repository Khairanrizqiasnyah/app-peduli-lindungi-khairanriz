import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen, LoginScreen, CovidTestScreen, ImunizationScreen, EhacScreen} from './Pages';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{headerShown: false}}/>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerTransparent: true,
                  title: "Made by Khairan",
                }}/>
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{headerShown: false}}/>
      <Stack.Screen
        name="CovidTestScreen"
        component={CovidTestScreen}
        options={{headerShown: true, 
                  title: "COVID - 19 Test Results" 
                }}/>
      <Stack.Screen
        name='ImunizationScreen'
        component={ImunizationScreen}
        options={{headerShown: true, 
                  title: "Vaccine and Immunization"
                }}/>
      <Stack.Screen
        name='EhacScreen'
        component={EhacScreen}
        options={{headerShown: true, 
                  title: "EHAC", 
                  headerTransparent: true
                }}/>
    </Stack.Navigator>
  );
};
