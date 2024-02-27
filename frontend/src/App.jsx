import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { ShowTodo } from './components/ShowTodo'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <CreateTodo setTodos={setTodos}/>
      <ShowTodo todos = {todos} />
    </>
  )
}

export default App
