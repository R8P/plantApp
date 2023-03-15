import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsive} from '../../Constants/Helpers';
import {Colors} from '../../Constants/Colors';

type Props = {
  image_uri: string;
  text: string;
};
const CategoryCard = ({image_uri, text}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.categoryCard}>
      <Text style={styles.categoryText}>{text}</Text>
      <Image style={styles.categoryCardImg} source={{uri: image_uri}} />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
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
