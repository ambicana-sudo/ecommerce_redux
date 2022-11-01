import { Formik, Field, Form } from 'formik';
// import Select from "react-select";
import { useState} from 'react'
import * as Yup from 'yup';
import { message } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const AddProduct = () => {
	
	const [productName, setProductName] = useState("")
	const [productId, setProductId] = useState(null)
	const [quantity, setQuantity] = useState(null)
	const [brand, setBrand] = useState("")
	const [price, setPrice] = useState(null)
	// const [color, setColor] = useState()
	const [category, setCategory] = useState()
	// const [description, setDescription] = useState()
	// const [size, setSize] = useState()
	// const [selectedYear, setSelectedYear] = useState("");

	const fileHanlde = (e)=>{
		console.log(e.target.files)

		

	}
	

	const saveProducts = (e)=>{
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

		// const url = URL.createObjectURL(e.target.files[0])
		const formData = new FormData();
		formData.append('avatar', e.target.files[0])

		fetch('http://localhost:3001/products', {
			method: 'POST',
			body: formData,
			dataType: 'jsonP'
		})
		// setProductName('')
		// setProductId('')
		// setQuantity('')
		// setBrand('')
		// setPrice('')
  	}
  
	const SignupSchema = Yup.object().shape({
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

								<Field name="avatar" type="file" placeholder="uplaod Image" onChange={(e)=> fileHanlde(e)}/>
								{/* {errors.filePath && touched.filePath ? (
									<div className='error'>{errors.filePath}</div>
								) : null} */}

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