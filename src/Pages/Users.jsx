import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";
import Pagination from "../Pagination/Pagination";

const Users = () => {
  const [data, setData] = useState({});
  const [text,setText]=useState("");
  const [limit, setLimit] = useState(2);
  const [total, setTotal] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const navigate=useNavigate();
 

  const {setIsAuth,isAuth}=useContext(AuthContext);
   const [searchParams,setSearchParams]=useSearchParams()
  const initialPage=Number(searchParams.get("page"))||1
  const [page, setPage] = useState(initialPage);
  const getData = ({page, limit}) => {
    setloading(true);
    setError(false);
    fetch(`https://reqres.in/api/users?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        setloading(false);
        setError(false);
        setData(res);
        console.log(res.data);
        setTotal(res.total_pages);
        console.log(res.total_pages);
      })
      .catch((err) => {
        setloading(false);
        setError(true);
        console.log(err);
      });
  };




  const handleNavigate=()=>{
    setIsAuth(false)
    navigate("/")
  }


  const handleLink=()=>{
    setIsAuth(false)
  }
  const onChange = (value) => {
    setPage((prev) => prev + value);
  };

  useEffect(() => {
    getData({page, limit});
  }, [page, limit]);


  useEffect(()=>{
    setSearchParams({page,query:text})
  },[page,text])

  // if(true){
  //   return <Navigate to="/"/>
  // }
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {/* <button onClick={handleASC}>ASC</button> <button onClick={handleDESC}>DESC</button> */}
      <button onClick={handleNavigate}>Go to home by navigate</button>
     <Link to="/"><button onClick={handleLink}>Go to home by link</button></Link> 
     <input value={text} onChange={(e)=>setText(e.target.value)}/>
      {data &&
        data?.data?.map((items) => (
          <div key={items.id}>
            <Link to={`/users/${items.id}`}>{items.first_name}</Link>
          </div>
        ))}
      <Pagination onChange={onChange} page={page} total={total} />
    </div>
  );
};

export default Users;
