import React from 'react'
import { ScrollView } from 'react-native';
import { View, Image, Text, Button } from 'react-native'
import { Link } from "react-router-native";
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import ip from '../ip.json'
const Batteryswap = () => {
  var history = useNavigate();
  const [Station, setStation] = useState([])

  const getStation = async () => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/getstation`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({}) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedStation) {
      setStation(json5.savedStation)
    } else {
    }
  }
  useEffect(() => {
    getStation()
  }, [Station])
  const image = { uri: 'https://wallpapercave.com/wp/wp10068397.jpg' };
  return (
    <ScrollView className="h-screen">
      <View className="flex flex-wrap flex-row pb-14">
        {
          Station.map((item,i) => {
            return (
              <View className="w-1/2 p-2" key={i}>
                <Link underlayColor="#ffffff00" to={`/stationbattery/${item._id}`}>
                  <View class="bg-white">
                    <Image source={image} className="h-40" />
                    <View class="p-6">
                      <View className="py-1">
                        <Text
                          class="mb-5 text-xl font-bold  text-black">
                         {item.Stationname}
                        </Text>
                      </View>
                      <View className="pb-2 h-16 overflow-hidden">
                        <Text class="mb-4 text-base  text-slate-400">
                        {item.Stationaddress}
                        </Text></View>
                      <Button
                        onPress={() => history(`/stationbattery/${item._id}`)}
                        title="Explore"
                        color="#006d5b"
                      />
                    </View>
                  </View>
                </Link>
              </View>)
          })}
      </View>
    </ScrollView>
  )
}

export default Batteryswap