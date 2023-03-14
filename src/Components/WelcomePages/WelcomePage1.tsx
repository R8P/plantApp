import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH, responsive} from '../../Constants/Helpers';
import {Colors} from '../../Constants/Colors';

const WelcomePage1 = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.titleBold}>PlantApp</Text>
        </View>
        <Text style={styles.subTitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <Image style={styles.img} source={require('../../Assets/welcome1.png')} />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          By tapping next, you are agreeing to PlantID
        </Text>
        <View style={styles.bottomTextRow}>
          <Text style={styles.underLineText}>Terms of Use</Text>
          <Text style={styles.symbol}>&</Text>
          <Text style={styles.underLineText}>Privacy Policy.</Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage1;

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    zIndex: 99,
    top: responsive(70),
    marginHorizontal: responsive(24),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH * 0.7,
    marginBottom: responsive(8),
  },
  title: {
    fontSize: responsive(28),
    color: Colors.black,
    marginRight: responsive(6),
  },
  titleBold: {
    fontSize: responsive(28),
    fontWeight: 'bold',
    color: Colors.black,
  },
  subTitle: {
    fontSize: responsive(16),
    color: Colors.textGray,
    width: WIDTH * 0.7,
  },
  img: {
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT,
  },
  bottomTextContainer: {
    position: 'absolute',
    zIndex: 99,
    bottom: responsive(50),
    alignSelf: 'center',
  },
  bottomTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontSize: responsive(11),
    color: Colors.textGray,
    marginBottom:responsive(4)
  },
  underLineText: {
    fontSize: responsive(11),
    color: Colors.textGray,
    textDecorationLine: 'underline',
  },
  symbol: {
    fontSize: responsive(11),
    color: Colors.textGray,
    marginHorizontal:responsive(4)
  },
});
