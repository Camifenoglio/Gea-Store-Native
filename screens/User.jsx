import {  StyleSheet} from 'react-native';
import SignIn from '../components/user/SignIn';


export default function User({ navigation }) {

    return (
     <SignIn navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
    }
});
