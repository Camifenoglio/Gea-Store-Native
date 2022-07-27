
import { View, StyleSheet, ImageBackground, TextInput, Text, Dimensions, TouchableOpacity, Image, Animated, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, delFromCart, clearCart } from "../redux/actions/shoppingActions";

const { height, width } = Dimensions.get("window");

export default function Shopping({ navigation }) {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducers);
    const { cart } = useSelector((state) => state.shoppingReducers);

    const user = useSelector(store => store.usersReducers.user)

    function handleDelete() {
        dispatch(clearCart());
    }

    const productsById = {}

    products.map(product => {
        productsById[product._id] = product;
    });
    let total = 0;
    cart.map(item => {
        const { productId, quantity } = item;
        const product = productsById[productId];
        total = total + product.price * quantity;

    });


    return (
        <ScrollView>

            <View style={styles.container} >
                <ImageBackground source={{ uri: 'https://i.imgur.com/NIbgh4h.jpg' }} style={styles.background}>
                    <Text style={styles.titleShop}>Shopping Cart</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.total} >Total:{total}</Text>
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={styles.buttonClear} >Clear cart</Text>
                    </TouchableOpacity >

                    </View>


                    <>

                        <Animated.FlatList data={cart}

                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => {
                                const product = productsById[item.productId];
                                return (

                                    <>
                                        <View style={styles.containerCard} >

                                            <Image source={{ uri: 'https://i.imgur.com/LGjleJ3.jpg' }} style={styles.cardContainer}>
                                            </Image>
                                            <View style={styles.boxContainer}>
                                                <Image source={{ uri: product.image }} resizeMode="contain" style={styles.image}>
                                                </Image>
                                                <View >

                                                    <Text style={styles.productName}>{product.name}</Text>
                                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                        <Text style={styles.price}>${product.price}.00</Text>

                                                    </View>
                                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                        <TouchableOpacity style={{ marginTop: 10 }} onPress={() => dispatch(addToCart(product._id))}>
                                                            <Text style={styles.account}>+</Text>
                                                        </TouchableOpacity >
                                                        <Text style={{ marginTop: 10, justifyContent: 'center' }} > {item.quantity}</Text>
                                                        <TouchableOpacity style={{ marginTop: 10, alignItems: 'center' }}>
                                                            <Text style={styles.account} onPress={() => dispatch(delFromCart(product._id))} >-</Text>
                                                        </TouchableOpacity >
                                                    </View>
                                                    <TouchableOpacity style={{ marginTop: 10, alignItems: 'center' }} onPress={() => dispatch(delFromCart(product._id, true))}>
                                                        <Text style={styles.buttonRemove} >Remove Product</Text>
                                                    </TouchableOpacity >
                                                </View>
                                            </View>
                                        </View>
                                    </>
                                )
                            }}
                        />

                    </>
          

                </ImageBackground>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        // marginVertical: 20
    },
    background: {
        minHeight: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        height: 230,
        width: width - 30,
        borderRadius: 30,
        position: 'absolute',
        marginVertical: 4,
        resizeMode: 'contain',

    },
    containerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    image: {
        height: 200,
        width: 170,
        marginHorizontal: 10,
        borderRadius: 30,
        borderColor: '#ffcaa6',
        borderWidth: 1.3
    },
    productName: {
        fontSize: 18,
        paddingRight: 7,
        color: '#1B2808',
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_700Bold',
        width: 200
    },
    price: {
        fontSize: 20,
        color: '#1B2808',
        fontFamily: 'AlegreyaSans_400Regular',
        marginLeft: 30

    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonRemove: {
        height: 40,
        width: 150,
        backgroundColor: '#F2A0A0',
        borderRadius: 30,
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 22,
        paddingTop: 3,
        marginRight: 10
    },
    buttonClear: {
        height: 30,
        width: 110,
        backgroundColor: '#F2A0A0',
        borderRadius: 30,
        textAlign: 'center',
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize: 22,
        paddingBottom: 5,
        marginRight: 10
    },
    account: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: '#F2A0A0',
        marginHorizontal: 5,
        textAlign: 'center',
        color: 'white',
        paddingTop: 2
    },
    titleShop: {
        fontFamily: 'AlegreyaSans_700Bold',
        fontSize: 30,
        color: '#1B2808',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 10

    },
    total: {
        height: 40,
        width: 150,
        borderRadius: 30,
        textAlign: 'left',
        fontFamily: 'AlegreyaSans_700Bold',
        fontSize: 22,
        paddingTop: 3,
        marginRight: 10
    }

});
