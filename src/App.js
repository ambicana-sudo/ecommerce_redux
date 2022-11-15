import React from "react";
import './App.css';
import Login from "./container/forms/login";
import Register from "./container/forms/register"
import ErrorPage from "./container/error-page"
import AddProduct from "./container/forms/add-product";
// import Header from "./component/header";
import Home from "./container/home";
import Cart from "./container/cart";
import Wishlist from "./container/wishList";
import ProductDetail from "./container/product-detail";
import WebFont from "webfontloader";
import {useEffect} from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
 } from "react-router-dom";
import PrivateComp from "./component/privateComponent";
import Profile from "./container/profile";
import Logout from "./container/logout";

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
				<Route path="/product/:_id" element={<ProductDetail/>}></Route>
				<Route path="*" element={<ErrorPage/>}></Route>

				<Route element={<PrivateComp/>}>
					<Route path="/wishlist" element={<Wishlist/>}></Route>
					<Route path="/cart" element={<Cart/>}></Route>
					<Route path="/profile" element={<Profile/>}></Route>
					<Route path="/logout" element={<Logout/>}></Route>
				</Route>
				
			</Routes>
		</Router>
    </div>
  )
}

export default App;
