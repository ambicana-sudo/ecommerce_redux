import {useState} from 'react'
import{Link} from "react-router-dom"
import React from 'react';
import { message } from 'antd';
// import FormInput from '../../component/form-input';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const Login = ()=>{
	const [inputName, setInputName] = useState("")
	const [nameErr, setNameErr] = useState("")
	const [password, setPassword] = useState("")
	const [passErr, setPassErr] = useState("")
	const [passType, setPassType] =useState("password")
	const navigate = useNavigate()

	const togglePassword = ()=>{
		if(passType === "password"){
			setPassType("text")
		}else{
			setPassType("password")
		}
	}

	const submitDetail = ()=>{
		// name validation
		if(!inputName){
			setNameErr("This field is required")
		}else{
			setNameErr("")
		}	

		// password validation
		if(password.length < 8){
			setPassErr("Password must have atleast 8 characters")
		}else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
			setPassErr("password should contain atleast one number and special character")
		}else{
         setPassErr("")
			if(inputName){
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ 
						name: inputName, 
						password: password 
					})
				};
				fetch('http://localhost:3001/login', requestOptions)
				.then(res=>res.json())
				.then(data=>{
					if(data.errmsg){
						message.info('Invalid user or password')
					}else{
						message.info(`You're logged In`)
						navigate('/home')
					}
				})
			}
      	}
		setInputName('')
		setPassword('')
	}

	return(
		<div className='container'>
			<div className='form' id="login">
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
						
						<div className='form-group passfield'>
							<input type={passType} placeholder="Password" onKeyUp={(e)=> setPassword(e.target.value)}></input>
							<button onClick={()=> togglePassword()}>
								{passType === "password" ? <FontAwesomeIcon icon={faEye}/> :<FontAwesomeIcon icon={faEyeSlash}/>}
							</button>
							{passErr ? <span>{passErr}</span> : null}
						</div>
						
						<button type="submit" onClick={()=> submitDetail()}>Login</button>
					</div>

					<p>Don't have an account?<Link to="/register">Signup</Link></p>
				</div>
			</div>
		</div>
	)
}
export default Login