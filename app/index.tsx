import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from './styles'
import Image1 from '../src/assets/images/SocialConnect.png';
import Button from "@/components/button";
import FacebookButton from "@/components/FacebookButton";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image style={styles.image} source={Image1}/>
      <TextInput 
          style={styles.input}
          placeholder="Phone number, username or email"
          />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          />
      <TouchableOpacity>
        <Text style={styles.texto}>Forgot password?</Text>
      </TouchableOpacity>
      <Button />
      <Text style={styles.texto3}>OR</Text>
      <FacebookButton />
      <TouchableOpacity>
        <Text style={styles.texto4}>Don't have an account?<Text style={styles.texto}> Sign Up.</Text></Text>
      </TouchableOpacity>
    </View>
  );
}
