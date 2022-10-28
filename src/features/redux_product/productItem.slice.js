import { createSlice} from "@reduxjs/toolkit";
// import { useEffect } from "react";
// import { axios } from "axios";

// const {data} = axios.get("/products");
// console.log(data)

export const initialState = { 
    loading: false, 
    productItems: [],
    error: '',
 }

// export const fetchProduct = createAsyncThunk('product/fetchProduct', ()=>{
//     return axios
//     .get('http://localhost:3001/products')
//     .then(res=> console.log(res.data))
// })

 const productSlice = createSlice({
    name: "produtItem",
    initialState,
    reducers: {
        productData: (state, actions) => {
            state.loading= false
            state.productItems= actions.payload.productItems
        },

        // loadingCase: (fetchProduct, (state, actions)=>{
        //     state.loading = true
        // }),

        // errorCase: (fetchProduct, (state, actions)=>{
        //     state.loading= false
        //     state.productItems= []
        //     state.error= actions.error.message
        // })
    }
 })

export const { productData, loadingCase, errorCase } = productSlice.actions;
export default productSlice.reducer;