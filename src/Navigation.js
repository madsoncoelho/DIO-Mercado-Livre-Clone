import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import RedefinePass from './screens/RedefinePass';
import Index from './screens/Index';

const Stack = createStackNavigator();

const optionsHeader = () => ({
    headerStyle: {
        backgroundColor: '#FFE600',
    },
});

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={optionsHeader} />
                <Stack.Screen name="Login" component={Login} options={optionsHeader} />
                <Stack.Screen name="Sign Up" component={SignUp} options={optionsHeader} />
                <Stack.Screen name="Redefine Pass" component={RedefinePass} options={optionsHeader} />
                <Stack.Screen name="Index" component={Index}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}