import React from 'react'

const data = [
    {question: 'a) getInitialState()', id: 1},
    {question: 'b) componentDidMount()', id: 2},
    {question: 'c) shouldComponentUpdate()', id: 3},
    {question: 'd) componentDidUpdate()', id: 4},
    {question: 'e) componentWillUnmount()', id: 5},
    {question: 'What is Redux?', id: 6},

]
const Part4 = () => {
  return (
    <form className="form-control  p-5 m-5">
        {
            data.map( item => ((
                <div className="form-floating mt-4 w-50 ms-5 ">
                    <textarea name={item.id} id={item.id} cols="50" rows="4" className="form-control "> </textarea>
                     <label > {item.question}</label>
                </div>
            ))

            )
        }
    </form>
  )
}

export default Part4