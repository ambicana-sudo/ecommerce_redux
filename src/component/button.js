import React from 'react';
const Button =(props)=>{
    return(
        <button onClick={()=> props.submitDetail()}>{props.name}</button>
    )
}
export default Button