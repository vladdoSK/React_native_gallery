import React from "react";
import Main_gallery from './Main_gallery';
import One_img from './One_img';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate(){
    
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main_gallery"
                component={Main_gallery}
                options={{title: 'Main gallery'}}
            />

            <Stack.Screen
                name="One_img"
                component={One_img}
                options={{title: 'Your image'}}
            />
        </Stack.Navigator>
    </NavigationContainer>);
}