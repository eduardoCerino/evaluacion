import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'

const data = [
  {question: 'The next component belongs to ES6 standards... ', id: 1 , img: img1},
  {question: 'The next component belongs to ES6 standards   ', id: 2 , img: img2},
  {question: 'The next Require declaration belongs to ES6 standards  ', id: 3, img: img3},
  {question: 'The next Require declaration belongs to ES6 standards  ', id: 4, img: img4},

]
const PartTwo = () => {
  return (
    <form  className="form-control  p-5 m-5">
      {
        data.map(item => ((
        <div className="input-group-text mt-4 d-flex flex-column form-floating ">  
          <img src={item.img} alt={item.question} className="m-5"/>
          <select name="item.id" id="item.id" className="form-select">
          <option selected>Open this select menu</option>
          <option value="value1"> True</option>
          <option value="value1"> False</option>
      </select>
      <label>{item.question} </label>
        </div>

        )))
      }


    </form>
  )
}

export default PartTwo