import {StyleSheet, View, Image, LayoutAnimation} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../Components/CustomButton/CustomButton';
import {Colors} from '../Constants/Colors';
import {responsive, WIDTH} from '../Constants/Helpers';
import {useAppDispatch} from '../Redux/store/store';
import {setIsWelcomeDone} from '../Redux/reducers/reducers';

import WelcomePage1 from '../Components/WelcomePages/WelcomePage1';
import WelcomePage2 from '../Components/WelcomePages/WelcomePage2';
import WelcomePage3 from '../Components/WelcomePages/WelcomePage3';

type Props = {};
const WelcomeScreen = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useAppDispatch();

  const goAppWithStorage = async () => {
    await AsyncStorage.setItem('WELCOME_DONE', 'true');
    dispatch(setIsWelcomeDone(true));
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
        <WelcomePage1 />
      ) : activeIndex === 1 ? (
        <WelcomePage2 />
      ) : (
        <WelcomePage3 />
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

export default WelcomeScreen;

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
