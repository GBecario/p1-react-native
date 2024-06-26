import { View, TextInput } from "react-native";
import { styles } from "./styles";

const CadastroInput = () => {
    return <View
        style={styles.container}
    >
        <TextInput 
            style={styles.input}
            placeholder="Mobile number or email"
        />
        <TextInput 
            style={styles.input}
            placeholder="Full name"
        />
        <TextInput 
            style={styles.input}
            placeholder="Username"
        />
        <TextInput 
            style={styles.input}
            placeholder="Password"
        />
    </View>
}

export default CadastroInput