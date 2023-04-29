import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import * as SecureStorage from 'expo-secure-store';
import ip from '../ip.json'
const Changepassword = (props) => {
    const { navigation } = props
    const [token, settoken] = React.useState('');
    async function getValueFor(key) {
        let result = await SecureStorage.getItemAsync(key);
        if (result) {
            settoken(result)
        } else {
        }
    }
    const [Newpassword, onChangeNpass] = React.useState('');
    const [oldpassword, onChangeOpass] = React.useState('');
    useEffect(() => {
        getValueFor("jwt-token")
    }, [token])
    const changePassword = async (token, Newpassword, oldpassword) => {
        // Default options are marked with *
        const response = await fetch(`http://${ip.ip}:3001/app/changepassword`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": token
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ Newpassword, oldpassword }) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        // console.log(json5)
        if (json5.savedUser) {
            alert('Password Change Sucessful')
            navigation.navigate('Profile')
        } else {
            alert("Incorrect info")
        }
    }

    const handleclick = (e) => {
        e.preventDefault();
        changePassword(token, Newpassword, oldpassword)
    }
    return (

        <View className="mt-20 p-5">
            <View>
                <Text for="fname" className="p-2 text-teal-800">Password</Text>
                <TextInput
                    secureTextEntry={true}
                    className="bg-zinc-50 text-black mt-2 rounded-lg px-5 py-2"
                    placeholder='**********'
                    label='First Name'
                    onChangeText={onChangeOpass}
                    value={oldpassword}
                />
            </View>

            <View>
                <Text for="fname" className="p-2 text-teal-800">Password</Text>
                <TextInput
                    secureTextEntry={true}
                    className="bg-zinc-50 text-black mt-2 rounded-lg px-5 py-2"
                    placeholder='**********'
                    label='First Name'
                    onChangeText={onChangeNpass}
                    value={Newpassword}
                />
            </View>
            <View>
                <Text for="fname" className="p-2 text-teal-800">Confirm password</Text>
                <TextInput
                    className="bg-zinc-50 text-black mt-2 rounded-lg px-5 py-2"
                    secureTextEntry={true}
                />
            </View>
            <View style={{ marginTop: 20, height: 50 }}>
                <Button
                    onPress={handleclick}
                    title="Save Changes"
                    color="#006d5b"
                />
            </View>
        </View>)
}

export default Changepassword