import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Stacks/AppStack';
import WelcomeStack from './src/Stacks/WelcomeStack';
import {useAppDispatch, useAppSelector} from './src/Redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setIsWelcomeDone} from './src/Redux/reducers/reducers';

type Props = {};

const Main = (props: Props) => {
  const {isWelcomeDone} = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();
  useEffect(() => {
    AsyncStorage.getItem('WELCOME_DONE').then(value => {
      if (value) {
        dispatch(setIsWelcomeDone(false));//true
      } else {
        dispatch(setIsWelcomeDone(false));
      }
    });
  }, []);
  return (
    <>
      <NavigationContainer>
        {isWelcomeDone ? <AppStack /> : <WelcomeStack />}
      </NavigationContainer>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({});
