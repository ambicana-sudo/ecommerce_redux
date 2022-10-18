import ProductCat from "../component/product-catalog/product-display";
import Header from "../component/header";
import React from 'react';
import Banner from "../component/banner";

const Home =()=>{
	return(
		<div>
			<Header />
			<Banner/>
			<ProductCat />
		</div>
	)
}
export default Home