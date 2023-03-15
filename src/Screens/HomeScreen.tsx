import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import PremiumModal from '../Components/PremiumModal/PremiumModal';
import {useAppDispatch, useAppSelector} from '../Redux/store/store';
import {setPremiumModal} from '../Redux/reducers/reducers';

const HomeScreen = () => {
  const {premium_modal_visible} = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPremiumModal());
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
      {premium_modal_visible && <PremiumModal />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
