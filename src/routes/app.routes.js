import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen 
      name="Login" 
      component={Login} 
      options={{
        headerShown: false
      }}
    />

    <AppStack.Screen 
      name="Home" 
      component={Home} 
      options={{
        headerShown: false
      }}
    />

  </AppStack.Navigator>
)

export default AppRoutes;