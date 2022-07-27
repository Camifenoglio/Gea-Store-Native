
import { View, StyleSheet, ImageBackground, TextInput, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/userActions'
import Toast from 'react-native-toast-message'

const { height, width } = Dimensions.get("window");

export default function LogOut({ navigation }) {
    const dispatch = useDispatch()
    const user = useSelector(store => store.usersReducers.user)


    async function signOut() {
        await dispatch(userActions.logOutUser())
    }



    return (
        <ImageBackground source={{ uri: 'https://i.imgur.com/NIbgh4h.jpg' }} style={styles.background}>

            <View style={styles.container}>
                <Text style={styles.textHi}>Hi {user.fullName}! 😀</Text>
                <Text style={styles.text}>Thanks for your visit ♥</Text>
                <Text style={styles.textComeBack}>Come back soon</Text>
                
                <View >
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={signOut}>
                        <Text style={styles.buttonLogIn}>Log Out</Text>
                    </TouchableOpacity >
                </View>


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
        marginBottom: 40
    },
    background: {
        height: height
    },
    textHi: {
        fontFamily: 'AlegreyaSans_700Bold',
        fontSize: 30,
    },

    buttonLogIn: {
        width: 100,
        height: 40,
        backgroundColor: '#F2A0A0',
        borderRadius: 30,
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 22,
        paddingTop: 3,
        marginBottom: 40
    },

    text: {
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 20,
        color: '#F2A0A0',
        textAlign: 'center',
        marginTop: 30

    },
    textComeBack: {
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 20,
        color: '#F2A0A0',
        textAlign: 'center',
        marginBottom: 30

    }
});
