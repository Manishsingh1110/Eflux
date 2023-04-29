import React, { useEffect } from 'react'
import { TextInput } from 'react-native'
import { View, Image,Text, Button } from 'react-native'
import ip from '../ip.json'
import * as SecureStore from 'expo-secure-store';
import { useNavigate } from 'react-router'
import { Link } from "react-router-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
const Login = () => {
    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
      }
    var history = useNavigate();
    const [Phonenumber, onChangePhone] = React.useState('');
    const [Password, onChangePass] = React.useState('');
    const handleclick = (e) => {
        e.preventDefault();
        login(Phonenumber, Password)
    }
    const login = async (Phonenumber, Password) => {
        // Default options are marked with *
        const response = await fetch(`http://${ip.ip}:3001/app/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ Phonenumber, Password }) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        // console.log(json5)
        if (json5.jwttoken) {
            save('jwt-token', json5.jwttoken)
            history("/home")
        } else {
            console.log(json5)
            alert("invalid")
        }
    }
    const image = { uri: 'https://wallpapercave.com/wp/wp10068397.jpg' };
    return (
        <>

            <Image source={image} resizeMode="cover" className="h-screen " />
            <View className="p-6 w-full text-white  pb-10 absolute flex-1 justify-center h-screen" style={{ "backgroundColor": " rgba(0, 0, 0, 0.55)" }}>
                <View className="pb-10">
                    <Text className="text-2xl text-center text-white">Login</Text>
                </View>
                <View>
                    <Text for="fname" className="p-2 text-white">Phone Number</Text>
                    <TextInput
                        placeholder='+91 9134165699'
                        label='First Name'
                        keyboardType="numeric"
                        className="bg-white text-black mt-2 rounded-lg px-5 py-2"
                        onChangeText={onChangePhone}
                        value={Phonenumber}
                    />
                </View>
                <View>
                    <Text for="fname" className="p-2 text-white">Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder='**********'
                        label='First Name'
                        className="bg-zinc-50 text-black mt-2 rounded-lg px-5 py-2"
                        onChangeText={onChangePass}
                        value={Password}
                    />
                </View>
                <View style={{ marginTop: 20, height: 50 }}>
                
                    <Button
                        onPress={handleclick}
                        title="Sign In"
                        color="#006d5b"
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
                    <View>
                        <Text className="text-white" style={{ width: 50, textAlign: 'center' }}>or</Text>
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
                <View className="w-full flex flex-row mt-3 text-center justify-center">
                    <Text style={{ textAlign: 'center' }} className="text-white">Don't Have an Account? </Text>
                    <Link underlayColor="#ffffff00" to="/signin">
                        <Text className="text-white underline">Signup</Text>
                    </Link>
                </View>
                <View className="w-full flex flex-row mt-3 text-center justify-center">
                    <Text style={{ textAlign: 'center' }} className="text-white">Sation Owner? </Text>
                    <Link underlayColor="#ffffff00" to="/stationlogin">
                        <Text className="text-white underline">Login</Text>
                    </Link>
                </View>
            </View>
        </>
    )
}

export default Login