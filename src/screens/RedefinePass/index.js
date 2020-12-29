import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';

const RedefinePass = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <View style={styles.inputContainer}>
            <TextInput name="user" keyboardType="email-address"
                autoCapitalize="none" placeholder="Email" style={styles.input} />
            </View>            
            <Button style="outline" onPress={() => {}}>
                <Text>CRIAR CONTA</Text>
            </Button>
        </View>
    );
};

export default RedefinePass;