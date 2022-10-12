import {useState} from 'react'
import Button from '../../component/button';
import{Link} from "react-router-dom"
import React from 'react';
// import FormInput from '../../component/form-input';


const Login = ()=>{
	const [inputName, setInputName] = useState("")
	const [nameErr, setNameErr] = useState("")
	const [password, setPassword] = useState("")
	const [passErr, setPassErr] = useState("")

	const submitDetail = ()=>{
		// name validation
		if(!inputName){
			setNameErr("This field is required")
		}else{
			setNameErr("")
		}

		// email validation
		// if(!inputEmail){
		// 	setEmailErr('This field is required')
		// }else if(!/[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail)){
		// 	setEmailErr("Invalid Email Address")
		// }else{
        //     setEmailErr("")
        // }

		// password validation
		if(password.length < 8){
			setPassErr("Password must have atleast 8 characters")
		}else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
			setPassErr("password should contain atleast one number and special character")
		}else{
            setPassErr("")
        }
	}

	return(
		<div className='container'>
			<div className='form' id="login">
				{/* <div className='left'>
					<h2>Welcome Back!</h2>
                    <p>Login to continue</p>
					 <img src={window.location.origin + '/images/my_password.svg'} alt="login"></img> 
				</div> */}

					<div className='form-head'>
						<h1>Login</h1>
						<p>Login to continue</p>
					</div>
					
					<div className='form-body'>
						<div className='animate'>
							{/* <FormInput inputFields={[name, password]}/> */}
							<div className='form-group'>
								<input placeholder="Name" onKeyUp={(e)=> setInputName(e.target.value)}></input>
								{nameErr ? <span>{nameErr}</span> : null}
							</div>
							
							<div className='form-group'>
								<input placeholder="Password" onKeyUp={(e)=> setPassword(e.target.value)}></input>
								{passErr ? <span>{passErr}</span> : null}
							</div>
							
							<Button name="Login" submitDetail={submitDetail}/>
						</div>

						<p>Don't have an account?<Link to="/register">Signup</Link></p>
					</div>
			</div>
		</div>
		
	)
}
export default Login