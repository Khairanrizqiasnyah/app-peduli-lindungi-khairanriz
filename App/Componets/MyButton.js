import * as React from 'react';
import {
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const PrimaryButton=(props) =>{
    return (
      <TouchableOpacity  style={[styles.btnContainer, props.style]} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:'#239BD8',
        alignItems:"center",
        padding:10,
        borderRadius: 7
      },
      btnText:{
        color:"white",
        fontWeight:"bold",
        fontSize:18
      }
})

export default PrimaryButton;