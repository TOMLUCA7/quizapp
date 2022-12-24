import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/splash_logo.png')}
      />
      <TouchableOpacity style={styles.batton} onPress={() => {navigation.navigate('QuestionsScreen')}}>
        <Text style={styles.batton_text}>Let's Play</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#42B4EC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    batton: {
      paddingVertical: 14,
      alignItems: 'center',
      width: '80%',
      height: '8%',
      backgroundColor: '#ffff',
      borderRadius: 15,
      marginTop: 56,
      marginLeft: '2%',
    },
    batton_text: {
      fontWeight: 'bold',
      fontSize: 35,
      color: '#454545',
    },
});