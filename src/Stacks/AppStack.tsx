import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabbar from '../Components/Tabbar/Tabbar';

const App = createBottomTabNavigator();
const screenOptions = {
  tabbarStyle: {borderRadius: 15},
  headerShown: false,
};

const AppStack = () => {
  return (
    <App.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    //   tabBar={props => <Tabbar {...props} />}
      >
      <App.Screen name="HomeScreen" component={HomeScreen} />
    </App.Navigator>
  );
};

export default AppStack;
