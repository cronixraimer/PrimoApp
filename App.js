import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/tabs'

import { 
         
        Cashback,
        Cleaning,
        Login,
        Register,
        Schedule,
        User,
} from './screens'

const Stack = createStackNavigator();

const App = () => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator
           screenOptions={{headerShown: false}}
            initialRouteName = { 'Home' }>

              <Stack.Screen name='Tabs' component={Tabs} />
              <Stack.Screen name='Cashback' component={Cashback} />
              <Stack.Screen name='Cleaning' component={Cleaning} />
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Register' component={Register} />
              <Stack.Screen name='Schedule' component={Schedule} />
              <Stack.Screen name='User' component={User} />

            </Stack.Navigator>
      </NavigationContainer>

  )
}
export default App;