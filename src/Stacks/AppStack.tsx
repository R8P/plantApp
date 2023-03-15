import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabbar from '../Components/Tabbar/Tabbar';
import DiagnoseScreen from '../Screens/DiagnoseScreen';
import MyGardenScreen from '../Screens/MyGardenScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import CameraScreen from '../Screens/CameraScreen';

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
      tabBar={props => (
        <Tabbar
          navigation={props.navigation}
          descriptors={props.descriptors}
          state={props.state}
        />
      )}>
      <App.Screen name="HomeScreen" component={HomeScreen} />
      <App.Screen name="DiagnoseScreen" component={DiagnoseScreen} />
      <App.Screen name="CameraScreen" component={CameraScreen} />
      <App.Screen name="MyGardenScreen" component={MyGardenScreen} />
      <App.Screen name="ProfileScreen" component={ProfileScreen} />
    </App.Navigator>
  );
};

export default AppStack;
