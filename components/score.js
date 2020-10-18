
import React from 'react'
import { StyleSheet,View ,Text} from 'react-native'
export default function ScoreComponent(props) {
    return (
<View style={styles.scoreContainer}>
    <Text style={styles.score}>Score:{props.score}</Text>
    <Text style={styles.questionNo}>{props.curentQuestion}/{props.totalQuestion}</Text>
</View>
    )
}
const styles = StyleSheet.create({
    score: {
        
 color:'white',
  
    fontSize:20,
    padding:30,
    paddingBottom:15,
    },
    scoreContainer:{
        // marginTop:15,
        // backgroundColor:'red',
        borderStyle:"solid",
        borderColor:'#242B3F',
        borderBottomColor:'white',
        borderWidth:1,
        
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'space-between'
    },
    questionNo:{
        color:'white',
        alignSelf:'flex-end',
        fontSize:20,
    paddingBottom:15,
    padding:30,
        
    }
  
  });
  