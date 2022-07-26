import axios from 'axios';
import urlBack from '../../urlBack';

const userActions = {
    signUpUsers: (userData) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(urlBack + '/api/auth/signup', userData )
                console.log(res)
                await dispatch({
                    type: 'USER',
                    payload: res.data.response
                })
                await dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            } catch (error) {
                console.log(error)
            }
        }
    },


    logInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const user = await axios.post(urlBack + '/api/auth/signin', { logedUser })
            console.log(user)
            if (user.data.success) {
                localStorage.setItem('token', user.data.response.token)
                //tomo el token que le envie desde el back y lo envio al local storage
                dispatch({ type: "USER", payload: user.data.response.userData });
            }
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            });
            return user
        }

    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get(urlBack + '/api/auth/token', {  // la ruta recibe a traveza del header el metodo de authorizacion bearer
                headers: {
                    'Authorization': 'Bearer ' + token
                }, //  Bearer es un metodo que permite autenticar y autorizar usuarios 
                // El espacio es para que no se quede el token pegado.
            })
                .then(user => {
                    if (user.data.success) {
                        dispatch({ type: 'USER', payload: user.data.response });
                        dispatch({
                            type: 'message',
                            payload: {
                                view: true,
                                message: user.data.message,
                                success: user.data.success
                            }
                        });
                    } else { localStorage.removeItem('token') }
                }).catch(error => {
                    if (error.response.status === 401)
                        dispatch({
                            type: "message",
                            payload: {
                                view: true,
                                message: "Please Log In again",
                                success: false
                            }
                        })
                    localStorage.removeItem('token')
                })
        }
    },
    logOutUser: () => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token')
            dispatch({
                type: 'USER',
                payload: null
            })
        }
    }


}
export default userActions