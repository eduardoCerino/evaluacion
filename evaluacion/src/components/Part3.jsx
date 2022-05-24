import React from 'react'

const data= [
    {questions: ' Describe steps to create a new React app:', id:1},
    {questions: '  Explain how lists work in React', id:2},
    {questions: ' Write an example of simple form in React:', id:3},
    {questions: ' Write an arrow function example:', id:4},
    {questions: ' What is a state in React?', id:5},
    {questions: ' What is the use of render() in React? ', id:6},
    {questions: 'How do you update the state of a component?', id:7},
    {questions: ' What are props in React?', id:8},
    {questions: 'How do you pass props between components? Write an example. ', id:9},
    {questions: 'How can you embed two or more components into one? Write an example.', id:10},
    {questions: ' Describe steps to create a new React app:', id:11},


    
]
const Part3 = () => {
  return (
        <form className="form-control  p-5 m-5 ">
               { data.map(
                    item => ((
                        <div className="form-floating mt-4 w-50 ms-5" key={item.id}>
                            <textarea name={item.id} id={item.id} cols="50" rows="4" className="form-control"> </textarea>
                            <label > {item.questions}</label>
                     </div>
                    
                    ))
                )}

        </form>
        
    
  )
}

export default Part3