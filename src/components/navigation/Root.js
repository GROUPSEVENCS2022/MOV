import React from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import SearchResults from "../../screens/SearchResults";
import DestinationSearch from "../../screens/DestinationSearch";

const Stack = createStackNavigator();



const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                }}
                /* initialRouteName={"SearchResults"} */
            >
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
                <Stack.Screen name={"SearchResults"} component={SearchResults} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;