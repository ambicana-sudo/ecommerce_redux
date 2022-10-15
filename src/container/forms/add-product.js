import { Formik, Field, Form } from 'formik';
// import Select from "react-select";
import { useState} from 'react'
import * as Yup from 'yup';
import { message } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const AddProduct = () => {
	
	const [productName, setProductName] = useState()
	const [productId, setProductId] = useState()
	const [quantity, setQuantity] = useState()
	const [brand, setBrand] = useState()
	const [price, setPrice] = useState()
	// const [color, setColor] = useState()
	const [category, setCategory] = useState()
	// const [description, setDescription] = useState()
	// const [size, setSize] = useState()
	// const [selectedYear, setSelectedYear] = useState("");

	

	const saveProducts = ()=>{
		const date = Date.now()

		const requestOptions = {
			 method: 'POST',
			 headers: { 'Content-Type': 'application/json' },
			 body: JSON.stringify({ 
				name: productName, 
				id: productId, 
				quantity: quantity,
				price: price,
				brand: brand,
				category: category,
				created: date,
				isLiked: false,
			})
		};
		fetch('http://localhost:3001/products', requestOptions)
			.then(response => response.json()).then(data=>{
			if(data.errmsg){
				message.info('Invalid')
			}else{
				message.info('Product has been saved')
			}
		})
  	}
  
	const SignupSchema = Yup.object().shape({
		productName: Yup.string()
			.required('Required'),
		price: Yup.string()
			.required('Required'),
		brand: Yup.string().required('Required'),
	});

	// const colorOptions = [
	// 	{ value: "red", label: "red" },
	// 	{ value: "green", label: "green" },
	// 	{ value: "blue", label: "blue" },
	// 	{ value: "orange", label: "orange" },
	// ];
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
							}}
							validationSchema={SignupSchema}
							onSubmit={values => {
								// same shape as initial values
								saveProducts()
							}}
						>
						{({ errors, touched }) => (
							<Form>
								<Field name="productName" placeholder="Product Name" onKeyUp={(e)=> setProductName(e.target.value)}/>
								{errors.productName && touched.productName ? (
									<div className='error'>{errors.productName}</div>
								) : null}

								<Field name="productId" placeholder="Product Id" onKeyUp={(e)=> setProductId(e.target.value)}/>
								
								<Field name="price"  placeholder="Price" onKeyUp={(e)=> setPrice(e.target.value)}/>
								{errors.price && touched.price ? (
									<div className='error'>{errors.price}</div>
								) : null}

								<Field name="brand" placeholder="Brand"  onKeyUp={(e)=> setBrand(e.target.value)}/>
								{errors.brand && touched.brand ? <div className='error'>{errors.brand}</div> : null}

								<Field name="quantity" placeholder="Quantity" type="number" onKeyUp={(e)=> setQuantity(e.target.value)}/>

								{/* <Field id="color" name="color" as={Select} options={colorOptions} placeholder="Select Color" onChange={(e, selected) => setFieldValue("industry", selected.value)}/>
								<div>
									{touched.color && errors.color
									? errors.color
									: null}
								</div> */}

								<Field name="category" placeholder="Category" onKeyUp={(e)=> setCategory(e.target.value)}/>
								{errors.category && touched.category ? (
									<div className='error'>{errors.category}</div>
								) : null}

								<button>Save</button>
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