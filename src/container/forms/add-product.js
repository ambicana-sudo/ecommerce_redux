import { Formik, Field, Form } from 'formik';
import { useState} from 'react'
import * as Yup from 'yup';
import { message } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

import DemoAddProduct from './demo-product-form';

const AddProduct = () => {
	// <DemoAddProduct/>
	const [productName, setProductName] = useState("")
	const [productId, setProductId] = useState(null)
	const [quantity, setQuantity] = useState(null)
	const [brand, setBrand] = useState("")
	const [price, setPrice] = useState(null)
	const [category, setCategory] = useState()
	const [file, setFile] = useState('')

	const fileUpload = (e)=>{
		// console.log(event.target.files[0])
        // console.log(URL.createObjectURL(event.target.files[0]))
        const imgURL = e.target.files[0]
        // console.log(imgURL)
        setFile(imgURL)
	}
	
	const saveProducts = ()=>{
		const date = Date.now()

		// const url = URL.createObjectURL(e.target.files[0])
		const formData = new FormData();
		formData.append('avatar', file)
		formData.append('name', productName)
		formData.append('id', productId)
		formData.append('quantity', quantity)
		formData.append('category', category)
		formData.append('price', price)
		formData.append('brand', brand)
		formData.append('created', date)
		formData.append('isLiked', false)

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
  
	const SignupSchema = Yup.object().shape({
		productName: Yup.string()
			.required('Name is Required'),
		price: Yup.number()
			.required("* Price is Required!!")
			.positive("* Must be positive number!!")
			.integer("* Must be Integer value!!"),
		brand: Yup.string().required('Brand is Required'),
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
							initialValues={{
								productName: '',
								price: '',
								brand: '',
								quantity: '',
								category: '',
								filePath: '',
							}}
							validationSchema={SignupSchema}
							onSubmit={values => {
								saveProducts()
							}}
						>
						{({ errors, touched }) => (
							<Form>
								<Field name="productName" placeholder="Product Name" onKeyUp={(e)=> setProductName(e.target.value)}/>
								{errors.productName && touched.productName ? (<div className='error'>{errors.productName}</div>) : null}

								<Field name="productId" placeholder="Product Id" onKeyUp={(e)=> setProductId(e.target.value)}/>
								
								<Field name="price"  placeholder="Price" onKeyUp={(e)=> setPrice(e.target.value)}/>
								{errors.price && touched.price ? (<div className='error'>{errors.price}</div>) : null}

								<Field name="brand" placeholder="Brand"  onKeyUp={(e)=> setBrand(e.target.value)}/>
								{errors.brand && touched.brand ? <div className='error'>{errors.brand}</div> : null}

								<Field name="quantity" placeholder="Quantity" type="number" onKeyUp={(e)=> setQuantity(e.target.value)}/>

								<Field name="category" placeholder="Category" onKeyUp={(e)=> setCategory(e.target.value)}/>
								{errors.category && touched.category ? (<div className='error'>{errors.category}</div>) : null}

								<Field name="avatar" type="file" placeholder="uplaod Image" onChange={(e)=> fileUpload(e)}/>
								{/* {errors.filePath && touched.filePath ? (<div className='error'>{errors.filePath}</div>) : null} */}

								<button type="submit">Save</button>
							</Form>
						)}
						</Formik>
					</div>	
				</div>
			</div>
		</>
	)
}

export default AddProduct;