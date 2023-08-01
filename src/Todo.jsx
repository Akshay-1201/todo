import React, { useState } from 'react'

const Todo = () => {
    const [todos,setTodos] = useState([]);
    const[inputValue,setInputValue] = useState('');
    const addTodo = ()=>{
        
        if(inputValue.trim()!==''){
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setTodos([...todos,newTodo]);
            setInputValue('');
        }
    }
  return (
    <div className='todo-contianer'>
    <h2>TODO List</h2>
    <input type='text'value={inputValue} onChange=  {(e)=>setInputValue(e.target.value)}/>
    <button onClick={addTodo} >Add</button>
     <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
            {todo.text}
            </li>
        ))}
     </ul>
    </div>
  )
}

export default Todo