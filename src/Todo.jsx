import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [todos,setTodos] = useState([]);
    const[inputValue,setInputValue] = useState('');
    const [editMode,setEditMode] = useState(false);
    const [editId,setEditId]=useState(null);
    const [editValue,setEaditValue]=useState('');
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
    const deleteTodo = (id)=>{
        const updateTdos = todos.filter((todo)=> todo.id !== id);
        setTodos(updateTdos)
    }
    const enterEaditMode = (id,text) => {
       setEditMode(true);
       setEditId(id);
       setInputValue(text);

    }
    const updatetodo = ()=>{
        const updateTdos = todos.map((todo)=>{
            if(todo.id === editId){
                return{...todo,text:editValue};
            }
            return todo;
        })
        setTodos(updateTdos);
        setEditMode(false);
        setEditId(null);
        setInputValue('')
    }
  return (
    <div className='todo-contianer'>
    <h2>TODO List</h2>
    <input type='text'value={inputValue} onChange=  {(e)=>setInputValue(e.target.value)}/>
    
    {
        editMode ? (
            <div>
                <input type='text' value={editValue}
                onChange={(e)=>setEaditValue(e.target.value)}/>
                <button onClick={updatetodo}>Update</button>
            </div>
        ) : (
            <button onClick={addTodo}>Add</button>
        )
    }
    {/* <button onClick={addTodo} >Add</button> */}
     <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
            {todo.text}
            <div>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>enterEaditMode(todo.id, todo.text)}>Edit</button>
            </div>
            </li>
        ))}
     </ul>
    </div>
  )
}

export default Todo