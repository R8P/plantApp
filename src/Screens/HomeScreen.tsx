import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
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
          <TouchableOpacity
            onPress={() => {
              dispatch(setPremiumModal());
            }}
            activeOpacity={0.8}
            style={styles.premiumCta}>
            <Image
              style={styles.messageIcon}
              source={require('../Assets/message.png')}
            />
            <View style={styles.textCol}>
              <Text style={styles.ctaTextBold}>FREE Premium Available</Text>
              <Text style={styles.ctaText}>Tap to upgrade your account!</Text>
            </View>
            <Image
              style={styles.arrowIcon}
              source={require('../Assets/arrow.png')}
            />
          </TouchableOpacity>
          <View style={styles.questionsArea}>
            <Text style={styles.questionsTitle}>Get Started</Text>
            <ScrollView horizontal={true}>
              {questions.map((item: QuestionsType, index: number) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.questionCard}
                    key={index}>
                    <Image
                      style={styles.questionImg}
                      source={{uri: item.image_uri}}
                    />
                    <View style={styles.questionTextBox}>
                      <Text style={styles.questionText}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.categoriesArea}>
            {categories.map((item: CategoriesType, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  style={styles.categoryCard}>
                  <Text style={styles.categoryText}>{item.title}</Text>
                  <Image
                    style={styles.categoryCardImg}
                    source={{uri: item.image.url}}
                  />
                </TouchableOpacity>
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
  questionCard: {
    marginRight: responsive(10),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  questionImg: {
    resizeMode: 'contain',
    width: responsive(240),
    height: responsive(164),
    borderRadius: 15,
  },
  questionTextBox: {
    position: 'absolute',
    bottom: 10,
    height: responsive(60),
    width: responsive(240),
    justifyContent: 'center',
    paddingHorizontal: responsive(14),
  },
  questionText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: responsive(15),
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
  categoryCard: {
    borderRadius: 12,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    borderWidth: 1,
    borderColor: Colors.categoryBorder,
    shadowOffset: {
      width: 2,
      height: 0,
    },
  },
  categoryText: {
    position: 'absolute',
    zIndex: 99,
    top: 16,
    left: 16,
    width: responsive(100),
    color: Colors.black,
    fontSize: responsive(16),
    fontWeight: '600',
  },
  categoryCardImg: {
    resizeMode: 'cover',
    borderRadius: 12,
    width: responsive(170),
    height: responsive(170),
  },
  premiumCta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.ctaBlack,
    marginHorizontal: responsive(24),
    borderRadius: 12,
    height: responsive(64),
    marginVertical: responsive(24),
    paddingHorizontal: responsive(20),
    justifyContent: 'space-between',
  },
  messageIcon: {
    resizeMode: 'contain',
    width: responsive(56),
    height: responsive(50),
  },
  arrowIcon: {
    resizeMode: 'contain',
    width: responsive(30),
    height: responsive(30),
  },
  textCol: {
    flexDirection: 'column',
  },
  ctaTextBold: {
    color: Colors.gold,
    fontWeight: '600',
    fontSize: responsive(18),
  },
  ctaText: {
    color: Colors.gold,
    fontSize: responsive(15),
  },
});
