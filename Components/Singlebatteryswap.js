import React, { useEffect, useState } from 'react'
import { Button, ScrollView } from 'react-native'
import { View, Image, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ip from '../ip.json'
import * as SecureStorage from 'expo-secure-store'
import { useParams } from "react-router-native";
import { Link } from "react-router-native";
const image = { uri: "https://images.hindustantimes.com/img/2022/01/28/1600x900/4f422c8e-8072-11ec-862a-ad8c40546e4c_1643398983603.jpg" }
const Singlebatteryswap = () => {
    const { id } = useParams();
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
    useEffect(() => {
        getValueFor("jwt-token")
    }, [token])
    useEffect(() => {
        getStation(id)
    }, [Station])
    return (
        <View>
            {Station ? (Station.map((item) => {
                return (
                    <ScrollView className="h-[92vh] bg-slate-100">
                        <View className="p-1 shadow-2xl">
                            <Image source={image} resizeMode="cover" className="h-48 p-2 rounded-md" />
                        </View><View>
                            <Text className="text-3xl text-center text-teal-900 my-3">{item.Stationname}</Text>
                            <View className="flex flex-row justify-between px-5">
                                <View>
                                    <Text className="text-xl text-teal-900 mt-1"><Ionicons name='location' size={25} ></Ionicons> City  | {item.City}</Text>
                                    <Text className="text-xl  text-teal-900 mt-1"><Ionicons name='call' size={25}></Ionicons> Phone | {item.Phone}</Text>
                                </View>
                                <View>
                                    <View className="w-14 h-14 p-2">
                                        <View className="bg-teal-700 w-14 h-14 rounded-lg justify-center  p-2" onPress={ ()=>{ Linking.openURL(item.Link)}}>
                                            <Ionicons name='locate-outline' color={"white"} style={{ fontSize: 30, left: 5 }} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text className="text-lg mt-5 text-teal-900 px-5">Available Slots</Text>
                        </View>
                        <View className="flex flex-wrap flex-row pb-5">
                            {
                                item.Battery.map((slot) => {
                                    return (
                                        <View className="w-1/2 mt-2 h-20 p-2">
                                            <View className="bg-teal-700 h-20 rounded-lg justify-center p-2" >
                                                <Text className="text-center text-white mb-2">  Battery | {slot.Batteryname}</Text>
                                                <Text className="text-center text-white">Capacity | {slot.Batterycapacity}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }

                        </View>
                        <View className="flex flex-wrap flex-row justify-between px-7 pb-4 mt-5">
                            <View className="bg-teal-700 w-full h-10 rounded-lg justify-center p-1" style={{ "backgroundColor": "#033E3E" }}>
                            <Link underlayColor="#ffffff00" to={`/bookstationbattery/${item._id}`}>
                                    <Text className="text-center text-white">Book</Text>
                                </Link>
                            </View>
                        </View>
                    </ScrollView>
                )
            })) : (<Text classname="text-2xl">{id}</Text>)}
        </View>
    )
}

export default Singlebatteryswap