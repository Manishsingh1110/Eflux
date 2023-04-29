import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { Divider } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Contact = () => {
    return (
        <ScrollView>
            <View className="mt-20 p-5">
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Contact Us</Text>
                <View>
                    <Text for="fname" className="p-2 text-teal-800">Your Name</Text>
                    <TextInput
                        className="bg-zinc-100 text-black mt-2 rounded-lg px-5 py-2"
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Text for="fname" className="p-2 text-teal-800">Email Address</Text>
                    <TextInput
                        className="bg-zinc-100 text-black mt-2 rounded-lg px-5 py-2"
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Text for="fname" className="p-2 text-teal-800">Comments</Text>
                    <TextInput
                        multiline
                        numberOfLines={4}

                        className="bg-zinc-100 text-black mt-2 rounded-lg px-5 py-2"
                    />
                </View>
                <View style={{ marginTop: 20, height: 50 }}>
                    <Button
                    title="Send"
                    color="#006d5b"
                />
                </View>
                <Divider />
                <View style={{ padding: 10, textAlign: 'center' }}>
                    <Text style={{ fontSize: 16, textAlign: 'center' }}><Ionicons name='mail-outline' style={{ fontSize: 18, color: 'blue' }} /> customercare@eflux.com </Text>
                    <Text style={{ fontSize: 16, textAlign: 'center' }}><Ionicons name='call-outline' style={{ fontSize: 18, color: 'skyblue' }} /> +91 9163756591 </Text>
                    <Text style={{ fontSize: 16, textAlign: 'center' }}><Ionicons name='location-outline' style={{ fontSize: 18, color: 'red' }} /> Mumbai, India, 410206S </Text>

                </View>
            </View></ScrollView>)
}
export default Contact