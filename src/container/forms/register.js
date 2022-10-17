import {useState, useEffect} from 'react'
import Button from '../../component/button'
import {Link} from "react-router-dom"
import React from 'react';
import { message } from 'antd';

const Login = ()=>{
	const [registerUser, setRegisterUser] = ([])
	const [inputName, setInputName] = useState("")
	const [nameErr, setNameErr] = useState("")
	const [inputEmail, setInputEmail] = useState("")
	const [emailErr, setEmailErr] = useState("")
	const [password, setPassword] = useState("")
	const [passErr, setPassErr] = useState("")

	const submitDetail = ()=>{
		const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
				name: inputName, 
				email: inputEmail, 
				password: password 
			})
        };
        fetch('http://localhost:3001/register', requestOptions)
			.then(response => response.json()).then(data=>{
			if(data.errmsg){
				message.info('Invalid')
			}else{
				message.info('User has been Registered')
			}
			console.log(data)
		})

		// name validation
		if(!inputName){
			setNameErr("This field is required")
		}else{
			setNameErr("")
		}

		// email validation
		if(!inputEmail){
			setEmailErr('This field is required')
		}else if(!/[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail)){
			setEmailErr("Invalid Email Address")
		}else{
            setEmailErr("")
        }

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
		<div className='wrapper'>
			<div className='form' id="register">
				<div className='form-head'>
					<Link to="/" className='back'>Back</Link>
					<h1>Create Account!</h1>
                    <p>You're one step away from creating your profile</p>
				</div>

				<div className='form-body'>
                    <div className='animate'>
                        <div className='form-group'>
                            <input placeholder="Name" onKeyUp={(e)=> setInputName(e.target.value)}></input>
                            {nameErr ? <span>{nameErr}</span> : null}
                        </div>

                        <div className='form-group'>
                            <input placeholder="Email" onKeyUp={(e)=> setInputEmail(e.target.value)}></input>
                            {emailErr ? <span>{emailErr}</span> : null}
                        </div>
                        
                        <div className='form-group'>
                            <input placeholder="Password" type="password" onKeyUp={(e)=> setPassword(e.target.value)}></input>
                            {passErr ? <span>{passErr}</span> : null}
                        </div>
                        
                        <Button name="Submit" submitDetail={submitDetail}/>
                    </div>
					
				</div>
			</div>
		</div>
	)
}
export default Login