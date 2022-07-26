import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

export default function ProductFilter({ navigation, input }) {

    const currentStore = useSelector(store => store.productReducers.filterPerCategory)
    const filterStore = currentStore.filter(product => product.name.toLowerCase().includes(input.trim().toLowerCase()))


    return (
        <>
            <View style={styles.container}>


                {filterStore?.map((product, index) =>
                    <View style={styles.containerCard} key={index}  >
                        <TouchableOpacity onPress={()=> navigation.navigate('Product', {id:product._id}) }  >
                            <Image source={{ uri: 'https://i.imgur.com/QF1AojZ.jpg' }} style={styles.cardContainer}>
                            </Image>

                            <Image source={{ uri: product.image }} resizeMode="contain" style={styles.image}>
                            </Image>
                        </TouchableOpacity>
                            <View style={styles.textContainer}>
                                <Text style={styles.productName}>{product.name}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={styles.price}>${product.price}.00</Text>
                            {/* <AntDesign name="shoppingcart" size={30} color={'grey'} /> */}
                            <View style={{ backgroundColor: '#ABBB9D', height: 42, width: 42, justifyContent: 'center', alignItems: 'center', borderRadius: 40 }}>
                                <MaterialIcons name="shopping-cart" size={30} color={'grey'} />

                            </View>

                        </View>
                    </View>
                         



                        </View>
            )
            }


        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    cardContainer: {
        height: 365,
        width: 190,
        borderRadius: 30,
        position: 'absolute',
        marginVertical: 10,
        marginHorizontal: 5,
        display: 'flex',
        resizeMode: 'cover',

    },
    containerCard: {
        marginVertical: 10,
        marginHorizontal: 5,
        // justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: '#F2F2F2',
        width: 190,
        display: 'flex',
        borderRadius: 30,

    },
    image: {
        height: 200,
        width: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 15,
        borderRadius: 30,
        borderColor: '#ffcaa6',
        borderWidth: 1.3
    },
    productName: {
        fontSize: 18,
        paddingHorizontal: 5,
        color: '#1B2808',
        // height: 70,
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_700Bold',
    },
    price: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: '#1B2808',
        marginRight: 40,
        // marginBottom: 10,
        fontFamily: 'AlegreyaSans_400Regular',

    },
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 120,
        marginBottom: 10
        // marginVertical:10
    }

});
