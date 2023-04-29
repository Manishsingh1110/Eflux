import { StyleSheet, View, Text, Button, ScrollView, FlatList } from 'react-native'
import { WebView } from 'react-native-webview';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Link } from "react-router-native";
import { useEffect, useState } from 'react';
import ip from '../ip.json'
const Home = () => {
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
  return (
    <>
      <WebView
        source={{ html: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126040.48820692668!2d72.99850709761057!3d19.168455666009297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1selectric%20charging%20stations!5e0!3m2!1sen!2sin!4v1680192333662!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }}
      />
      <View className="absolute w-full bottom-14 h-48">
        <Swiper loop={false} showsButtons={false} className="focus:bg-white after:bg-transparent">
        {
          Station.map((item) => {

            return (
          <Link  underlayColor="#ffffff00" to={`/station/${item._id}`} key={item._id}>
            <View className="bg-gray-100  px-3 h-40 mt-2 m-3 rounded-lg">
              <Text className="p-3 text-2xl text-center">
                {item.Stationname}
              </Text>
              <View style={{
                flex: 1, flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
                <Text className="w-1/2"><Ionicons name='location' />  City  | {item.City}</Text>
                <Text className="w-1/2"> <Ionicons name='battery-charging' />  {item.Slot.length} Charging Ports</Text>
                <Text className="w-full mt-3 " > <Ionicons name='battery-charging' />  {item.Stationaddress}</Text>
              </View>
            </View>
          </Link> )})}
        </Swiper>
      </View>
    </>
  )
}

export default Home