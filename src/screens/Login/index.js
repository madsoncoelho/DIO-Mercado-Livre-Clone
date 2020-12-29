import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <View style={styles.inputContainer}>
            <TextInput name="user" keyboardType="email-address"
                autoCapitalize="none" placeholder="Email" style={styles.input} />
            <TextInput name="user" keyboardType="email-address"
                autoCapitalize="none" placeholder="Email" style={styles.input} />
            </View>            
            <Button style="outline" onPress={() => {navigation.navigate('Index')}}>
                <Text>ENTRAR</Text>
            </Button>
            <TouchableOpacity style={styles.redefinePass}
                onPress={() => navigation.navigate('Redefine Pass')}>
                <Text style={styles.primaryText}>Esqueceu a sua senha?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;