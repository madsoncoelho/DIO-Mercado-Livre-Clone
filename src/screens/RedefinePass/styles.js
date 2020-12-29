import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',        
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    text: {
        color: '#FFF',
    },
    primaryText: {
        color: '#3483FA'
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginTop: 40,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 40,
    },
    redefinePass: {
        marginTop: 40,
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        color: '#3483FA',
    },
    image: {
        height: 100,
        resizeMode: 'contain',
    },
});

export default styles;