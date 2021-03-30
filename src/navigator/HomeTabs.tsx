import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import {View} from 'react-native';
import TopTabBarWrapper from '@/pages/views/TopTabBarwrapper';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };

  render() {
    return (
      <Tab.Navigator
        lazy
        tabBar={this.renderTabBar}
        tabBarOptions={{
          scrillEnabled: true,
          tabStyle: {
            width: 80,
          },
          indicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86442',
          },
          activeTintColor: '#f86442',
          inactiveTinColor: '#333',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: '推荐'}}
        />
      </Tab.Navigator>
    );
  }
}

export default HomeTabs;
