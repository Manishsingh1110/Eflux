import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Link,
  useLocation } from "react-router-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Bottomnavigation = () => {
  var location = useLocation();
  
  return (
    <View className="justify-between px-5 py-1 absolute w-full bottom-[0vh] h-[8vh] flex flex-row" style={{"backgroundColor":"#033E3E"}}>
      <View underlayColor="#ffffff00" >
        <Link  underlayColor="#ffffff00" to="/home" className={`${location.pathname === "/home" ? "rounded-xl p-3 bg-white" : "rounded-2xl p-2.5"}`}>
          <View className="justify-center flex text-center">
            <View className="text-center w-full justify-center left-1/4">
              <Ionicons name='map-outline' color={`${location.pathname === "/home" ? "teal" : "white"}`} size={20} /></View>
            <View>
              <Text className={` ${location.pathname === "/home" ? "text-teal-700" : "text-white"}`}>Home</Text></View>
          </View>
        </Link>
      </View>
      <View>
        <Link  underlayColor="#ffffff00" to="/stats" className={`${location.pathname === "/stats" ? "rounded-xl p-3 bg-white" : "rounded-2xl p-2.5"}`}>
        <View className="justify-center flex text-center">
            <View className="text-center w-full justify-center left-1/4">
              <Ionicons name='stats-chart-outline' color={`${location.pathname === "/stats" ? "teal" : "white"}`} size={20} /></View>
            <View>
              <Text className={` ${location.pathname === "/stats" ? "text-teal-700" : "text-white"}`}>Stats</Text></View>
          </View>
        </Link>
      </View>
      <View>
        <Link  underlayColor="#ffffff00" to="/battery" className={`${location.pathname === "/battery" ? "rounded-xl p-3 bg-white" : "rounded-2xl p-2.5"}`}>
        <View className="justify-center flex text-center">
            <View className="text-center w-full justify-center left-1/4">
              <Ionicons name='battery-charging-outline' color={`${location.pathname === "/battery" ? "teal" : "white"}`} size={20} /></View>
            <View>
              <Text className={` ${location.pathname === "/battery" ? "text-teal-700" : "text-white"}`}>Swap</Text></View>
          </View>
        </Link>
      </View>
      <View>
        <Link  underlayColor="#ffffff00" to="/profile" className={`${location.pathname === "/profile" ? "rounded-xl p-3 bg-white" : "rounded-2xl p-2.5"}`}>
        <View className="justify-center flex text-center">
            <View className="text-center w-full justify-center left-1/4">
              <Ionicons name='person-circle-outline' color={`${location.pathname === "/profile" ? "teal" : "white"}`} size={20} /></View>
            <View>
              <Text className={` ${location.pathname === "/profile" ? "text-teal-700" : "text-white"}`}>Profile</Text></View>
          </View>
        </Link>
      </View>
    </View>
  )
}
export default Bottomnavigation