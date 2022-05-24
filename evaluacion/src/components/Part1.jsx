import React from 'react'

const data = [
  {question: 'JSX:', id: 1},
  {question: 'JSX:', id: 2},
  {question: 'Components:', id: 3},
  {question: ' Virtual DOM:', id: 4},
  {question: 'Perfomance:', id: 5},

]
const Part1 = () => {
  return (
        <form className="form-control  p-5 m-5  ">
            <h1> Describe React features:</h1>
            {
              data.map( item=> ((
                <div>
                  <label className="form-label ms-5"> {item.question}</label>
                  <input type="text"  className="form-control w-50 ms-5 " />
                </div>

              )))
            }

        </form>
  )
}

export default Part1