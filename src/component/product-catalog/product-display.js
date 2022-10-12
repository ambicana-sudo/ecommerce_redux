import Sidebar from "./sidebar"
import Leftbar from "./leftbar"
import React from 'react';

const ProductCat = ()=>{

    return(
        <section className="product-section">
            <Sidebar name="sidebar"/>
            <Leftbar name="leftbar"/>
        </section>
    )
}
export default ProductCat