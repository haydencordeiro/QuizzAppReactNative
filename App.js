import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Header from './components/header';
import QA from './components/QA';
import NextBtn from './components/nextBtn';
import ScoreComponent from './components/score'



export default function App() {
  const [backgroundChange, setbackgroundChange] = useState(false)
  const [Score, setScore] = useState(0)
  
  const [curentQuestion, setcurentQuestion] = useState(1)
  const [questions, setquestions] = useState({
    1:{'text':'Which agency has decided to conduct an al women space walk at the internation space station',
      '1':['NASA',true],
      '2':['SpaceX',false],
      '3':['DX',false],
      '4':['MX',false],
    },  
    2:{'text':'Which number is the biggest number and divisible by 5',
    '1':['1',false],
    '2':['22',false],
    '3':['50',true],
    '4':['31',false],
  },  
    3:{'text':'Which company was steve jobs the CEO',
    '1':['Orange',false],
    '2':['Apple',true],
      '3':['Samsung',false],
      '4':['LG',false],
    },  

    4:{'text':'Which number is neither prime nor composite',
    '1':['1',false],
    '2':['2',false],
    '3':['0',true],
    '4':['3',false],
  },      


  
  })


function incremeantScore(){

  setScore((Score+1));
 
}

function nextQuestion(){
  if(backgroundChange){
  setbackgroundChange(false);
  var lenghtDict =Object.keys(questions).length;
  var temp=curentQuestion+1;
  if(temp>lenghtDict){
    alert(`You have completed the quiz\nYour Score is ${Score}`);
    temp=1;

    setScore(0);

  }

  setcurentQuestion((temp));
}
else{
  alert('Please Select an Answer');
}
}

  return (
    <View style={styles.container}>
    <Header/>
<ScoreComponent score={Score} curentQuestion={curentQuestion} totalQuestion={Object.keys(questions).length}/>
        <QA question={questions[curentQuestion]} backgroundChange={backgroundChange} incremeantScore={incremeantScore} UserSelect={()=>{setbackgroundChange(true);}}   />


    <NextBtn  nextQuestion={nextQuestion}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor:'#242B3F',


  },

});

