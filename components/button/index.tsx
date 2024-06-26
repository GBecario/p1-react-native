import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'

const Button = () => {
    return <View
        style={styles.container}>
        <TouchableOpacity
            style={styles.button}>
            <Text style={styles.texto2}>Log In</Text>
        </TouchableOpacity>
    </View>
}

export default Button