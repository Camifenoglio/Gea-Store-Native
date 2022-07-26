import { View, StyleSheet, Text, Dimensions, ImageBackground, Image } from 'react-native';


const { height, width } = Dimensions.get("window");

export default function User() {

    return (

        <View style={styles.container}>
           
                    <Text style={styles.title}>Sorry!</Text>
                    <Text style={styles.paragraph}>Product not found</Text>
                    <Image source={{ uri: 'https://i.imgur.com/hD3qytz.png' }} style={styles.imgText}>
                    </Image>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
            alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
    },
    imgText: {
        height: 320,
        width: width-60,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6,
        marginBottom: 10
    },
    title: {
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_700Bold',
        fontSize: 30,
        marginBottom: 20,
        color: '#222b12'
    },
    paragraph:{
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 30,
        marginBottom: 20,
        color: '#222b12'
    }
});
