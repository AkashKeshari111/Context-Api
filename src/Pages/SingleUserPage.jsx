import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleUserPage = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const getData = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(params.id);
  }, [params.id]);
  return (
    
      <div>
        <img src={data.avatar} alt={data.avatar} />
        <h3>
          {data.first_name} {data.last_name}
        </h3>
        <p>{data.email}</p>

        <div>
            <Link to="/users">Go back</Link>
        </div>
      </div>
    
  );
};

export default SingleUserPage;
