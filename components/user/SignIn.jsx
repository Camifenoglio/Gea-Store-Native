import { useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Text, Dimensions, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions'
import Toast from 'react-native-toast-message'

const { height, width } = Dimensions.get("window");

export default function SignIn({ navigation }) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit() {
      
        const logedUser = {
            email: email,
            password: password,
            from: 'form-signup',
        }
        const res = await dispatch(userActions.logInUser(logedUser))

        if (res.data.success) {
            Toast.show({type: 'success', text1:res.data.message, position: 'bottom'})
        }
        else {
            console.log(res.data.message, 'mensaje')
            Toast.show({type: 'error', text1:res.data.message, position: 'bottom'})
        }
        setEmail = ''
        setPassword = ''
    }

    return (
        <ImageBackground source={{ uri: 'https://i.imgur.com/NIbgh4h.jpg' }} style={styles.background}>

            <View style={styles.container}>
  
            <Text style={styles.textSignIn}>Log In</Text>

              
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder='Email address'

                />

                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholder='Password'
                    secureTextEntry={true}

                />
                <View >
                    <TouchableOpacity style={{ marginTop: 10 }}  onPress={handleSubmit}>
                        <Text style={styles.buttonLogIn}>Log In</Text>

                    </TouchableOpacity >
                </View>

                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} style={{ marginTop: 40 }} >
                    <Text style={styles.textAccount} >Don't have an account yet?</Text>
                    <Text style={styles.buttonSignUp}>Sign up here</Text>
                </TouchableOpacity >


            </View>
        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom:40
    },
    background: {
        height: height
    },
    textSignIn: {
        fontFamily: 'AlegreyaSans_700Bold',
        fontSize: 30,
    },
    input: {
        width: width - 100,
        height: 40,
        backgroundColor: '#D9E8D8',
        borderRadius: 20,
        textAlign: 'center',
        color: '#0d0c22',
        marginVertical: 10,
        

    },
    buttonLogIn: {
        width: 100,
        height: 40,
        backgroundColor: '#F2A0A0',
        borderRadius: 30,
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 22,
        paddingTop: 3
    },
  
    textAccount: {
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 20,
    },
    buttonSignUp: {
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 25,
        color: '#F2A0A0',
        textAlign: 'center'
    }
});
