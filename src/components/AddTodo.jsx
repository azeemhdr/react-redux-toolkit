import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/features/todo/todoSlice'
function AddTodo() {
  const [input,setInput] = useState()
  const dispatch = useDispatch()

  //create a function to handle the form/todo.

  const addToHandler = (e)=> {
    e.preventDefault()
    dispatch(addTodo(input)) //for using the reducer method.
    setInput('')
  }

  return (
	<>
  <div className='p-4 bg-red-600'>
    <form action="" onSubmit={addToHandler} className='flex justify-between gap-5'>
      <input type="text" placeholder='Enter a Todo' value={input} onChange={(e)=>setInput(e.target.value)} className='w-full flex-3 bg-[#242424] px-4 rounded-md '/>
      <button type='submit' className='w-full flex-1'>Add Todo</button>
    </form>
    </div>
  </>
  )
}

export default AddTodo