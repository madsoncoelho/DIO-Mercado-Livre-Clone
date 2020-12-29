import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    whiteText: {
        color: '#FFFFFF',
    },
    primaryText: {
        color: '#3483FA',
    },
    drawerContent: {
        flex: 1,
        backgroundColor: '#CDCDCD',
    },
    drawerHeader: {
        flex: 1,
        backgroundColor: '#FFE600',
        paddingTop: 40,
        paddingBottom: 5,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerBody: {
        flex: 6,
        backgroundColor: '#FFF',
    },
    paidMarket: {
        backgroundColor: '#FFF589',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: '100%',
        height: 30,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
    },
    paidMarketText: {
        marginLeft: 20,
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default styles;