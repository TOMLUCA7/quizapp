import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable';

const GetQuestions = ({navigation, route}) => {
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
        <Text style={styles.title}>FAILED</Text>
        <Text style={styles.message} >You need to answer 10</Text>
        <Text style={styles.message} >correct answers</Text>
        <Animatable.Text style={styles.score} 
          animation="pulse" 
          iterationCount={31} 
          direction="alternate"
        >
          Your Score : {score}
        </Animatable.Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center',}}>
        <Image
          source={require('./../assets/failed_character.png')}
        />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <TouchableOpacity style={styles.batton} onPress={() => {navigation.navigate('Home')}}>
          <Text style={styles.batton_text}> 
            <AntDesign 
              name='retweet' 
              size={27} 
              color='#ffff' 
            /> - 
            BACK TO START
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GetQuestions

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
    backgroundColor: '#E70E02', 
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
    padding: 30,
    marginTop: 50,
    backgroundColor: '#E70E02',
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
  title: {
    paddingTop: 30, 
    fontSize: 60, 
    fontWeight: 'bold', 
    color: '#E70E02'
  },
  score: {
    fontWeight: 'bold', 
    fontSize: 25, 
    color: '#E70E02'
  },
});