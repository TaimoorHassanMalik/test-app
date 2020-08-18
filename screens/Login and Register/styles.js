import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: 'white'
    },
    logoContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    emailAndPassword: {
        flex: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 'bold',
        fontSize: 10,
        textAlign: 'center'
    },
    forget: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    section: {
        flexDirection: 'row',
        height: 40,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#3ec0f0',
        marginBottom: 10
    },
    icon: {
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        height: 40,
    },
    input: {
        flex: 1,
        height: 40,
    },
    textInput: {
        flex:1,
        paddingLeft: 10,
        fontSize: 12
    },
    Socialsection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 110,
        marginTop: 5
    },
    SocialbuttonContainer: {
        width: 25,
        height: 25,
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonArrow: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default styles