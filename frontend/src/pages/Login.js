import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Register() {

  const [formData,setFormData]=useState({
    
    email:"",
    password:"",
   
  })

  const {email,password}=formData
const onChange=(e)=>{
  setFormData((prevstate)=>({
    ...prevstate,
    [e.target.name]:e.target.value,
  }))
}
const onSubmit=(e)=>{
e.preventDefault()
}
  return (
    <>
    <section className='heading'>
        <h1>
          <FaSignInAlt/>
            Login
        </h1>
        <p>Login and start setting Goals</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
        
      <input
        type='text'
        id='email'
        name='email'
        value={email}
        className="form-control"
        placeholder="Enter your email"
        onChange={onChange}
      />
      <input
        type='password'
        id='password'
        name='password'
        value={password}
        className="form-control"
        placeholder="Enter your password"
        onChange={onChange}
      />
      
      </div>
      <button className='btn btn-block' type='submit'>Submit</button>
      </form>
    </section>
    </>
  )
}
