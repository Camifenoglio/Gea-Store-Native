import { useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions'

const { height, width } = Dimensions.get("window");

export default function SignUp({ navigation }) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit() {

        const userData = {
            fullName: name,
            role: "user",
            email: email,
            password: password,
            from: 'form-signup'
        }
        const res = await dispatch(userActions.signUpUsers(userData))
        console.log(res.data, "res")

        if (res.data.success) {
            setName = ''
            setEmail = ''
            setPassword = ''
        }
      
    };


    return (
        <ImageBackground source={{ uri: 'https://i.imgur.com/NIbgh4h.jpg' }} style={styles.background}>

            <View style={styles.container}>

                <Text style={styles.textSignIn}>Welcome Back!</Text>
                <Text style={styles.textWelcome}>Enter your personal details and start journey with us</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    placeholder='Full Name'
                    

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder='Email address'

                />

                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholder='Password'

                />
                <View >
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={handleSubmit} >
                        <Text style={styles.buttonLogIn}>Sign Up</Text>

                    </TouchableOpacity >
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={{ marginTop: 40 }} >
                    <Text style={styles.textAccount} >Don't have an account yet?</Text>
                    <Text style={styles.buttonSignUp}>Log In here</Text>
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
    textWelcome: {
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 20,
        width: width - 150,
        color: '#F2A0A0',
        textAlign: 'center'
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