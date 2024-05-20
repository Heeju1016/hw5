
import React, { useState } from 'react'
import AddBtn from '../assets/img/add.svg'

const TodoList = () => {
    const [ inputValue, setInputValue] = useState('');
    const [ todo, setTodo ] = useState( [
        'wwwww', 'wwww'
    ])
    const createTodo = (e) => {
        e.preventDefault()
        if(inputValue === '') {
            alert("내용을 입력해주세요!");
        } else { 
            setTodo([...todo, inputValue]);
        }
    }
  return (
    <div className='wrap'>
        <form onSubmit={createTodo}>
            <h1>Todo List</h1>
            <input type='text' placeholder='입력하세요' onChange={(e) => {setInputValue(e.target.value)}}></input>
            <button><img src={AddBtn}/></button>
        </form>
        <ul>
            {todo.map((item)=> {
                return <li>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default TodoList