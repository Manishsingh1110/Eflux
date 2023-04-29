import React, { useEffect } from 'react'
import { TextInput } from 'react-native'
import { View, Image, StyleSheet, Text, Button } from 'react-native'
import ip from '../ip.json'
import * as SecureStorage from 'expo-secure-store';
import { useNavigate } from 'react-router'
import { Link } from "react-router-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
const Signin = (props) => {
    var history = useNavigate();

    const [Password, onChangePass] = React.useState('');
    const [Phonenumber, onChangePhone] = React.useState('');

    const [Firstname, onChangeText] = React.useState('');
    const [Lastname, onChangeName] = React.useState('');
    const [Carname, onChangeCar] = React.useState('');
    const [Carnumber, onChangeCarnumber] = React.useState('');
    const [Cartype, onChangeCartype] = React.useState('')
    const [Carmodel, onChangeCarmodel] = React.useState('')

    const handleclick = (e) => {
        e.preventDefault();
        history("/")
        // Signup(Firstname, Lastname, Phonenumber, Carname, Carmodel, Carnumber, Cartype, Password)
    }
    const Signup = async (Firstname, Lastname, Phonenumber, Carname, Carmodel, Carnumber, Cartype, Password) => {
        // Default options are marked with *
        const response = await fetch('http://192.168.43.113:3001/app/addcustomer', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ Firstname, Lastname, Phonenumber, Carname, Carmodel, Carnumber, Cartype, Password }) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        // console.log(json5)
        if (json5.savedCustomer) {
            history("/")
        } else {
            console.log(json5)
            alert("invalid")
        }
    }
    const image = { uri: 'https://wallpapercave.com/wp/wp10068397.jpg' };
    return (
        <>
            <Image source={image} resizeMode="cover" className="h-screen " />
            <View className="px-2 w-full text-white absolute flex-1 justify-center h-screen" style={{ "backgroundColor": " rgba(0, 0, 0, 0.55)" }}>
                <View className="pb-2">
                    <Text className="text-2xl text-center text-white">SignUp</Text>
                </View>
                <View className="flex mt-2 flex-wrap flex-row">
                    <View className="w-1/2 py-2 px-3">
                        <Text for="fname" className="text-white">First Name</Text>
                        <TextInput
                            placeholder='John'
                            label='First Name'
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangeText}
                            value={Firstname}
                        />
                    </View>
                    {/* Last Name */}
                    <View className="w-1/2 py-2 px-3">
                        <Text for="fname" className="text-white">Last Name</Text>
                        <TextInput
                            placeholder='Doe'
                            label='First Name'
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangeName}
                            value={Lastname}
                        />
                    </View>
                    {/* Mobile */}
                    <View className="w-1/2 py-2 px-3">
                        <Text for="fname" className="text-white">Phone Number</Text>
                        <TextInput
                            placeholder='+91 91341656'
                            label='First Name'
                            keyboardType="numeric"
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangePhone}
                            value={Phonenumber}
                        />
                    </View>

                    {/* Car number */}
                    <View className="w-1/2 py-2 px-3">
                        <Text for="fname" className="text-white">Car number</Text>
                        <TextInput
                            placeholder='Car Number'
                            label='First Name'
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangeCarnumber}
                            value={Carnumber}
                        />
                    </View>

                    {/* Car Name */}
                    <View className="w-full py-2 px-3">
                        <Text for="fname" className="text-white">Car Name</Text>
                        <TextInput
                            placeholder='Car Name'
                            label='First Name'
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangeCar}
                            value={Carname}
                        />
                    </View>

                    {/* car type */}
                    <View className="w-full py-2 px-3">
                        <Text for="fname" className="text-white">Car Type</Text>
                        <TextInput
                            placeholder='Car Type'
                            label='First Name'
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangeCartype}
                            value={Cartype}
                        />
                    </View>

                    {/* car model*/}
                    <View className="w-full py-2 px-3">
                        <Text for="fname" className="text-white">Car Model</Text>
                        <TextInput
                            placeholder='Car Model'
                            label='First Name'
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangeCarmodel}
                            value={Carmodel}
                        />
                    </View>

                    {/* Password */}
                    <View className="w-full py-2 px-3">
                        <Text for="fname" className="text-white">Password</Text>
                        <TextInput
                            secureTextEntry={true}
                            placeholder='**********'
                            label='First Name'
                            className="bg-white text-black mt-2 rounded-lg px-2 py-1"
                            onChangeText={onChangePass}
                            value={Password}
                        />
                    </View>
                    <View style={{ marginTop: 20, height: 50 }} className="w-full px-3">
                        <Button className="h-6 w-full"
                            title="SignUp"
                            onPress={handleclick}
                            color="#006d5b"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} className="w-full px-3">
                        <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center' }} className="text-white">or</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
                    </View>
                    <View className="w-full flex flex-row my-5 px-10 text-center justify-evenly">
                        <View underlayColor="#ffffff00" className="bg-teal-800 h-10 w-10 flex justify-center">
                            <View className="text-center px-2.5 justify-center">
                                <Ionicons name='logo-facebook' className="bg-white text-white" color={"white"} size={20} /></View>
                        </View>
                        <View underlayColor="#ffffff00" className="bg-teal-800 h-10 w-10 flex justify-center">
                            <View className="text-center px-2.5 justify-center">
                                <Ionicons name='logo-instagram' className="bg-white text-white" color={"white"} size={20} /></View>
                        </View>
                        <View underlayColor="#ffffff00" className="bg-teal-800 h-10 w-10 flex justify-center">
                            <View className="text-center px-2.5 justify-center">
                                <Ionicons name='logo-twitter' className="bg-white text-white" color={"white"} size={20} /></View>
                        </View>
                    </View>
                    <View className="w-full flex mt-3 flex-row text-center justify-center">
                        <Text style={{ textAlign: 'center' }} className="text-white">Already Have an Account? </Text>
                        <Link underlayColor="#ffffff00" to="/">
                            <Text className="text-white underline">Login</Text>
                        </Link>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Signin