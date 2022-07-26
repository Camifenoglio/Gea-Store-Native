import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import { View } from 'react-native';


export default function FacebookIn() {

    const dispatch = useDispatch();

    function alerts(res) {
        const errormsg = res.data.message
        if (res.data.from === "validator") {
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res.data.from !== "form-signup") {
            if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }
    }
    const responseFacebook = async (response) => {
        const logedUser = {
            email: response.email,
            password: "12345678",
            from: response.graphDomain
        }
        const res = await dispatch(userActions.logInUser(logedUser))
        alerts(res)
    }
    return (
        <>
            <View className='btn-facebook'>
                <FacebookLogin
                    appId="606786154197576"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                    textButton="Sign in with Facebook"
                    cssClass='facebook-login'
                />
            </View>
        </>
    )
}

