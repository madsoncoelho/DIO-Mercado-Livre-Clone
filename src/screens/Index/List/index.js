import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import styles from './styles';

const productsList = [
    {
        id: '1',
        name: 'TV',
        price: 1250.25,
        condition: 'Novo',
    },
    {
        id: '2',
        name: 'TV',
        price: 1999.99,
        condition: 'Novo',
    },
    {
        id: '3',
        name: 'TV',
        price: 2999.99,
        condition: 'Novo',
    },
];

function Item({ item }) {
    return (
        <TouchableOpacity style={styles.itemContainer}
            onPress={() => {}}>
            <Image style={styles.picture} source={{ uri: ''}} />
            <View style={styles.item}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
                <Text style={styles.itemSubdivision}>
                    Parcelado em 12x de <Text style={styles.itemSubdivisionDetach}>R$ {(item.price / 12).toFixed(2)}</Text>
                </Text>
                <Text>{item.condition}</Text>
            </View>
        </TouchableOpacity>
    );
}

const List = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text sytle={styles.textResults}>
                Produtos encontrados: {productsList.length}
            </Text>
            <FlatList data={productsList} keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<Item item={item} />)}
            />
        </SafeAreaView>
    );
};

export default List;