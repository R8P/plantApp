import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsive} from '../../Constants/Helpers';
import {Colors} from '../../Constants/Colors';

type Props = {
  onPress: () => void;
};
const PremiumCta = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.premiumCta}>
      <Image
        style={styles.messageIcon}
        source={require('../../Assets/message.png')}
      />
      <View style={styles.textCol}>
        <Text style={styles.ctaTextBold}>FREE Premium Available</Text>
        <Text style={styles.ctaText}>Tap to upgrade your account!</Text>
      </View>
      <Image style={styles.arrowIcon} source={require('../../Assets/arrow.png')} />
    </TouchableOpacity>
  );
};

export default PremiumCta;

const styles = StyleSheet.create({
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
