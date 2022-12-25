import React, { useEffect, useState } from 'react'
import { View, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity,
} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GetQuestions from './GetQuestions';
import SuccessScreen from './SuccessScreen';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const QuestionsScreen = ({navigation}) => {

  const [questions, setQuestions] = useState('');
  const [ques, setQues] = useState(0);
  const [options, setOptions]= useState([]);
  const [score, setScore]= useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);

  const getQuiz = async() => {
    const api = 'https://opentdb.com/api.php?amount=20&category=18';
    const response = await fetch(api, {
      method: 'get'
    });
    const data = await response.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
  }

  useEffect(() => {
    getQuiz();
  }, []);

  const nextQuestion = () => {
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(questions[ques + 1]))
  }

  const generateOptionsAndShuffle = (Question) => {
    const options = [...Question.incorrect_answers]
    options.push(Question.correct_answer)
    shuffleArray(options)
    //console.log(options)
    return options
  }

  const ShowResult = () => {
    if(score <= 50 ){
      navigation.navigate('SuccessScreen', {score: score})
    }
    else{
      navigation.navigate('GetQuestions', {score: score})
    }
  } 


  const ShowQuestion = () =>{
    return(
      <View style={{marginTop: 20, marginBottom: 20,}}>
        <Text style={{fontSize: 22,}}>
          {decodeURIComponent(questions[ques].question)}
        </Text>
      </View>
    )
  }

  const validateAnswer = (selectedOption) => {
    let correct_option = questions[ques].correct_answer
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);

    if(selectedOption == correct_option){
      setScore(score + 5)
    }
  }

  const renderOptions = () => {
    return(
      <View>
        {
          options.map(option => (
            <TouchableOpacity
              onPress={()=> validateAnswer(option)}
              key={option}
              style={{
                  borderWidth: 3,
                  borderColor: option === correctOption
                  ? '#00C851'
                  : option === currentOptionSelected
                  ? '#ff4444' 
                  : '#D8E1E0',
                  height: 60, 
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  marginVertical: 10,
              }}
            >
              <Text style={{fontSize: 20, color: '#000000'}}>{option}</Text>

              {/* Show Check Or Cross Icon based on correct answer*/}
              {
                  option === correctOption ? (
                      <View style={styles.correctOption}>
                          <MaterialCommunityIcons 
                            name="check" 
                            style={{
                              color: '#ffff',
                              fontSize: 20
                            }}
                          />
                      </View>
                  ): option === currentOptionSelected ? (
                      <View style={styles.incorrectOption}>
                          <MaterialCommunityIcons 
                            name="close" 
                            style={{
                            color: '#ffff',
                            fontSize: 20
                            }}
                          />
                      </View>
                  ) : null
                }
            </TouchableOpacity>  
          ))
        }
      </View>
    )
  }


  return (
    <View style={styles.container}>

      {/* Header Part */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Questions {ques + 1} / {questions.length}</Text>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
      </View>

      {/* Questions Part */}
      {questions && (
        <View style={{marginTop: 20, marginLeft: 15, marginRight: 15}}>
          {/* difficulty */}
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>Level : {questions[ques].difficulty}</Text>
          
          {/* Questions */}
          {ShowQuestion()}
          
          {/* Answers / options */}
          {renderOptions()}
  
          {/* Bottom Next and Show results */}
          <View style={styles.bottom}>

          {ques !== 19 && <TouchableOpacity style={styles.button} onPress={nextQuestion}>
              <Text style={styles.button_text}>NEXT</Text>
            </TouchableOpacity>}

            { ques === 19 && <TouchableOpacity style={styles.button} onPress={ShowResult}>
              <Text style={styles.button_text}>RESULTS SCREEN</Text>
            </TouchableOpacity>}
            
          </View>
        </View>
      )}
    </View>
  )
}

export default QuestionsScreen

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
    backgroundColor: '#42B4EC', 
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

  button: {
    backgroundColor: '#42B4EC',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 5,
  },

  button_text: {
    color: '#ffff', 
    fontSize:20,fontWeight: 'bold'
  },

  bottom: {
    paddingVertical: 30,
    padding: 30,
    justifyContent: 'center',
  },

  correctOption: {
    width: 30, 
    height: 30, 
    borderRadius: 15,
    backgroundColor: '#51AE2D',
    justifyContent: 'center', 
    alignItems: 'center'
  },

  incorrectOption: {
    width: 30, 
    height: 30, 
    borderRadius: 15,
    backgroundColor: '#ff4444',
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

