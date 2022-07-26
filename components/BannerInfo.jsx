import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { height, width } = Dimensions.get("window");

export default function BannerInfo() {

    return (
        <View >
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons name="home-city" size={40} color="#3f5123" />
                    <Text style={styles.title}>Shipping to all CABA and GBA</Text>
                    <Text style={styles.text}>Your Shipt shopper will leave your order right at your doorstep.</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons name="credit-card-plus-outline" size={40} color="#3f5123" />
                    <Text style={styles.title}>All accepted payment options</Text>
                    <Text style={styles.text}>Choose the option that suits you best!</Text>
                </View>

            </View>

            <View style={styles.Container} >
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons name="whatsapp" size={40} color="#3f5123" />
                    <Text style={styles.Title}>Need help?</Text>
                    <Text style={styles.text}>Write us from 9 to 18 and let us help you</Text>
                </View>

                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons name="hand-heart" size={40} color="#3f5123" />
                    <Text style={styles.Title}>¡Pay in cash!</Text>
                    <Text style={styles.text}>Add a 5% discount by paying in cash at the time of delivery</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginHorizontal:10,
 
        
    },
    Container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginHorizontal:10,
        marginBottom: 15
        
    },
    title: {
        width: width/2.2,
        height: 60,
        fontSize: 20,
        textAlign:'center',
        fontFamily: 'AlegreyaSans_400Regular'
       
    },
    text:{
        width: width/2.5,
        minHeight: 61,
        fontSize:18,
        textAlign: 'center',
        paddingHorizontal:5,
        fontFamily: 'AlegreyaSans_100Thin'
    },
    Title:{
        width: width/2.2,
        height: 30,
        fontSize: 20,
        textAlign:'center',
        paddingHorizontal:5,
        fontFamily: 'AlegreyaSans_400Regular'

    }
});
