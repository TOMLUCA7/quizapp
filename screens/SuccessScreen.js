import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo'

const SuccessScreen = ({navigation, route}) => {
  const {score} = route.params
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}></Text>
            <Image
            source={require('../assets/logo.png')}
            style={styles.image}
            />
        </View>

        <View style={{alignItems: 'center'}} >
            <Text style={styles.title}>GREAT JOB</Text>
            <Text style={styles.message} >You passed the quiz</Text>
            <Text style={styles.score} >Your Score : {score}</Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <Image
                source={require('./../assets/success_character.png')}
            />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <TouchableOpacity style={styles.batton} onPress={() => {navigation.navigate('Home')}}>
                <Text style={styles.batton_text}><Entypo name='trophy' size={27} color='#ffff' /> BACK TO START </Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default SuccessScreen


const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor:'#ffff',
    },
    image: {
      height: 60, 
      width: 60, 
      marginRight: 10,
      marginBottom: 5,
    },
    header: {
      width: '100%', 
      height: '12%', 
      backgroundColor: '#51AE2D', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'flex-end'
    },
    text_header: {
      fontWeight:'300%', 
      fontSize:23, 
      marginBottom: 15, 
      marginLeft: 15, 
      fontWeight: 'bold', 
      fontSize: 28, 
      color: '#ffff',
    },
    batton: {
      paddingVertical: 20,
      borderRadius: 16, 
      alignItems: 'center',
      padding:30,
      marginTop: 10,
      backgroundColor: '#51AE2D',
    },
    batton_text: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#ffff',
    },
    message: {
        fontWeight: 'bold', 
        fontSize: 25, 
    },
    score: {
        fontWeight: 'bold', 
        fontSize: 25, 
        color: '#51AE2D'
    },
    title: {
        paddingTop: 30, 
        fontSize: 60, 
        fontWeight: 'bold', 
        color: '#51AE2D'
    },
  });