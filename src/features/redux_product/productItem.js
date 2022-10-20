import React from 'react'
import { changeWidth } from './productItem.slice'
import { useDispatch, useSelector } from 'react-redux'

const ProductItem = ()=>{
    const {products} = useSelector(state=>state.product)
    const dispatch = useDispatch()
    return(
        <></>
    )
}
export default ProductItem