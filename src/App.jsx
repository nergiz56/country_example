import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import React from 'react';


// <TodoCreate onCreateTodo = {createTodo} /> -> createTodo fonksiyona erişmek isteyen bir kişi onCreateTodo bu props ismi ile yakalayabilir onu



function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos , newTodo]); // önceki todo-ları aç, üzerine de bana gelen newTodo-yu ekle demek !!!
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]); // buradan dönen array-i alıyoruz, 
  }

  const updateTodo = (newTodo) => {
    const updatedTodos =  todos.map((todo) => {
          if(todo.id !== newTodo.id){
              return todo;
          }
          return newTodo;
      })
      setTodos([...updatedTodos]);
  }

  console.log(todos);

  return (
    <>
    
         <TodoCreate onCreateTodo = {createTodo} />
         <TodoList todos = {todos} onRemoveTodo = {removeTodo} onUpdateTodo={updateTodo} />
    </>
  )
}

export default App
