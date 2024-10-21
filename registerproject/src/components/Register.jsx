import React, { useState } from 'react'
import "../styles/register.css"
import toast from 'react-hot-toast';

const Register = () => {
  const [state, updatedstate] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""


  });

  function value(event) {
    updatedstate({ ...state, [event.target.name]: event.target.value })



  }
  function formsubmit(event) {
    event.preventDefault()

    if (state.name && state.email && state.password && state.confirmpassword) {
      if (state.password != state.confirmpassword) {

        return toast.error("Passoword and confirmpassword do not match")
      }
      try {
        const response = { data: { success: true, message: "Registration successfully completed redirecting to home page" }, }
        if (response.data.success) {
          toast.success(response.data.message)
        }


      }
      catch (error) {
        console.log(error)
      }
    }
        else {
      return toast.error("All fields are required")
    }





  
  }

  return (

    <div className='registersection'>
      <form autoComplete='off' onSubmit={formsubmit}>
        <label>Name-</label>
        <input type='text' onChange={value} placeholder='Enter your name' name="name"></input>
        <br></br>
        <br></br>
        <label>Email-</label>
        <input type='email' onChange={value} placeholder='Enter your email' name="email"></input>
        <br></br>
        <br></br>

        <label>Password-</label>
        <input type='password' onChange={value} autoComplete='new-password' placeholder='Enter your password' name="password"></input>
        <br></br>
        <br></br>



        <label>Confirm Password-</label>
        <input type='password' onChange={value} placeholder='Enter your password' name="confirmpassword"></input>
        <br></br>
        <br></br>

        <input type="submit"></input>




      </form>


    </div>




  )
}

export default Register
