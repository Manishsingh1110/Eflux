import React, { useEffect, useState } from 'react'
import { Button, ScrollView, Linking } from 'react-native'
import { View, Image, Text } from 'react-native'
import ip from '../ip.json'
import * as SecureStorage from 'expo-secure-store'
import { useParams } from "react-router-native";
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import { useNavigate } from 'react-router'
const Bookbattery = () => {
  const { id } = useParams();
  var history = useNavigate();
  const [Station, setStation] = useState([]);
  const [token, settoken] = React.useState('');
  async function getValueFor(key) {
      let result = await SecureStorage.getItemAsync(key);
      if (result) {
          settoken(result)
      } else {
      }
  }
  const getStation = async (id) => {
      // Default options are marked with *
      const response = await fetch(`http://${ip.ip}:3001/app/getstationid`, {
          method: "POST",
          headers: {
              "Content-type": "application/json;charset=UTF-8",
          },
          // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({ id }) // body data type must match "Content-Type" header
      });
      const json5 = await response.json()
      // console.log(json5)
      if (json5.savedStation) {
          setStation(json5.savedStation)
      } else {
          console.log(json5)
      }
  }
  const [Battery, setSlot] = React.useState('');
  const [selectedDate, setSelectedDate] = useState('');
  useEffect(() => {
      getValueFor("jwt-token")
  }, [token])
  useEffect(() => {
      getStation(id)
  }, [Station])


  const addBookings = async (token, Battery,Stationid, Date) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/addbatterybooking`, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "auth-token": token
        },
        // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ Battery,Stationid, Date }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedBooking) {
        alert('Booking Sucess')
        history("/profile")
    } else {
        alert(json5.errors)
    }
}
const handleclick = () => {
    console.log(Battery, id, selectedDate)
    addBookings(token, Battery, id, selectedDate)
}

  return (
    <View>
            <View>
                {Station ? (Station.map((item) => {
                    return (
                        <ScrollView className="bg-white h-[90vh]" key={item._id}>
                            <View>
                                <Text className="text-2xl mt-5 pb-5  text-teal-900 px-5">Available Slots</Text>
                            </View>
                            <View className="flex px-10 flex-wrap flex-row ">
                                {
                                    item.Battery.map((slot) => {
                                        return (
                                            <View className="flex flex-row flex-wrap">
                                                <RadioButton key={slot._id}
                                                    value={slot.Batteryname}
                                                    status={Battery === slot._id ? 'checked' : 'unchecked'}
                                                    onPress={() => setSlot(slot._id)}
                                                    color='#033E3E'
                                                />
                                                <Text className="text-lg mt-1 text-teal-900 px-2">{slot.Batteryname}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View>
                                <Text className="text-2xl mt-2 text-teal-900 px-5">Select the Date</Text>
                            </View>
                            <View className="px-5">
                                <DatePicker
                                    className="px-5"
                                    onSelectedChange={date => setSelectedDate(date)}
                                /></View>
                            <View className="px-5">
                                <Button className="h-6 w-full"
                                    title="Book"
                                    onPress={handleclick}
                                    color="#006d5b"
                                /></View>
                        </ScrollView>
                    )
                })) : (<Text classname="text-2xl">{id}</Text>)}
            </View>
        </View>
  )
}

export default Bookbattery