import Button from './button';
import React from 'react';

const Form = (props)=>{

	return(
        <>
            <h1>{props.name}</h1>
            <div className='form-group'>
                <input placeholder="Name" onKeyUp={(e)=> props.InputName(e.target.value)}></input>
                {props.nameErr ? <span>{props.nameErr}</span> : null}
            </div>

            <div className='form-group'>
                <input placeholder="Email" onKeyUp={(e)=> props.InputEmail(e.target.value)}></input>
                {props.emailErr ? <span>{props.emailErr}</span> : null}
            </div>
            
            <div className='form-group'>
                <input placeholder="Password" onKeyUp={(e)=> props.Password(e.target.value)}></input>
                {props.passErr ? <span>{props.passErr}</span> : null}
            </div>
        </>
	)
}
export default Form