import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Header from "../component/header";
import {Helmet} from 'react-helmet-async'
import { increment, decrement } from '../redux/counter/counter.slice';
import { useDispatch , useSelector} from 'react-redux';

const ProductDetail = ()=>{

    const dispatch = useDispatch();
    const {count} = useSelector(state=>state.count)

	const onDownClick = () => {
		dispatch(decrement());
	};

	const onUpClick = () => {
		dispatch(increment());
	};

    const [product, setProduct] = useState([])
    const params = useParams();
    const {_id} = params

    // console.log(product)

    const fetchList = () => {
        fetch(`http://localhost:3001/products/${_id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data){
                setProduct(data)
            }
        })
        }
        useEffect(()=>{
            fetchList()
    },[])

    return(
        <>
            <Header />
            <title>{product.name}</title>
            <section id="page-wrap">
                <div className='container'>
                    <div className='product-detail'>
                        { <div className="product-image">
                            <img src={require('../' + product.filePath)} alt=""/>
                        </div> }
                        <div className='product-info'>
                            <h3 className="product-name">{product.name}</h3>
                            <small className='product-cat'>{product.category}</small>
                            <p className="product-price"><strong>${product.price}</strong></p>

                            <div className='quantity'>
                                <button onClick={(e)=> onUpClick()}>+</button>
                                <p className='num'>{count}</p>
                                <button onClick={(e)=>onDownClick()}>-</button>
                            </div>

                            <div className='product-status'>
                                <span>Status: </span>
                                {product.quantity > 0 ? <span className='success badge'>In Stock</span> : <span className='error badge'>Out of Stock</span>}
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