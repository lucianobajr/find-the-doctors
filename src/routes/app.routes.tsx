import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import Home from '../pages/Home';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#eee'},
      }}>
      <App.Screen name="Main" component={Main} />
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};

export default AppRoutes;
