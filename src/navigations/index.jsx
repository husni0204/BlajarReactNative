import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//import screens
import PostsIndex from '../screens/posts/Index';
import PostCreate from '../screens/posts/Create';
import PostEdit from '../screens/posts/Edit';

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='PostsIndex'
                    component={PostsIndex}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='PostCreate'
                    component={PostCreate}
                    options={{ title: 'Create Post' }}
                />
                <Stack.Screen
                    name='PostEdit'
                    component={PostEdit}
                    options={{ title: 'Edit Post' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
