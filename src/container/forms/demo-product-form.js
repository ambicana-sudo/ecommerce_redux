import React from "react";
import { useState } from "react";
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';

const DemoAddProduct = () => {

    const [file, setFile] = useState('')

    const fileUpload = (e)=>{
		const imgUrl = (e.target.files[0])
        setFile(imgUrl)
	}

    const saveProducts = ()=>{
		const date = Date.now()

		// const url = URL.createObjectURL(e.target.files[0])
		const formData = new FormData();
		// formData.append('avatar', file)
		// formData.append('name', values.productName)
		// formData.append('id', values.productId)
		// formData.append('quantity', values.quantity)
		// formData.append('category', values.category)
		// formData.append('price', values.price)
		// formData.append('brand', values.brand)
		// formData.append('created', date)
		// formData.append('isLiked', false)

		fetch('http://localhost:3001/products', {
			method: 'POST',
			body: formData,
			dataType: 'jsonP',
		})
		if(formData.errmsg){
			message.info('Invalid')
		}else{
			message.info('Product has been saved')
		}
  	}

    // const saveProducts = ()=>{
	// 	const date = Date.now()

	// 	const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ 
    //            name: productName, 
    //            id: productId, 
    //            quantity: quantity,
    //            price: price,
    //            brand: brand,
    //            category: category,
    //            created: date,
    //            isLiked: false,
    //        })
    //    };
    //    fetch('http://localhost:3001/products', requestOptions)
    //        .then(response => response.json()).then(data=>{
    //        if(data.errmsg){
    //            message.info('Invalid')
    //        }else{
    //            message.info('Product has been saved')
    //        }
    //    })
  	// }

    const SignUpSchema = Yup.object().shape({
		productName: Yup.string()
			.required('Required'),
		price: Yup.string()
			.required('Required'),
		brand: Yup.string().required('Required'),
	});

   
    return(
        <>
            <div className='form' id="add-product">
                <div className='form-head'>
                    <h1>Add Products</h1>
                    <p>Fillup the form to add new products.</p>
                </div>

                <div className='form-body'>
                    <div className='animate'>
                        <Formik
                            initialValues = {
                                {
                                    productName: '',
                                    price: '',
                                    brand: '',
                                    quantity: '',
                                    category: '',
                                    filePath: '',
                                }
                            }
                            validationSchema = {SignUpSchema}
                            onSubmit = {values => {
                                saveProducts()
                            }}
                        >

                        { ({values, errors, touched, handleChange}) => (
                            <Form>
                                <Field name="productName" placeholder="Product Name" value={values.productName} onChange={handleChange} />
                                {errors.productName && touched.firstproductNamename ? (<div>{errors.productName}</div>) : null}

                                <Field name="productId" placeholder="Product Id" value={values.productId} onChange={handleChange} />
                                {errors.productId && touched.lastproductIdname ? (<div>{errors.productId}</div>) : null}

                                <Field name="price" placeholder="Product Price" value={values.price} onChange={handleChange} />
                                {errors.price && touched.price ? (<div>{errors.price}</div>) : null}

                                <Field name="brand" placeholder="Brand Name" value={values.brand} onChange={handleChange} />
                                {errors.brand && touched.brand ? (<div>{errors.brand}</div>) : null}

                                <Field name="quantity" placeholder="Product Quantity" value={values.quantity} onChange={handleChange} />
                                {errors.quantity && touched.quantity ? (<div>{errors.quantity}</div>) : null}

                                <Field name="category" placeholder="Product Category" value={values.category} onChange={handleChange} />
                                {errors.category && touched.category ? (<div>{errors.category}</div>) : null}

                                <Field name="avatar" type="file" placeholder="uplaod Image" onChange={(e)=> fileUpload(e)}/>

                                <button type="submit" className="btn btn-success">Submit</button>
                            </Form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DemoAddProduct