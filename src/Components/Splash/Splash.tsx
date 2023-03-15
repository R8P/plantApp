import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';
import {responsive} from '../../Constants/Helpers';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: responsive(30),
  },
});
