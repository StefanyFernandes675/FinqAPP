import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

import {COLORS} from './assets/colors/colors';

import SplashScreen from './screens/SplashScreen';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import Login from './screens/Login/Login';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import Code from './screens/Code/Code';
import NewPassword from './screens/NewPassword/NewPassword';
import Welcome from './screens/Welcome/Welcome';
import Register from './screens/Register/Register';
import WelcomeRegister from './screens/WelcomeRegister/WelcomeRegister';
import Home from './screens/Home/Home';
import Quiz from './screens/Quiz/Quiz';
import Success from './screens/SuccessLessons/SuccessLessons';
import Profile from './screens/Profile/Profile';
import Ranking from './screens/Ranking/Ranking';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Quiz') {
          iconName = 'question-circle';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        } else if (route.name === 'Ranking') {
          iconName = 'trophy';
        }
        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: COLORS.purpleDark,
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Quiz" component={Quiz} />
    <Tab.Screen name="Ranking" component={Ranking} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Code" component={Code} options={{ headerShown: false }}/>
        <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="WelcomeRegister" component={WelcomeRegister} options={{ headerShown: false }}/>
        <Stack.Screen name="Success" component={Success} options={{ headerShown: false }}/>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
