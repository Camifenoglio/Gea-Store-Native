import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Component } from 'react';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import Toast from 'react-native-toast-message'

const USE_LITE_CREDIT_CARD_INPUT = false;

export default class CreditCard extends Component {

    _onChange = formData => {

        console.log(JSON.stringify(formData, null, " "))
        
        if(formData.valid) {
            setTimeout(function(){
                Toast.show({type: 'success', text1:'Thank you for your business', position: 'bottom'})
               
            }, 8000);

        }
    };
    
       
    _onFocus = field => {
        // console.log(field,"field")
    };


    render() {
        return (
            <View style={styles.container}>
                {USE_LITE_CREDIT_CARD_INPUT ?
                    (<LiteCreditCardInput

                        onChange={this._onChange}
                        onFocus={this._onFocus}

                    />) : (<CreditCardInput
                    allowScroll
                    brand
                        requiresName
                        onChange={this._onChange}
                        onFocus={this._onFocus}
                    />)
                }

<TouchableOpacity >
                                    <Text style={styles.buttonClear} >Pay</Text>
                                </TouchableOpacity >

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40
    },

})