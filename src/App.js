import React from "react";
import './App.css';
import Login from "./container/forms/login";
import Register from "./container/forms/register"
import ErrorPage from "./container/error-page"
import AddProduct from "./container/forms/add-product";
import Home from "./container/home";
// import {useState, useEffect} from 'react'

import {
	BrowserRouter as Router,
	Routes,
	Route,
 } from "react-router-dom";

const App = ()=> {

  return (
    <div className="App">
		{/* <Home /> */}
		<Router>
			<Routes>
				<Route exact path="/" element={<Login/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/admin" element={<AddProduct/>}></Route>
				<Route path="/home" element={<Home/>}></Route>
				<Route element={<ErrorPage/>}></Route>
			</Routes>
		</Router>
    </div>
  )
}

export default App;
