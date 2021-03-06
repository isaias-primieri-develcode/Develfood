import React from 'react';
// import RNBootSplash from 'react-native-bootsplash'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Register1} from '../screens/register/register.page1';
import {Register2} from '../screens/register/register.page2';
import {Register3} from '../screens/register/register.page3';
import {RegisterSucess} from '../screens/register/registerSucess.page';
import {Routes} from './index.routes';
import {Login} from '../screens/Login/login.page';

const Stack = createNativeStackNavigator();

export function LoginRoutes() {
  // useEffect(() => {
  //   RNBootSplash.hide({ fade: true })
  // }, [])
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="Register1"
        component={Register1}
      />
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="Register2"
        component={Register2}
      />
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="Register3"
        component={Register3}
      />
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="RegisterSucess"
        component={RegisterSucess}
      />
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="Routes"
        component={Routes}
      />
    </Stack.Navigator>
  );
}
