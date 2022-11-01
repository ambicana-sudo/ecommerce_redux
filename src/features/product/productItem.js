import React from 'react'
import { productData, selectedProduct } from './productItem.slice'
import { useDispatch, useSelector } from 'react-redux'

const ProductListing = ()=>{
    const test = useSelector(state=>state.product)
    const dispatch = useDispatch()

    // const getProduct = ()=> {
    //     dispatch(productData())
    // }

    return(
        <></>
    )
}
export default ProductListing