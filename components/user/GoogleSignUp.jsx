import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import userActions from '../../redux/actions/userActions';
import toast from 'react-hot-toast'
import '../../styles/signinout.css'


function GoogleSignUp() {
    // const navigate = useNavigate()
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
async function handleCallbackResponse(response) {
        const userObject = jwt_decode(response.credential)
        const res = await dispatch(userActions.signUpUsers({
                fullName: userObject.name,
                email: userObject.email,
                password: userObject.sub,
                imageUser: userObject.picture,
                verification: userObject.email_verified,
                role: 'user',
                from: 'google'
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
            document.getElementById('googleButton'),
            { theme: "outline", size: "standard", locale:'en', width: '50%' }
            )
     // eslint-disable-next-line
    },[])

    return (
        <>  
        <div>
            <div id='googleButton'></div>
        </div>
        </>
    )
}

export default GoogleSignUp;