import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import productsActions from '../redux/actions/productsActions';

const { height, width } = Dimensions.get("window");
export default function Details({ route, navigation }) {
    const dispatch = useDispatch()
    const { id } = route.params

    useEffect(() => {
        dispatch(productsActions.getOneProduct(id))

        // eslint-disable-next-line
    }, [id])

    const product = useSelector(store => store.productReducers.oneProduct)

    return (
        <>
            <ScrollView >
                <View style={styles.container}>
                <View>
                    <ScrollView
                        horizontal={true}>
                        <Image source={{ uri: product?.image }} resizeMode="contain" style={styles.image}>
                        </Image>
                        <Image source={{ uri: product?.imageInfo }} resizeMode="contain" style={styles.image}>
                        </Image>
                    </ScrollView>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.productName}>{product?.name}</Text>
                    <View style={{ justifyContent: 'flex-start', width: width }}>
                        <Text style={styles.price}>Price: ${product?.price}.00</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                        <Text style={styles.button}>Add to cart </Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <Text style={styles.descriptionTitle}>Description:</Text>
                        <Text style={styles.description}>{product?.description}</Text>

                    </View>


                </View>
                </View>
            </ScrollView>

        </>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    image: {
        height: 250,
        width: 250,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 15,
        borderRadius: 30,
        borderColor: '#ffcaa6',
        borderWidth: 1.3
    },
    productName: {
        fontSize: 25,
        paddingHorizontal: 5,
        color: '#1B2808',
        fontFamily: 'AlegreyaSans_700Bold',
        textAlign: 'center'
    },
    descriptionTitle: {
        fontSize: 23,
        paddingHorizontal: 10,
        color: '#1B2808',
        fontFamily: 'AlegreyaSans_700Bold',
    },
    price: {
        fontSize: 24,
        marginTop:10,
        color: '#1B2808',
        fontFamily: 'AlegreyaSans_700Bold',
        paddingHorizontal:25

    },
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#F2A0A0',
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontFamily: 'AlegreyaSans_700Bold',
        fontSize: 25,
        textAlign: 'center',
        color: 'whitesmoke',

    },
    description: {
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 20,
        padding: 10,
        textAlign: 'justify',
        width: width-20
    }

});
