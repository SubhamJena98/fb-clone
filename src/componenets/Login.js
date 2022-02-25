import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                    alt=""
                />
                <img
                    src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>Sign In With Google</Button>

        </div>
    )
}

export default Login