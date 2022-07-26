import React from "react";
import userActions from '../../redux/actions/userActions'
import { useDispatch } from "react-redux";

export default function SignInOut() {
    const dispatch = useDispatch();

    async function handleSubmitSignUp(event) {
        event.preventDefault();
        const userData = {
            fullName: event.target[0].value,
            role: "user",
            email: event.target[1].value,
            password: event.target[2].value,
            from: 'form-signup'
        }
        const res = await dispatch(userActions.signUpUsers(userData))
        alerts(res)
    };

    async function handleSubmitSignIn(event) {
        event.preventDefault();
        const logedUser = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: 'form-signup',
        }
        const res = await dispatch(userActions.logInUser(logedUser))
        alerts(res)
    }



    return (
        <>
            <View>hola</View>
        </>
    )
}