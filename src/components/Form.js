import React, { useState } from 'react'

export default function Form() {
  const togglealert=()=>{
    alert("Your form has been summited");
  }
  
  return (
    <div>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={togglealert} className="btn btn-primary">Submit</button>
  {/* <button type=" " onClick={clearclick} className="btn btn-primary">{clearform}</button> */}
</form>
      
    </div>
  )
}
