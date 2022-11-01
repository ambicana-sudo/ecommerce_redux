import SideContent from "../component/product-catalog/sideContent"
import RightContent from "../component/product-catalog/rightContent"
import React from 'react';

const ProductDisplay = ()=>{

    return(
        <section className="product-section">
            <SideContent name="sideContent"/>
            <RightContent name="rightContent"/>
        </section>
        
    )
}
export default ProductDisplay