import React from 'react';
import {
    StyleSheet
} from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ChatScene } from './chat-scene';
import { PeopleScene } from './people-scene';
import { ProfileScene } from './profile-scene';

export const MainScene = (props) => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Chats') {
                        iconName = focused ? 'chatbox' : 'chatbox-outline';
                    } else if (route.name === 'People') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: true,
                tabBarStyle: { backgroundColor: 'pink', paddingVertical: 5 },
                unmountOnBlur: true,
            })}>
            <Tab.Screen
                name="Chats"
                component={PeopleScene}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="People"
                component={ChatScene}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                children={()=><ProfileScene 
                    name={props.route.params.name} 
                    age={props.route.params.age}
                    gender={props.route.params.gender}
                    job={props.route.params.job}
                    hobbies={props.route.params.hobbies}
                />}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

const styles = StyleSheet.create({
    centerIcon: {
        backgroundColor: '#F2E9C9',
    },
});
