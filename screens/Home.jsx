import { View, StyleSheet, ScrollView, Text, Dimensions, ImageBackground} from 'react-native';
import BannerInfo from '../components/BannerInfo';
import Carrousel from '../components/Carrousel';
import CarrouselProducts from '../components/CarrouselProducts';

const { height, width } = Dimensions.get("window");

export default function Home({navigation}) {

    return (
        <ScrollView >
            <View style={styles.container}>
              <Carrousel />
            </View>
            <View style={{justifyContent:'center', alignItems: 'center'}}>
            <ImageBackground source={{uri: 'https://i.imgur.com/VGA6EJc.png'}} style={styles.imgText}>
            <Text style={styles.title}>Popular Products</Text>
            </ImageBackground>
            </View>
               <CarrouselProducts/>
               <BannerInfo/>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical:10,
marginHorizontal:10    
        // justifyContent: 'flex-start',
        // height: height
    },
    imgText: {
        height: 90,
        width: width -180,
        justifyContent:'center',
        alignItems: 'center',
        opacity:0.6,
        marginBottom:10
    },
    title: {
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_700Bold',
        fontSize: 30,
        marginBottom:20,
        color: '#222b12'
    }
});
