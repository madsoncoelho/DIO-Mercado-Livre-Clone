import React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import logoMP from '../../assets/mercado_pago.png';

import Profile from '../../components/Profile';

import Navigation from './Navigation';

const Drawer = createDrawerNavigator();

const DrawerHeader = () => {
    return (
        <View style={styles.drawerHeader}>
            <View style={styles.user}>
                <Profile />
                <View>
                    <Text>Olá José</Text>
                    <Text>Nível 3 - Mercado Pontos</Text>
                </View>
            </View>
            <View style={styles.paidMarket}>
                <Image source={logoMP} />
                <Text style={styles.paidMarketText}>Mercado Pago</Text>
            </View>
        </View>
    );
};

const DrawerContent = ({ navigation }) => {
    const listMenuDrawer = [
        {
            id: 1,
            name: 'Home',
            action: 'Main',
            icon: <AntDesign name="home" size={24} color="black" />
        },
        {
            id: 2,
            name: 'Procurar',
            action: 'List',
            icon: <AntDesign name="search1" size={24} color="black" />
        },
    ];

    return (
        <View style={styles.drawerContent}>
            <DrawerHeader />
            <View style={styles.drawerBody}>
                <DrawerContentScrollView>
                    {listMenuDrawer.map((menu) => (
                        <DrawerItem label={menu.name} key={menu.id}
                            icon={() => menu.icon}
                            onPress={() => navigation.navigate(menu.action)}
                        />
                    ))}
                </DrawerContentScrollView>
            </View>
        </View>
    );
};

const Index = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen name="Navigation" component={Navigation} />
        </Drawer.Navigator>
    );
};

export default Index;
