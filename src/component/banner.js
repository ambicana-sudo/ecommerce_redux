import React from 'react'
import Image from '../images/nike-removebg-preview.png'
import NewProduct from './products/new-products'

const Banner = ()=>{
    return(
        <section className="banner_section">
            <div className='container'>
                <div className="banner_content">
                    <strong>Shoes</strong>

                    <div className="arrival-info">
                        <h1 className='banner-title'>New<br/>Products</h1>
                        <p>Checkout our newly arrived products</p>
                    </div>
                    
                    <div className="new-product">
                        <div className='product-image'>
                            <img src={Image} alt=""></img>
                        </div>
                        
                        <div className='product-info'>
                            <h3 className="product-name">Nike Air Force</h3>
                            <p className="product-price">$185</p>
                            <button>
                                {/* <span><FontAwesomeIcon icon={faArrowRightLong} /></span> */}
                                Get It Now
                            </button>
                        </div>
                    </div>
                </div>
                <NewProduct/>
            </div>
        </section>
    )
}
export default Banner