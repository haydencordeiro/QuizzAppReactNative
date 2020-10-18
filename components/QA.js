import React,{useState} from 'react'
import { StyleSheet,View,Text } from 'react-native'
import Answer from './Answer'

export default function QA(props) {
    // const [multiQuestions, setmultiQuestions] = useState([])

    // setmultiQuestions(temp);

    function check(ans){
        {props.UserSelect()};
        console.log(ans);
        if(ans[1]){
            {props.incremeantScore()};
        }
       
    }
    return (
        <View style={styles.question}>
            <Text style={styles.questionText}>{props.question['text']}</Text>
            <Answer ans={props.question['1']} check={check} background={props.backgroundChange} keyV={'1'}/>
            <Answer ans={props.question['2']} check={check} background={props.backgroundChange} keyV={'2'}/>
            <Answer ans={props.question['3']} check={check} background={props.backgroundChange} keyV={'3'}/>
            <Answer ans={props.question['4']} check={check} background={props.backgroundChange} keyV={'4'}/>



        </View>
    )
}

const styles = StyleSheet.create({
    question: {
        marginTop:20,
       flex:1,
      backgroundColor:'#242B3F',
      justifyContent:'flex-start'
  
  
    },
    questionText:{
        color:'white',
        fontSize:20,
        margin:10,
        marginLeft:20,
        marginRight:20,
        
    }
  
  });
  