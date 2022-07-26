import { View, StyleSheet, ScrollView, Image, Dimensions, findNodeHandle } from 'react-native';
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsActions from '../redux/actions/productsActions'


const { height, width } = Dimensions.get("window");

export default function CarrouselProducts() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line
    }, [])

    const allProducts = useSelector(store => store.productReducers.products)

    return (
        <>
            <ScrollView
               
                horizontal={true} >

                {allProducts?.map((product, index) =>
        
                    <View  key={index} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                        <Image style={styles.image} resizeMode='contain' source=
                            {{ uri: product.image }} />
                    </View>

                )}
             
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

    image: {
        height: height/2 -120,
        width: width/2,
        backgroundColor: 'white'
    }
});
