import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Link } from "react-router-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import SearchBar from "react-native-dynamic-search-bar";
const Header = () => {
  const [toggle, settoggle] = useState(false)
  const handleclick = (e) => {
    e.preventDefault();
    if (toggle) {
      settoggle(false)
    } else {
      settoggle(true)
    }
  }
  const list = [
    {
      title: 'Current Booking',
      icon: 'snow-outline',
      link: '/booking'
    },
    {
      title: 'History',
      icon: 'play-back',
      link: '/history'
    },
    {
      title: 'About',
      icon: 'trophy',
      link: 'Account'
    },
    {
      title: 'FAQ',
      icon: 'help-circle',
      link: 'FAQ'
    },
    {
      title: 'Help',
      icon: 'help-buoy',
      link: 'Help'
    },
    {
      title: 'Contact',
      icon: 'mail-unread',
      link: '/contact'
    }
  ]
  return (
    <View className="justify-between px-5 py-3 absolute w-full top-[0vh] z-50 h-[7vh] bg-white  flex flex-row" style={{ "backgroundColor": "#033E3E" }}>
      <View>
        <Ionicons name='grid-outline' onPress={handleclick} size={20} color={"white"} />
      </View>
      <View>
        <Link to="/">
          <View className="text-center w-full justify-center left-1/4">
            <Ionicons name='log-out-outline' size={20} color={"white"} /></View>
        </Link>
      </View>
      <View className={`h-[100vh] absolute ${toggle ? "opacity-100" : "hidden opacity-0"}  w-[100vw] transition-opacity bg-white`} >
        <View className="w-[80vw] h-[100vh] bg-teal-800">
          <View className="justify-between px-5 py-3 absolute w-full top-[0vh] z-50 h-[7vh] bg-white  flex flex-row" style={{ "backgroundColor": "#033E3E" }}>
            <View>
              <Text className="text-2xl  text-center text-white">Charge Up</Text>
            </View>
            <View>
              <View className="text-center w-full justify-center left-1/4">
                <Ionicons name='close-outline' onPress={handleclick} size={20} color={"white"} /></View>
            </View>
          </View>
          <View className="pt-20">
            <SearchBar
              fontColor="#c6c6c6"
              iconColor="#c6c6c6"
              shadowColor="#282828"
              cancelIconColor="#c6c6c6"
              backgroundColor="#ffffff"
              placeholder="Search here"
            />
            <View className="px-3 py-5">
              {
                list.map((item, i) => (
                  <Link to={item.link}>
                    <View className="flex flex-row">
                      <View className="flex flex-row px-5 py-5">
                        <Ionicons name={item.icon} size={20} color={"white"} />
                        <Text className="text-xl ml-5 text-white">{item.title}</Text>
                      </View>
                    </View>
                  </Link>
                ))
              }
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Header