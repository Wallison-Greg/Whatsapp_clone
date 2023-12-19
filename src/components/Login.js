import React from 'react'
import './Login.css'

import {auth} from '../firebaseConfig'
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth'

const Login = ({onReceive}) => {

    const handleLoginFaceboock = () => {

        const provider = new FacebookAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            onReceive(result.user)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='login'>
        <button onClick={handleLoginFaceboock}> Fazer login com o Faceboock</button>
    </div>
  )
}

export default Login