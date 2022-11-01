import ProductContent from "./productContent";
import Header from "../component/header";
import React from 'react';
import Banner from "../component/banner";

const Home =()=>{
	return(
		<div>
			<Header />
			<Banner/>
			<ProductContent />
		</div>
	)
}
export default Home