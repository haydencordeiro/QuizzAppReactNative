import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
      <Text style={styles.headerText}>Quizz</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
        height:90,
      backgroundColor:'#2C4058',
      
  
  
    },
    headerText:{
      color:'white',
      fontSize:40,
      paddingTop:25,
      paddingLeft:20,
          }
  
  });
  