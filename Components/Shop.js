import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useEffect } from 'react'
import { StyleSheet, View, Button, ScrollView } from 'react-native'
import { Divider, Text } from 'react-native-elements'
import * as SecureStorage from 'expo-secure-store';
import ip from '../ip.json'
const Shop = (props) => {
  const [token, settoken] = React.useState('');
  const [profie, setProfile] = React.useState({ savedstationbooking: [], savedbatterybooking: [] })

  const handleconfirm = (Bookingid) => (e) => {
    e.preventDefault();
    confirmBookings(Bookingid)
  }
  const handleconfirmbattery = (Batterybookingid) => (e) => {
    e.preventDefault();
    confirmBattery(token, Batterybookingid)
  }
  const handledelete = (Bookingid) => {
    deleteBookings(token, Bookingid)
  }

  async function getValueFor(key) {
    let result = await SecureStorage.getItemAsync(key);
    if (result) {
      settoken(result)
    } else {
    }
  }

  const confirmBookings = async (deletebookingid) => {
    // Default options are marked with *
    console.log(token)
    const response = await fetch(`http://${ip.ip}:3001/app/deletebooking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8"
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ deletebookingid }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.deletedbooking) {
      getBookings(token)
      alert('Confirmed')
    } else {
      alert(json5.err)
    }
  }
  const confirmBattery = async (token, deletebookingid) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/deletebatterybooking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ deletebookingid }) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.savedBooking) {
      getBookings(token)
      alert("Confirmed")
    } else {
      alert(json5.err)
    }
  }
  const getProfileInfo = async (token) => {
    // Default options are marked with *
    const response = await fetch(`http://${ip.ip}:3001/app/getstationowner`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": token
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({}) // body data type must match "Content-Type" header
    });
    const json5 = await response.json()
    // console.log(json5)
    if (json5.data) {
      setProfile(json5.data)
    } else {
      // alert(json5)
    }
  }
  useEffect(() => {
    getValueFor("jwt-shop")
    getProfileInfo(token)
  }, [token])
  return (
    <View style={styles.container}>
      <ScrollView className="h-[93vh]">
        <Text style={styles.text}>Charging Slots</Text>
        <View className="flex flex-row flex-wrap">
          {
            profie.savedstationbooking.length > 0 ? (
              profie.savedstationbooking.map((slot) => {
                return (
                  <View style={styles.card} className="w-1/2" key={slot._id}>
                    <Text className="text-lg pb-2" >
                      {slot.Customer[0].Firstname}  {slot.Customer[0].Lastname}
                    </Text>
                    <Text className="pb-2"> <Ionicons name='calendar-outline' /> 15 March</Text>
                    <Text className="pb-1 h-6 overflow-hidden"> <Ionicons name='time' />{slot.Slot[0].Slotname}</Text>
                    <Text className="pb-1 h-6 overflow-hidden"> <Ionicons name='time' />{slot.Timeslot[0].Duration}</Text>
                    <View style={styles.button_grp}>
                      <Button title='Done' onPress={handleconfirm(slot._id)} color={'#32cd32'}></Button>
                      <Button title='Cancel' color={'#ff5733'}></Button>
                    </View>
                  </View>
                )
              }))
              : (
                <View>
                </View>
              )
          }
        </View>
        <Divider color='black'></Divider>
        <Text style={styles.text}>Battery Replacement</Text>
        <View>
          {
            profie.savedbatterybooking.length > 0 ? (
              profie.savedbatterybooking.map((slot) => {
                return (
                  <View style={styles.card} key={slot._id}>
                    <Text h4 style={{ padding: 5 }}>
                      {slot.Station[0].Stationname}
                    </Text>
                    <Text> <Ionicons name='calendar-outline' /> 15 March</Text>
                    <Text> <Ionicons name='time' />{slot.Battery[0].Batteryname}</Text>
                    <Text> <Ionicons name='time' />{slot.Battery[0].Batterycapacity}</Text>
                    <Text> <Ionicons name='time' />{slot.Station[0].Stationaddress}</Text>
                    <View style={styles.button_grp}>
                      <Button title='Confirm' onPress={handleconfirmbattery(slot._id)} color={'#32cd32'}></Button>
                      <Button title='Cancel' color={'#ff5733'}></Button>
                    </View>
                  </View>
                )
              }))
              : (
                <View>

                </View>

              )
          }
        </View>
      </ScrollView>
    </View>)
}
const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10
  },
  button_grp: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 25
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    paddingVertical: 25
  }
})
export default Shop