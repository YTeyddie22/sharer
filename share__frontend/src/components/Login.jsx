import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../Assets/share.mp4'
import logo from '../Assets/logowhite.png'

const Login = () => {

    const responseGoogle = (response) => {

    }
    return (
        <div className = 'flex justify-start items-center flex-col h-screen'>
           <div className='relative w-full h-full'>
               <video
               src={shareVideo}
               type='video/mp4'
               loop
               controls={false}
                autoPlay
                muted
                className="w-full h-full object-cover"
               />
           </div>

           <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay">
               <div className = "p-8 mb-2">
                   <img src={logo} width ="120px" alt="logo"/>

               </div>
               <div className="shadow-2xl">
                   <GoogleLogin
                   clientId = ''
                   render={(renderProps)=>(
                       <button
                            type='button'
                            className = 'bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                       >
                           <FcGoogle className='mr-3'/>
                           Sign in with Google

                       </button>
                   )}
                   onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}
                   />

               </div>

           </div>
        </div>
    )
}

export default Login
