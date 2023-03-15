import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyGardenScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyGardenScreen</Text>
    </View>
  )
}

export default MyGardenScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});