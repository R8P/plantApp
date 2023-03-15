import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CameraScreen</Text>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
