import React,{useState,useRef,useEffect} from 'react'
import {HiMenu} from 'react-icons/hi'
import  {AiFillCloseCircle}  from 'react-icons/ai'

import {Link,Route,Routes} from 'react-router-dom'

import {client} from '../client'
import logo from '../Assets/logo.png'
import {SideBar,UserProfile} from '../components'
import Pins from './Pin'



const Home = () => {
    return (
        <div>
            Home
        </div>
    )
}

export default Home
