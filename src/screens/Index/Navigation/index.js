import React from 'react';
import { TouchableOpacity, TextInput, View, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { EvilIcons, Feather } from '@expo/vector-icons';

import Main from '../Main';
import List from '../List';

import styles from './styles';

const Stack = createStackNavigator();

const SearchBarHeader = () => {
    return (
        <View style={styles.searchInput}>
            <EvilIcons name="search" size={22}
                color="#CDCDCD" style={{ marginRight: 5 }} />
            <TextInput placeholder="Buscar no Mercado Livre" />
        </View>
    );
}

const optionsHeader = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: '#FFE600',
        elevation: 0,
    },
    headerTintColor: '#000',
    headerTitle: () => (<SearchBarHeader />),
    headerLeft: () => (
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.toggleDrawer()}
            title="Info"
        >
            <Feather name="align-left" size={24} color="black" />
        </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => Alert.alert('Ops', "O carrinho está vazio.")}
            title="Info"
        >
            <EvilIcons name="cart" size={24} color="#0D0D0D" />
        </TouchableOpacity>
    ),
    headerTitleContainerStyle: {
        flex: 1,
    },
});

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName>
            <Stack.Screen name="Main" component={Main} options={optionsHeader} />
            <Stack.Screen name="List" component={List} options={optionsHeader} />
        </Stack.Navigator>
    );

};

export default Navigation;