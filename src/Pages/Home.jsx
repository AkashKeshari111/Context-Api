import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContext'

const Home = () => {

  const {isAuth,toggleAuth}=useContext(AuthContext);

  if(isAuth){
    return <Navigate to="/users"/>
  }
  return (
    <div><h3>Home</h3>
      <button onClick={toggleAuth}>Login</button>
    </div>
  )
}

export default Home