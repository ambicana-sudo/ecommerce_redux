import React from "react";
import './App.css';
import Login from "./container/forms/login";
import Register from "./container/forms/register"
import ErrorPage from "./container/error-page"
import AddProduct from "./container/forms/add-product";
// import Header from "./component/header";
import Home from "./container/home";
import Wishlist from "./container/wishlist";
import Cart from "./container/cart";
import ProductDetail from "./container/product-detail";
import WebFont from "webfontloader";
import {useEffect} from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
 } from "react-router-dom";


const App = ()=> {
	useEffect(()=>{
		WebFont.load({
			google: {
				families: ['Roboto', 'Poppins']
			}
		})
	}
	,[])

  return (
    <div className="App">
		<Router>
			{/* <Header/> */}
			<Routes>
				<Route exact path="/" element={<Login/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/admin" element={<AddProduct/>}></Route>
				<Route path="/home" element={<Home/>}></Route>
				<Route path="/wishlist" element={<Wishlist/>}></Route>
				<Route path="/cart" element={<Cart/>}></Route>
				<Route path="/product/:productId" element={<ProductDetail/>}></Route>
				<Route path="*" element={<ErrorPage/>}></Route>
			</Routes>
		</Router>
    </div>
  )
}

export default App;
