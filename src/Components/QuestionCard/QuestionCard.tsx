import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { responsive } from '../../Constants/Helpers';
import { Colors } from '../../Constants/Colors';

type Props = {
  image_uri: string;
  text: string;
};
const QuestionCard = ({image_uri, text}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.questionCard}>
      <Image style={styles.questionImg} source={{uri: image_uri}} />
      <View style={styles.questionTextBox}>
        <Text style={styles.questionText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
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
});
