import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image} from 'react-native'
import { useNavigate } from 'react-router'
import * as SecureStorage from 'expo-secure-store';
import ip from '../ip.json'
const Profile = () => {
  var history = useNavigate();
  const image = { uri: 'https://wallpapercave.com/wp/wp10068397.jpg' };
  const list = [
    {
      title: 'Edit Profile',
      icon: 'person-circle',
      link: '/edit'
    },
    {
      title: 'Password',
      icon: 'key-outline',
      link: '/password'
    },
    {
      title: 'Current Booking',
      icon: 'snow-outline',
      link: '/booking'
    },
    {
      title: 'History',
      icon: 'play-back',
      link: '/history'
    }
  ]

  const [profie,setProfile] = React.useState({"Firstname":"" })
    const [token, settoken] = React.useState('');
    async function getValueFor(key) {
        let result = await SecureStorage.getItemAsync(key);
        if (result) {
            settoken(result)
        } else {
        }
    }
    
    const getProfileInfo = async (token) => {
        // Default options are marked with *
        const response = await fetch(`http://${ip.ip}:3001/app/getcustomer`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": token
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ }) // body data type must match "Content-Type" header
        });
        const json5 = await response.json()
        // console.log(json5)
        if (json5.savedcustomer) {
            setProfile(json5.savedcustomer)
        } else {
        }
    }
    useEffect(() => {
        getValueFor("jwt-token")
        getProfileInfo(token)
    }, [token])


  return (
    <>
      <View className="rounded-full w-[120vw] h-[60vh] -left-8 -top-24 absolute" style={{"backgroundColor":"#033E3E"}}></View>
      <View className="bg-slate-50 p-0.5 mt-20 rounded-full left-1/4 overflow-hidden h-44 w-44 ">
        <Image source={image} resizeMode="cover" className="h-full p-1 rounded-full" />
      </View>
      <View className="px-3 ">
        <Text className="text-3xl pt-3 text-center text-white">{profie.Firstname} {profie.Lastname}</Text>
        <Text className="text-xl text-center text-white">{profie.Phonenumber}</Text>
      </View>
      <View className="px-5 mt-5">
        <View className="flex flex-wrap flex-row p-3">
          <View className="w-1/3 h-20 p-1">
            <View className="bg-teal-700 h-20 rounded-lg justify-center p-2" style={{"backgroundColor":"#033E3E"}}>
              <Text className="text-center text-white mb-2"> Car Model</Text>
              <Text className="text-center text-white">{profie.Carmodel}</Text>
            </View>
          </View>
          <View className="w-1/3 h-20 p-1">
            <View className="bg-teal-700 h-20 rounded-lg justify-center p-2" style={{"backgroundColor":"#033E3E"}}>
              <Text className="text-center text-white mb-2"> Car Number</Text>
              <Text className="text-center text-white">{profie.Carnumber}</Text>
            </View>
          </View>
          <View className="w-1/3 h-20 p-1">
            <View className="bg-teal-700 h-20 rounded-lg justify-center p-2" style={{"backgroundColor":"#033E3E"}}>
              <Text className="text-center text-white mb-2"> Car Type</Text>
              <Text className="text-center text-white">{profie.Cartype}</Text>
            </View>
          </View>
        </View>
        <View>
          {
            list.map((item, i) => (
              <ListItem key={i}
                onPress={() => history(item.link)}
                bottomDivider>
                <Ionicons name={item.icon} color={"teal"} style={{ fontSize: 20 }} />
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
        </View>
      </View>
    </>)
}

export default Profile