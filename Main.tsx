import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Stacks/AppStack';
import OnBoardingStack from './src/Stacks/OnBoardingStack';
import {useAppDispatch, useAppSelector} from './src/Redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setIsOnBoardingDone} from './src/Redux/reducers/reducers';
import Splash from './src/Components/Splash/Splash';

type Props = {};

const Main = (props: Props) => {
  const {isOnBoardingDone} = useAppSelector(state => state.global);
  const [splashState, setSplashState] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    AsyncStorage.getItem('ONBOARDING').then(value => {
      if (value) {
        dispatch(setIsOnBoardingDone(true));
      } else {
        dispatch(setIsOnBoardingDone(false));
      }
      setSplashState(false);
    });
  }, []);
  return (
    <NavigationContainer>
      {splashState ? (
        <Splash />
      ) : isOnBoardingDone ? (
        <AppStack />
      ) : (
        <OnBoardingStack />
      )}
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
