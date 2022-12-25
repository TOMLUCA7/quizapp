import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        source={require('./../assets/splash_logo.png')}
      />
      <TouchableOpacity style={styles.batton} onPress={() => {navigation.navigate('QuestionsScreen')}}>
        <Animatable.Text 
          style={styles.batton_text} 
          animation="zoomIn" 
          iterationCount={31} 
          direction="alternate"
        > 
          Let's Play
        </Animatable.Text>
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