import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';
import {Colors} from '../../Constants/Colors';
import {WIDTH, responsive} from '../../Constants/Helpers';

type Props = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const Tabbar = ({state, descriptors, navigation}: Props) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          console.log('here');

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}>
            {label.toString() === 'HomeScreen' && (
              <View style={[styles.tabItem]}>
                <Image
                  style={styles.icon}
                  source={
                    isFocused
                      ? require('../../Assets/TabbarIcons/homeSelected.png')
                      : require('../../Assets/TabbarIcons/home.png')
                  }
                />
                <Text style={[styles.iconText,{color:isFocused ? Colors.green : Colors.darkGray}]}>Home</Text>
              </View>
            )}
            {label.toString() === 'DiagnoseScreen' && (
              <View style={[styles.tabItem]}>
                <Image
                  style={styles.icon}
                  source={
                    isFocused
                      ? require('../../Assets/TabbarIcons/diagnoseSelected.png')
                      : require('../../Assets/TabbarIcons/diagnose.png')
                  }
                />
                 <Text style={[styles.iconText,{color:isFocused ? Colors.green : Colors.darkGray}]}>Diagnose</Text>
              </View>
            )}
            {label.toString() === 'CameraScreen' && (
              <View style={[styles.tabItemCamera]}>
                <Image
                  style={styles.iconCamera}
                  source={require('../../Assets/TabbarIcons/camera.png')}
                />
              </View>
            )}
            {label.toString() === 'MyGardenScreen' && (
              <View style={[styles.tabItem]}>
                <Image
                  style={styles.icon}
                  source={
                    isFocused
                      ? require('../../Assets/TabbarIcons/gardenSelected.png')
                      : require('../../Assets/TabbarIcons/garden.png')
                  }
                />
                 <Text style={[styles.iconText,{color:isFocused ? Colors.green : Colors.darkGray}]}>My Garden</Text>
              </View>
            )}
            {label.toString() === 'ProfileScreen' && (
              <View style={[styles.tabItem]}>
                <Image
                  style={styles.icon}
                  source={
                    isFocused
                      ? require('../../Assets/TabbarIcons/profileSelected.png')
                      : require('../../Assets/TabbarIcons/profile.png')
                  }
                />
                 <Text style={[styles.iconText,{color:isFocused ? Colors.green : Colors.darkGray}]}>Profile</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    height: responsive(100),
  },
  tabItemCamera: {
    marginTop: responsive(-25),
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  tabItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    marginTop: responsive(10),
  },
  icon: {
    resizeMode: 'contain',
    width: responsive(25),
    height: responsive(25),
  },
  iconCamera: {
    resizeMode: 'contain',
    width: responsive(80),
    height: responsive(80),
  },
  iconText:{
    marginTop:responsive(8),
    fontSize:responsive(14)
  }
});
