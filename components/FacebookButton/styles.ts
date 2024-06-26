import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#61c8f8',
        width: 350,
        height: 55,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        paddingLeft: 10,
        color: 'white'
    },
})