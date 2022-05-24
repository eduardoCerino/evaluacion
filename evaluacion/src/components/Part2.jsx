import React from 'react'



const Part2 = () => {
  return (

    <form className="form-control  p-5 m-5">
     <h1> True or false</h1>

     <div className="input-group-text d-flex flex-column">
        <p>Modern Web browsers can read JSX directly </p>
        <label className="form-label">True </label>
        <input type="radio" name="p1" id="p1"  className="form-check-input mt-0"/>
        <label className="form-label">False </label>
        <input type="radio" name="p1" id="p1-1" className="form-check-input mt-0"/>
     </div>
     <div className="input-group-text mt-4 d-flex flex-column">
        <p>In a web browser a JSX file needs to be transformed into a regular JavaScript object </p>
        <label className="form-label">True </label>
        <input type="radio" name="p2" id="p2"  className="form-check-input mt-0"/>
        <label className="form-label">False </label>
        <input type="radio" name="p2" id="p2-2" className="form-check-input mt-0"/>
     </div>
     <div className="input-group-text mt-4 d-flex flex-column">
        <p>DOM stands for Document Only Module </p>
        <label className="form-label">True </label>
        <input type="radio" name="p3" id="3"  className="form-check-input mt-0"/>
        <label className="form-label">False </label>
        <input type="radio" name="p3" id="p3-3" className="form-check-input mt-0"/>
     </div>
     {/* Select form */}

    
    

    </form >
  )
}

export default Part2