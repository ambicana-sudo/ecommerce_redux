import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "../features/counter/counter.slice";

const ProductDetail = ()=>{
    
    const [product, setProduct] = useState([])

    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.count);

    const onUpClick = () => {
        dispatch(increament());
    };
    const onDownClick = () => {
        dispatch(decreament());
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

    return(
        <>
            <section id="page-wrap">
                <div className="container">
                    <div className="product-detail">
                        <div className="product-image">
                            {/* <img src={require('../uploads/' + product.filePath)} alt=""/> */}
                        </div>

                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <small className='product-cat'>{product.category}</small>
                            <p className="product-price"><em>${product.price}</em></p>
                            <div className="product-status">
                                <p>Stock: {product.quantity > 0 ? <span className="badge success">In Stock</span> : <span className="badge error">Out of Stock</span>}</p>
                            </div>

                            <div className='quantity'>
                                <button onClick={(e)=> onUpClick()}>+</button>
                                <p className='num'>{count}</p>
                                <button onClick={(e)=>onDownClick()}>-</button>
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