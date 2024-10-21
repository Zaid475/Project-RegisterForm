import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const path = useNavigate();

  function toregister() {
    path("/register");
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", border:"1px solid black"}}>
      <h1 style={{ cursor: 'pointer' }}>Login</h1>
      <h1 onClick={toregister} style={{ cursor: 'pointer' }}>Register</h1>
      <h1></h1>


    </div>
  )
}

export default Navbar;
