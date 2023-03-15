import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PremiumModal from '../Components/PremiumModal/PremiumModal';
import {useAppDispatch, useAppSelector} from '../Redux/store/store';
import {setPremiumModal} from '../Redux/reducers/reducers';
import {Colors} from '../Constants/Colors';
import {WIDTH, responsive} from '../Constants/Helpers';
import {TextInput} from 'react-native-gesture-handler';

import {
  AppStackParams,
  QuestionsType,
  CategoriesType,
} from '../Constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getCategories, getQuestions} from '../Redux/actions/actions';
import QuestionCard from '../Components/QuestionCard/QuestionCard';
import CategoryCard from '../Components/CategoryCard/CategoryCard';
import PremiumCta from '../Components/PremiumCta/PremiumCta';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'HomeScreen'>;
};
const HomeScreen = ({navigation}: Props) => {
  const {premium_modal_visible, questions, categories} = useAppSelector(
    state => state.global,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPremiumModal());
    dispatch(getQuestions());
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/homeBackground.png')}
        resizeMode="contain"
        style={styles.searchArea}>
        <View style={styles.searchBox}>
          <Text style={styles.title}>Hi, plant lover!</Text>
          <Text style={styles.titleBold}>Good Afternoon! ⛅</Text>
          <View style={styles.searchRow}>
            <TextInput
              style={styles.searchInput}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Search for plants"
            />
            <Image
              style={styles.searchIcon}
              source={require('../Assets/searchIcon.png')}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={{flex: 0.75}}>
        <ScrollView style={styles.contentArea}>
          <PremiumCta
            onPress={() => {
              dispatch(setPremiumModal());
            }}
          />
          <View style={styles.questionsArea}>
            <Text style={styles.questionsTitle}>Get Started</Text>
            <ScrollView horizontal={true}>
              {questions.map((item: QuestionsType, index: number) => {
                return (
                  <QuestionCard
                    key={index}
                    text={item.title}
                    image_uri={item.image_uri}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.categoriesArea}>
            {categories.map((item: CategoriesType, index: number) => {
              return (
                <CategoryCard
                  key={index}
                  image_uri={item.image.url}
                  text={item.title}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      {premium_modal_visible && <PremiumModal />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchBox: {
    paddingHorizontal: responsive(24),
    paddingTop: responsive(50),
  },
  searchArea: {
    flex: 0.25,
    resizeMode: 'contain',
    width: WIDTH,
  },
  contentArea: {
    flex: 1,
  },
  questionsArea: {
    flex: 0.25,
    paddingLeft: responsive(24),
  },
  questionsTitle: {
    color: Colors.black,
    fontSize: responsive(16),
    fontWeight: 'bold',
    marginBottom: responsive(16),
  },
  searchRow: {
    marginTop: responsive(20),
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 12,
    resizeMode: 'contain',
    width: responsive(24),
    height: responsive(24),
  },

  searchInput: {
    borderWidth: 1,
    borderColor: Colors.grayWhite,
    borderRadius: 12,
    paddingLeft: responsive(48),
    height: responsive(50),
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 0,
    },
  },
  title: {
    color: Colors.black,
    fontSize: responsive(16),
    marginBottom: responsive(10),
  },
  titleBold: {
    color: Colors.black,
    fontSize: responsive(24),
    fontWeight: '600',
  },

  categoriesArea: {
    flex: 1,
    paddingBottom: responsive(20),
    marginTop: responsive(24),
    marginHorizontal: responsive(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
});
