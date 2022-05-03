import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import e from 'cors'
export default function Register() {

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })

  const {name,email,password,password2}=formData
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
          <FaUser/>
          Register
        </h1>
        <p>Please Create an Account</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
      <div className='form-group'>
        <input
        type='text'
        id='name'
        name='name'
        value={name}
        className="form-control"
        placeholder="Enter your name"
        onChange={onChange}
      />

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
       <input
        type='password'
        id='password2'
        name='password2'
        value={password2}
        className="form-control"
        placeholder="Confirm your password"
        onChange={onChange}
      />

      </div>
      <button className='btn btn-block' type='submit'>Submit</button>
      </form>
    </section>
    </>
  )
}
