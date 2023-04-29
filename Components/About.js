import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {useParams} from "react-router-native";
import { Image, StatusBar } from 'react-native'
const About = () => {
    const {about} = useParams();
  return (
    <>
        <StatusBar
            auto
            animated={true}
            backgroundColor="#61dafb"
          />
    
    <View className="bg-slate-50 px-3 mt-2">
    
    <Text className="px-3 text-4xl">about</Text>
    </View>
    </>
  )
}


export default About