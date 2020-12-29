import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';

import Button from '../../components/Button';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={logo} />
            <Button style="outline" onPress={() => { navigation.navigate('Login') }}>
                <Text>ENTRAR</Text>
            </Button>
            <Button onPress={() => { navigation.navigate('Sign Up')}}>
                <Text style={styles.text}>CRIAR CONTA</Text>
            </Button>
        </View>
    );
};

export default Home;