import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';

const FacebookButton = () => {
    return <View
        style={styles.container}>
        <TouchableOpacity
            style={styles.button}>
            <Entypo name="facebook" size={24} color="white" />
            <Text style={styles.texto}>Log In with Facebook</Text>
        </TouchableOpacity>
    </View>
}

export default FacebookButton