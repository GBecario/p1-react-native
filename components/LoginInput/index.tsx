import { View, TextInput } from "react-native";
import { styles } from './styles'

const LoginInput = () => {
    return <View
        style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder="Phone number, username or email"
            />
        <TextInput 
            style={styles.input}
            placeholder="Password"
            />
    </View>
}

export default LoginInput