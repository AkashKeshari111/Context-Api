import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContext'

const Status = () => {
    const {isAuth,token}=useContext(AuthContext);


    console.log("abc")
  return (
    <div>{isAuth?token:""}</div>
  )
}

export default Status