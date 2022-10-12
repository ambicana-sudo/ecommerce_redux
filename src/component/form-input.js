import React from "react"
const FormInput = (props)=>{
    return(
        <>
            {props.inputFileds.map((item)=>{
                <div className='form-group'>
                    <input placeholder={props.item.Name} onKeyUp={(e)=> setInputName(e.target.value)}></input>
                    {nameErr ? <span>{nameErr}</span> : null}
                </div>
            })}   
        </>
    )
}
export default FormInput