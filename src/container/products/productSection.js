import SideContent from "../../component/products/sideContent"
import RightContent from "../../component/products/rightContent"
import React from 'react';
import {useState, useEffect} from 'react'

const ProductDisplay = ()=>{
    const [products, setProducts] = useState([])

    const fetchList = () => {
        fetch(`http://localhost:3001/products`)
        .then(res=>res.json())
            .then(data=>{
                setProducts(data.productList)})
        }
        useEffect(()=>{
            fetchList()
    },[])

    const getDataList = (data, key)=>{
        let filterKey = data.map((item)=>{
            return item[key]
        })

        return filterKey = ['all', ...new Set(filterKey)]
    }

    const getcategoryList = getDataList(products, "category")    
    const getBrandList = getDataList(products, "brand")
    // console.log(getcategoryList)

    return(
        <section className="product-section">
            <SideContent name="sideContent" category={getcategoryList} brand={getBrandList}/>
            <RightContent name="rightContent" />
        </section>
        
    )
}
export default ProductDisplay