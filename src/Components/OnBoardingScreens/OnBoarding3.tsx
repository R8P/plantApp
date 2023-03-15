import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH, responsive} from '../../Constants/Helpers';
import {Colors} from '../../Constants/Colors';

const OnBoarding3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Get plant</Text>
          <View>
            <Text style={styles.titleBold}>care guides</Text>
            <Image
              style={styles.brush}
              source={require('../../Assets/brush.png')}
            />
          </View>
        </View>
      </View>
      <Image style={styles.img} source={require('../../Assets/welcome3.png')} />
    </View>
  );
};

export default OnBoarding3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
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
  brush: {
    position: 'absolute',
    zIndex: 99,
    alignSelf: 'center',
    top: 34,
  },
  title: {
    fontSize: responsive(28),
    fontWeight: '500',
    color: Colors.black,
    marginRight: responsive(6),
  },
  titleBold: {
    color: Colors.black,
    fontSize: responsive(28),
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT,
  },
});
