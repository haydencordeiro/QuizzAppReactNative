import React from 'react'
import { StyleSheet,View,TouchableOpacity,Text, TouchableHighlight } from 'react-native'


export default function NextBtn(props) {
    return (
     <>
<TouchableHighlight onPress={props.nextQuestion} style={styles.buttonTouch}>
  <Text style={styles.buttonText}>Next</Text>
  
</TouchableHighlight>

</>

    )
}

const styles = StyleSheet.create({
    buttonText: {
        
     
      
      color:'white',
      textAlign:"center",
      fontSize:40,
      padding:10,
      

    },
    buttonTouch:{
      position:'absolute',
      bottom:18,
      right:18,
      width:'91%',
      backgroundColor:'#E78230',
      height:70,
      justifyContent:'center',
      borderRadius:10,
    }
  
  });
  