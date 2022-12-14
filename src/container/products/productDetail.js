import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItems, decreaseQuantity } from "../../redux/cart/cart.slice";


const ProductDetail = ()=>{
    
    const [product, setProduct] = useState([])

    const dispatch = useDispatch();

    const onUpClick = (product) => {
        dispatch(addCartItems(product));
    };
    const onDownClick = (product) => {
        dispatch(decreaseQuantity(product));
    };

    const params = useParams();
    const {_id} = params;

    const fetchList = ()=>{
        fetch(`http://localhost:3001/products/${_id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data){
                setProduct(data)
            }else{
                setProduct({message : 'product not found'})
            }
        })
    }

    useEffect(()=>{
        fetchList()
    }, [])
// console.log('../uploads/' + product.filePath)
    return(
        <>
            <section id="page-wrap">
                <div className="container">
                    <div className="product-detail">
                        <div className="product-image">
                            {/* <img src={require('../uploads/' + product.filePath)} alt=""/> */}
                            {product.filePath ? <img src={require('../../uploads/' + product.filePath)} alt=""/> : 'image not found'}
                        </div>

                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <small className='product-cat'>{product.category}</small>
                            <p className="product-price"><em>${product.price}</em></p>
                            <div className="product-status">
                                <p>Stock: {product.quantity > 0 ? <span className="badge success">In Stock</span> : <span className="badge error">Out of Stock</span>}</p>
                            </div>

                            <div className='quantity'>
                                <button onClick={()=> onUpClick(product)}>+</button>
                                <p className='num'>{product.cartQuantity === 1}</p>
                                <button onClick={()=>onDownClick(product)}>-</button>
                            </div>

                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductDetail