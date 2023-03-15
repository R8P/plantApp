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
import {getCategories, getQuestions} from '../Redux/services/services';
import {
  AppStackParams,
  QuestionsType,
  CategoriesType,
} from '../Constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'HomeScreen'>;
};
const HomeScreen = ({navigation}: Props) => {
  const [questionList, setQuestionList] = useState<QuestionsType[]>([]);
  const [categoriesList, setCategoriesList] = useState<CategoriesType[]>([]);

  const {premium_modal_visible} = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(setPremiumModal());
    getQuestions().then((res: any) => {
      setQuestionList(res.data);
    });
    getCategories().then((res: any) => {
      setCategoriesList(res.data.data);
      console.log('categories', res.data.data);
    });
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
          <View style={styles.questionsArea}>
            <Text>Get Started</Text>
            <ScrollView horizontal={true}>
              {questionList.map((item: QuestionsType, index: number) => {
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
            {categoriesList.map((item: CategoriesType, index: number) => {
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
    // flex: 1,
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
});
