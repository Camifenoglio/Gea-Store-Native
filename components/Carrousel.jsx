import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

export default function Carrousel({ navigation }) {

    return (
        <>
      <View style={styles.navbar}>
      <Image style={styles.imageNav} resizeMode='contain' source={{
                    uri: 'https://i.imgur.com/UFZBBG3.png',
                }} />
      </View>
        <ScrollView
            horizontal={true} >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.image} resizeMode='contain' source={{
                    uri: 'https://i.imgur.com/rqh9NzL.png',
                }} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Image style={styles.image} resizeMode='contain' source={{
                    uri: 'https://i.imgur.com/JhX7muv.png',
                }} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Image style={styles.image} resizeMode='contain' source={{
                    uri: 'https://i.imgur.com/48NXiSP.png',
                }} />
            </View>

        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    navbar:{
        height:100,
        justifyContent:'center',
        marginTop:10,
        backgroundColor: '#F2F2F2',
    },
    imageNav:{
        height:80,
        width: width
    },
    image: {
        height: height/2-170,
        width: width-20,
        marginRight:10
    }
});
