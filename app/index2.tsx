import { Text, View, Image,TouchableOpacity, TextInput } from "react-native";
import { styles } from './styles2'
import Image1 from '../src/assets/images/SocialConnect.png';
import Button from "@/components/button";
import FacebookButton from "@/components/FacebookButton";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image style={styles.image} source={Image1}/>
      <Text style={styles.texto}>Sign up to see photos and videos</Text>
      <Text style={styles.texto2}>from your friends.</Text>
      <FacebookButton />
      <Text style={styles.texto3}>OR</Text>
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
      <Text style={styles.texto4}>People who use our service have uploaded</Text>
      <Text style={styles.texto4}>your contact information to Instagram. Learn</Text>
      <Text style={styles.texto5}>More</Text>
      <Text style={styles.texto4}>By signing up, you agree to our Terms, Privacy</Text>
      <Text style={styles.texto4}>Policy and Cookies Policy.</Text>
      <Button />
      <TouchableOpacity>
        <Text style={styles.texto6}>Have an account?<Text style={styles.texto7}> Log in.</Text></Text>
      </TouchableOpacity>
    </View>
  );
}