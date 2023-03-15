import {StyleSheet, View, Image, LayoutAnimation} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../Components/CustomButton/CustomButton';
import {Colors} from '../Constants/Colors';
import {responsive, WIDTH} from '../Constants/Helpers';
import {useAppDispatch} from '../Redux/store/store';
import {setIsOnBoardingDone} from '../Redux/reducers/reducers';

import OnBoarding1 from '../Components/OnBoardingScreens/OnBoarding1';
import OnBoarding2 from '../Components/OnBoardingScreens/OnBoarding2';
import OnBoarding3 from '../Components/OnBoardingScreens/OnBoarding3';

type Props = {};
const OnBoardingScreen = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useAppDispatch();

  const goAppWithStorage = async () => {
    await AsyncStorage.setItem('ONBOARDING', 'true');
    dispatch(setIsOnBoardingDone(true));
  };
  const actionButton = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(activeIndex + 1);
  };

  useEffect(() => {
    if (activeIndex === 3) {
      goAppWithStorage();
    }
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      {activeIndex === 0 ? (
        <OnBoarding1 />
      ) : activeIndex === 1 ? (
        <OnBoarding2 />
      ) : (
        <OnBoarding3 />
      )}
      <View style={styles.buttons}>
        <CustomButton
          onPress={() => {
            actionButton();
          }}
          text={activeIndex === 0 ? 'Get Started' : 'Continue'}
          textColor={Colors.white}
          fontSize={20}
          borderRadius={14}
          bgColor={Colors.green}
          width={WIDTH * 0.9}
          height={56}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkGray,
  },

  buttons: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: responsive(100),
  },
});
