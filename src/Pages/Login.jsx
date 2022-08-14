import React from "react";
import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

const Login = () => {
  const { isAuth, Login, Logout,postData ,email,setEmail,password,setPassword} = useContext(AuthContext);


  return (
    <div>
      <input type="email" value={email} placeholder="enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" value={password} placeholder="enter password"  onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={postData}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Login;
