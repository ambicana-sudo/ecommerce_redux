import React from 'react';
import {useParams} from 'react-router-dom'

const ProductDetail = ()=>{
    const params = useParams();
    const {_id} = params
    return(
        <>
            <h1>{_id}</h1>
        </>
    )
}
export default ProductDetail