import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList.jsx';

const App = () => {
  return (
    <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoList />}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
