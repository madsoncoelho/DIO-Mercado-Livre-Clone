import React, { useState } from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';

import firebase from '../../services/firebase';

const SignUp = () => {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    async function handleSignUp(){
        if (user, pass) {
            firebase.auth().createUserWithEmailAndPassword(user, pass)
                .then((response) => {
                    Alert.alert('Cadastro Realizado', 'Sua conta foi cadastrada com sucesso.')
                })
                .catch((error) => {
                    Alert.alert('Erro', 'Não foi possível cadastrar sua conta.')
                });
        }
    }


    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <View style={styles.inputContainer}>
                <TextInput name="user" keyboardType="email-address"
                    autoCapitalize="none" placeholder="Email" style={styles.input}
                    onChangeText={(text) => setUser(text)}
                />
                <TextInput name="pass" keyboardType="email-address"
                    autoCapitalize="none" placeholder="Password" style={styles.input}
                    onChangeText={(text) => setPass(text)} secureTextEntry={true}
                />
            </View>            
            <Button style="outline" onPress={handleSignUp}>
                <Text>CRIAR CONTA</Text>
            </Button>
        </View>
    );
};

export default SignUp;