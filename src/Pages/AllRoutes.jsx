import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import SingleUserPage from "./SingleUserPage";
import Users from "./Users";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>} />
      <Route path="/users/:id" element={<PrivateRoute><SingleUserPage/></PrivateRoute>} />
    </Routes>
  );
};

export default AllRoutes;
