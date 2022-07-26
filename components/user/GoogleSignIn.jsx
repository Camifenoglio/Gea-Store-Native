import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import userActions from '../../redux/actions/userActions';
// import { useNavigate } from 'react-router-dom';
import toast  from 'react-hot-toast';


function GoogleSignIn() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

function alerts(res) {
        if (res.data.from !== "form-signup") {
            if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }
}
async function handleCallbackResponse(response) {
        const userObject = jwt_decode(response.credential)
        const res = await dispatch(userActions.logInUser({
                email: userObject.email,
                password: userObject.sub,
                from: 'google',
                }
            ))   
        
        alerts(res)
}

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize ({
            client_id: '69845613496-klv0hnctiaqdb4re26g2sg445uj4o4hf.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById('googleButtonSignIn'),
            { theme: "outline", size: "standard", locale:'en', width: '50%', borderRadius: '30px' }
            )
     // eslint-disable-next-line
    },[])

    return (
        <>  
        <div>
            <div id='googleButtonSignIn'></div>
        </div>
        </>
    )
}

export default GoogleSignIn;