import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Doctor,
  Messages,
  Hospitals,
  ChooseDoctor,
  Chatting,
  UserProfile,
  UpdateProfile,
  DoctorProfile,
} from './pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator, Loading } from './components';
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import {LogBox } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar ={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor}/>
      <Tab.Screen name="Messages" component={Messages}/>
      <Tab.Screen name="Hospitals" component={Hospitals}/>
    </Tab.Navigator>
  )
}

const SuperMainApp = () => {
  const stateGlobal = useSelector(state => state);
  LogBox.ignoreLogs(['Warning: Setting a timer']);
  return (
    <>
    <NavigationContainer>
      {/* <Router /> */}
      <Stack.Navigator initialRouteName ="Splash">
            <Stack.Screen
            name = "Splash"
            component={Splash}
            options={{headerShown: false}} />
            <Stack.Screen
            name = "GetStarted"
            component={GetStarted}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "Register"
            component={Register}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "Login"
            component={Login}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "UploadPhoto"
            component={UploadPhoto}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "MainApp"
            component={MainApp}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "ChooseDoctor"
            component={ChooseDoctor}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "Chatting"
            component={Chatting}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "UserProfile"
            component={UserProfile}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "UpdateProfile"
            component={UpdateProfile}
            options={{headerShown: false}}/>
            <Stack.Screen
            name = "DoctorProfile"
            component={DoctorProfile}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    <FlashMessage position="top" />
    {stateGlobal.loading && <Loading/>}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SuperMainApp/>
    </Provider>
  )
}
export default App;