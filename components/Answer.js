import React,{useState} from 'react'
import { StyleSheet,View,TouchableOpacity,Text, TouchableHighlight } from 'react-native'
export default function Answer(props) {
    function callParent(){
        props.check(props.ans);
    }

    return (
    <View>
        <TouchableHighlight onPress={callParent} style={[styles.ansTouch,{backgroundColor:props.background? props.ans[1]?'green':'red':'#30445B'}]}>

        <Text style={styles.ansText}>
        {props.ans[0]}
            </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    ansContainer:{
        
    },
    ansText: {
        
     
      
      color:'white',
    //   textAlign:"center",
    marginLeft:30,
      fontSize:20,
      

    },
    ansTouch:{
        margin:10,
      backgroundColor:'#30445B',
      height:60,
      justifyContent:'center',
      marginLeft:10,
      marginRight:10,
      borderRadius:30,
    }
  
  });
  