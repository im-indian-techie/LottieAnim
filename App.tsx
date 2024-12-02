import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const App = () => {
  const test=()=>{
   console.log("test");
   console.log("ashin");
   console.log("das");
  }
  return (
    <View style={{flex:1,backgroundColor:"#000",alignItems:'center',justifyContent:'center'}}>
      <LottieView testID="lottie-animation" source={require('./assets/welcome.json')}style={{height:300,width:300}} autoPlay loop/>
      <TouchableOpacity style={{backgroundColor:"red"}} onPress={()=>{
        test();
      }}>
        <Text style={{color:"#fff"}}>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})