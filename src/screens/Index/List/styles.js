import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textResults: {
        marginTop: 20,
        marginHorizontal: 10,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    picture: {
        width: 80,
        height: 80,
        marginRight: 30,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#CDCDCD',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
    },
    itemSubdivision: {
        fontSize: 10,
    },
    itemSubdivisionDetach: {
        fontSize: 12,
        color: '#00A650',
    },
});

export default styles;