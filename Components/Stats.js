import React from 'react'
import {Image } from 'react-native'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Stats = () => {
    const image = { uri: 'https://i.ibb.co/mS3Qq3F/camelo.png' };
    const image1 = { uri: 'https://i.ibb.co/PCfmFd3/gradient.png' };
    return (
        <View className="h-screen bg-slate-200 pb-14">
            <View className="h-64 m-2">
                <Image source={image1} resizeMode="stretch" className="h-40  absolute w-full -top-3" />
                <Image source={image} resizeMode="contain" className="h-full " />
            </View>
            <View className="flex flex-wrap flex-row">
                <View className="w-1/2 p-6">
                <View className="bg-teal-700 rounded-lg justify-center p-6">
                    <Text className="text-center text-white mb-2"><Ionicons name='car-sport' style={{ fontSize: 24 }} /> Mileage</Text>
                    <Text className="text-center text-white">12 KM/L</Text>
                    </View>
                </View>
                <View className="w-1/2 p-6">
                <View className="bg-teal-700 rounded-lg justify-center p-6">
                    <Text className="text-center text-white mb-2"><Ionicons name='speedometer-outline' style={{ fontSize: 24 }} /> Speed</Text>
                    <Text className="text-center text-white">200 KM/Hr</Text>
                    </View>
                </View>
                <View className="w-1/2 p-6">
                <View className="bg-teal-700 rounded-lg justify-center p-6">
                    <Text className="text-center text-white mb-2"><Ionicons name='speedometer-outline' style={{ fontSize: 24 }} /> Speed</Text>
                    <Text className="text-center text-white">200 KM/Hr</Text>
                    </View>
                </View>
                <View className="w-1/2 p-6">
                <View className="bg-teal-700 rounded-lg justify-center p-6">
                    <Text className="text-center text-white mb-2"><Ionicons name='speedometer-outline' style={{ fontSize: 24 }} /> Speed</Text>
                    <Text className="text-center text-white">200 KM/Hr</Text>
                    </View>
                </View>
            </View>
            <View className="bg-teal-950 rounded-lg justify-center mx-6 p-5">
                <Text style={{ color: 'white', fontSize: 20 }}>
                    <Ionicons name='car' style={{ fontSize: 20 }} /> More information
                </Text>
                <Text style={{ fontSize: 15, color: 'white' }}> <Ionicons name='aperture-outline' style={{ fontSize: 15 }} />  360 Steering </Text>
            </View>
        </View>
    )
}

export default Stats