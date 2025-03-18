import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


// <TodoCreate onCreateTodo = {createTodo} /> -> createTodo fonksiyona erişmek isteyen bir kişi onCreateTodo bu props ismi ile yakalayabilir onu



function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos , newTodo]); // önceki todo-ları aç, üzerine de bana gelen newTodo-yu ekle demek !!!
  }

  console.log(todos);

  return (
    <>
    
         <TodoCreate onCreateTodo = {createTodo} />
         <TodoList todos = {todos} />
    </>
  )
}

export default App
