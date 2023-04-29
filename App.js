import { ScrollView, Text, View } from 'react-native';
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import { StatusBar } from 'react-native'
import Home from './Components/Home';
import About from './Components/About';
import Bottomnavigation from './Components/Bottomnavigation';
import Signin from './Components/Signin';
import Login from './Components/Login';
import Singlestation from './Components/Singlestation';
import Singlebatteryswap from './Components/Singlebatteryswap';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Batteryswap from './Components/Batteryswap';
import Stats from './Components/Stats';
import Shoplogin from './Components/Shoplogin';
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
SplashScreen.preventAutoHideAsync();
import {LogBox } from "react-native";
import CurrentBooking from './Components/Booking';
import History from './Components/History';
import Editprofile from './Components/Editprofile';
import Changepassword from './Components/Changepassword';
import Contact from './Components/Contact';
import Bookstation from './Components/Bookstation';
import Bookbattery from './Components/Bookbattery';
import Shop from './Components/Shop';
import Shopheader from './Components/Shopheader';
LogBox.ignoreAllLogs()


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  return (
    <NativeRouter>
      <StatusBar auto animated={true} backgroundColor="#033E3E" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={onLayoutRootView}>
      </View>
      <ScrollView>
        <View className="container min-h-screen">
          <Routes>
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/stationlogin" element={<Shoplogin />} />
            <Route exact path="/home" element={<><Home /><Bottomnavigation /></>} />
            <Route exact path="/stats" element={<><Stats /><Bottomnavigation /></>} />
            <Route exact path="/battery" element={<><Batteryswap /><Bottomnavigation /></>} />
            <Route exact path="/profile" element={<><Header /><Profile /><Bottomnavigation /></>} />
            <Route exact path="/booking" element={<><Header /><CurrentBooking/><Bottomnavigation /></>} />
            <Route exact path="/history" element={<><Header /><History/><Bottomnavigation /></>}/>
            <Route exact path="/edit" element={<><Header /><Editprofile/><Bottomnavigation /></>}/>
            <Route exact path="/contact" element={<><Header /><Contact/><Bottomnavigation /></>}/>
            <Route exact path="/password" element={<><Header /><Changepassword/><Bottomnavigation /></>}/>
            <Route path="/station/:id" element={<><Singlestation /><Bottomnavigation /></>} />
            <Route path="/bookstation/:id" element={<><Bookstation/><Bottomnavigation /></>} />
            <Route path="/bookstationbattery/:id" element={<><Bookbattery/><Bottomnavigation /></>} />
            <Route path="/stationbattery/:id" element={<><Singlebatteryswap/><Bottomnavigation /></>} />
            <Route path="/about" element={<><Header /><About /><Bottomnavigation /></>} />
            <Route path="/shop" element={<><Shopheader/><Shop/></>} />
          </Routes>
        </View>
      </ScrollView>
    </NativeRouter>
  )
}

