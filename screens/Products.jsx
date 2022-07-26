import { View, StyleSheet, ScrollView, Text, TextInput, ImageBackground, Dimensions } from 'react-native';
import productsActions from '../redux/actions/productsActions';
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductFilter from '../components/ProductFilter';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductNotFound from '../components/ProductNotFound';


const { height, width } = Dimensions.get("window");

export default function Products({ navigation }) {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const [category, setCategory] = useState('')

    const arrayCategories = ["Gluten free", "Sugar free", "Lactose free", "Vegan", "Canned food", "Sweets and jams", "Flours and more", "Cookies, bakery and more", "Nuts, seeds and more", "Snacks", "Rice and pasta", "Oils, dressings and more", "Sugar, sweeteners and more", "Broths, soups and sauces", "Cereals, granola and more", "Chocolate and more"]

    useEffect(() => {
        dispatch(productsActions.getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {

        const selectCategoryBtn = async () => {
            const res = await dispatch(productsActions.filterPerCategory(category))

        }
        selectCategoryBtn()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])


    const currentStore = useSelector(store => store.productReducers.filterPerCategory)

    const filterStore = currentStore.filter(product => product.name.toLowerCase().includes(input.trim().toLowerCase()))




    return (
        <ScrollView >
            <ImageBackground source={{ uri: 'https://i.imgur.com/MNq7VpS.jpg' }} style={styles.imgBackground} resizeMode={'repeat'} >
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInput}
                            placeholder='Find your product'
                            value={input}
                        />
                    </View>
                    <SelectDropdown
                        data={arrayCategories}
                        onSelect={(selectedItem =>
                            setCategory(selectedItem))
                        }
                        defaultButtonText={'Select your category'}
                        buttonStyle={styles.buttonStyle}
                        dropdownStyle={styles.dropdown}
                        buttonTextStyle={styles.textSelect}
                        rowTextStyle={styles.textSelect}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                          }}
                    />

                    {filterStore?.length > 0 ? (<ProductFilter navigation={navigation} input={input} />) : <ProductNotFound/>}

                </View>
            </ImageBackground>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: height
    },
    imgBackground: {
        flex: 1
    },
    input: {
        height: 40,
        width: width - 100,
        backgroundColor: '#D9E8D8',
        borderRadius: 20,
        textAlign: 'center',
        color: '#0d0c22',
        shadowColor: '#f5f5f5eb',
        shadowRadius: 10
    },
    dropdown: {
        color: 'violet',
        backgroundColor: '#D9E8D8',
        borderRadius: 30,
        borderColor: '#ffcaa6',
        borderWidth: 1,
        shadowColor: '#f5f5f5eb',
        shadowRadius: 10,
    },
    buttonStyle: {
        backgroundColor: '#D9E8D8',
        borderRadius: 30,
        borderColor: '#ffcaa6',
        borderWidth: 1.3,
        marginTop: 5,
        height: 40
    },
    textSelect:{
        fontFamily: 'AlegreyaSans_400Regular',
        fontSize:22
    }
});
