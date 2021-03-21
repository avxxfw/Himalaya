import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    );
  }
}

export default HomeTabs;
